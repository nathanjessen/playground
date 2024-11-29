import kebabCase from 'lodash/kebabCase';

export interface FilterField {
  name: string;
  value: string | number | boolean | Array<string | number> | undefined;
  type?: string;
}

export const hyphenateArray = (arr: Array<string | number>): string => {
  const str = arr.join(' ');
  return kebabCase(str);
};

/**
 * Takes a form field and converts the name/value to a url string
 * @param { name, value, type }
 * @returns string
 */
export const formatUrl = ({ name, value, type }: FilterField): string => {
  if (!value || (Array.isArray(value) && value.length === 0)) {
    return '';
  }

  if (type === 'range' && Array.isArray(value)) {
    return hyphenateArray([name, value[0], 'to', value[1]]);
  }

  if (Array.isArray(value)) {
    return hyphenateArray([name, ...value]);
  }

  if (typeof value === 'boolean') {
    return value ? kebabCase(name) : '';
  }

  return hyphenateArray([name, value.toString()]);
};
