import * as React from 'react';
import { resetObject, objectHasProperty, isEqual } from 'utils/helpers';
import validators from 'utils/validations';
// import useTraceUpdate from './useTraceUpdate';
type formFields = Record<string, any>;

interface IFormConfig {
  fields: formFields;
  optional?: string[];
}

export interface IUseForm {
  inputState: formFields;
  errors: formFields;
  validateField(e?: any): void;
  setInputField: (name: string, value: string) => void;
  onChange(e?: any): void;
  onBlur(e?: any): void;
  initializeForm(form: formFields): void;
  setInputState(input: any): void;
  // validateFields(): void;
  resetForm(): void;
  resetFormToInitialState(): void;
  updateInitialState(state: any): void;
  hasFormStateChanged(): boolean;
}

const useForm = (config: IFormConfig): IUseForm => {
  const { optional, fields } = config;
  const [initialState, setInitialState] = React.useState(fields);
  const [inputState, setInputState] = React.useState<Record<keyof typeof fields, any>>(fields);
  const [errors, setErrors] = React.useState(resetObject({ ...fields }));
  const latestInputState = React.useRef(fields);
  const latestErrorState = React.useRef(resetObject({ ...fields }));
  const optionalRef = React.useRef(optional);

  const _setInputState = React.useCallback((name: string, value: any) => {
    setInputState((prevInputState: any) => {
      return {
        ...prevInputState,
        [name]: value,
      };
    });

    latestInputState.current = {
      ...latestInputState.current,
      [name]: value,
    };
  }, []);

  function _setErrors(name: string, error: any) {
    setErrors((prevErrors: any) => {
      return { ...prevErrors, [name]: error };
    });
    latestErrorState.current = {
      ...latestErrorState.current,
      [name]: error,
    };
  }

  const validateField = React.useCallback((e: any) => {
    const { name } = e.target;
    const optional = optionalRef.current;
    if (optional?.includes(name)) {
      return;
    }
    const error = validators[objectHasProperty(validators, name) ? name : 'any'](
      latestInputState.current[name],
      name,
    );
    _setErrors(name, error);
  }, []);

  // onchange handler
  const onChange = React.useCallback(
    (e: any) => {
      const { name, value } = e.target;

      console.log({ [name]: value });
      _setInputState(name, value);
    },
    [validateField, _setInputState],
  );

  const onBlur = React.useCallback(
    (e: any) => {
      validateField(e);
    },
    [validateField],
  );

  function resetForm() {
    setInputState(resetObject(inputState));
    latestInputState.current = resetObject(inputState);
    latestErrorState.current = resetObject(inputState);
  }

  const initializeForm = React.useCallback((form: any) => {
    setInputState(form);
    latestInputState.current = form;
  }, []);

  function resetFormToInitialState() {
    setInputState(initialState);
  }

  function hasFormStateChanged() {
    return !isEqual(initialState, inputState);
  }

  function updateInitialState(state: any) {
    setInitialState(state);
  }

  return {
    resetFormToInitialState,
    updateInitialState,
    hasFormStateChanged,
    initializeForm,
    resetForm,
    validateField,
    errors,
    onBlur,
    onChange,
    inputState,
    setInputField: _setInputState,
    setInputState,
  };
};

export default useForm;
