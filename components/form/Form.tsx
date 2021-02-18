import * as React from 'react';

import { hasError } from 'utils/helpers';

interface IProps {
  form: any;
  onSubmit: any;
}

const Form: React.FC<IProps> = ({ form, onSubmit, children }) => {
  // we use this errors state to handle the input focusing in the layout effect
  // not sure if this duplication is neccessary but it works so we leave it for now
  const [errors, setErrors] = React.useState({});
  function _submit(e: any) {
    if (!form) {
      return;
    }
    e.preventDefault();
    const errors = form.validateFields();
    setErrors(errors);

    console.log({ errors });

    if (!hasError(errors)) {
      return onSubmit(e, form.inputState);
    }
  }

  React.useEffect(() => {
    const errorInputs = document.querySelectorAll('.input-error');
    const errorInput: any = errorInputs[0];
    if (errorInput) {
      errorInput.focus();
    }
  }, [errors]);

  return <form onSubmit={_submit}>{children}</form>;
};

export default Form;
