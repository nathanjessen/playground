import { kebabCase } from 'lodash';

export interface FilterField {
  name: string;
  value: string | any[] | boolean | undefined;
  type?: string;
}

export const hyphenateArray = (arr: any[]): string => {
  const str = arr.join(' ');
  return kebabCase(str);
};

/**
 * Takes a form field and converts the name/value to a url string
 * @param { name, value, type }
 * @returns string
 */
export const formatUrl = ({ name, value, type }: FilterField): string => {
  if (type === 'range' && Array.isArray(value)) {
    return hyphenateArray([name, [value[0], 'to', value[1]]]);
  }
  if (typeof value === 'boolean' || typeof value === 'undefined') {
    if (value) return kebabCase(name);
    else return '';
  }
  if (!value || value.length === 0) return '';

  const filters: string =
    typeof value === 'object' ? hyphenateArray(value) : value;
  return hyphenateArray([name, filters]);
};
