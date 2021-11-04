import { cloneDeep, mergeWith } from 'lodash';

// TODO: Mysterious Name
export const customizer = (objValue: any, srcValue: any) => {
  if (Array.isArray(objValue)) {
    const newValue = new Set(objValue.concat(srcValue));
    return Array.from(newValue);
  }
};

// TODO: Mysterious Parameter Name
export const merge = (object: any, other: any) => {
  const newObj = cloneDeep(object);
  mergeWith(newObj, other, customizer);
  return newObj;
};
