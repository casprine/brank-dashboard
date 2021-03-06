import { Dict } from 'types';
import toast from 'components/toast/Toaster';

export function resetObject(object: any) {
  const keys = Object.keys(object);
  keys.forEach((key) => {
    object[key] = '';
  });
  return { ...object };
}

export function objectHasProperty(object: Object, property: string) {
  return object.hasOwnProperty(property);
}

export const objectKeys = <T extends Dict>(obj: T) => (Object.keys(obj) as unknown) as (keyof T)[];

// deep compare two object
export function isEqual(object1: any, object2: any) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if ((areObjects && !isEqual(val1, val2)) || (!areObjects && val1 !== val2)) {
      return false;
    }
  }

  return true;
}

export function isObject(object: any) {
  return object != null && typeof object === 'object';
}

export function hexToRGBA(h: string, a?: string) {
  let r: string | number = 0,
    g: string | number = 0,
    b: string | number = 0;

  // 3 digits
  if (h.length == 4) {
    r = '0x' + h[1] + h[1];
    g = '0x' + h[2] + h[2];
    b = '0x' + h[3] + h[3];

    // 6 digits
  } else if (h.length == 7) {
    r = '0x' + h[1] + h[2];
    g = '0x' + h[3] + h[4];
    b = '0x' + h[5] + h[6];
  }

  return `rgba(${r},${g},${b},${a || '100%'})`;
}

export function camelCaseToReadable(value: string) {
  var result = value.replace(/([A-Z])/g, ' $1');
  return result.split('_').join(' ').toLowerCase();
}

export function hasError(object: Object) {
  if (!object) {
    return;
  }
  const values = Object.values(object).filter((value) => {
    return value !== '' && value !== undefined;
  });

  return values.length > 0;
}

export function formatMoney(value: string | number = 0) {
  let number;
  if (typeof value !== 'string' && typeof value !== 'number') {
    throw new Error('Please pass in a string or number to this function');
  }
  number = typeof value === 'string' ? Number(value) : value;

  return number
    .toLocaleString(undefined, {
      style: 'currency',
      currency: 'USD',
    })
    .replace('$', '')
    .replace('US', '');
}

export function copyText(text: string, message: string) {
  navigator?.clipboard?.writeText(text);
  toast.notify({
    position: 'top',
    title: message,
    type: 'success',
    description: '',
  });
}

export function truncateString(fileName: string = '', length = 20, extension = '...') {
  return `${fileName.slice(0, length)}.${extension}`;
}
