import { formatUrl } from './filters-formatter';

// empty
// string
// array
// boolean
// range
// max

test('Named field with empty string value', () => {
  const field = { name: 'Sample', value: '' };
  expect(formatUrl(field)).toBe('');
});

test('Named field with empty array value', () => {
  const field = { name: 'Sample', value: [] };
  expect(formatUrl(field)).toBe('');
});

test('Named field with string value', () => {
  const field = { name: 'Sample', value: 'Testing' };
  expect(formatUrl(field)).toBe('sample-testing');
});

test('Named field with array value', () => {
  const field = { name: 'Sample', value: ['Testing', 'Optional'] };
  expect(formatUrl(field)).toBe('sample-testing-optional');
});

test('Named field with boolean false value', () => {
  const field = { name: 'Sample', value: false };
  expect(formatUrl(field)).toBe('');
});

test('Named field with boolean true value', () => {
  const field = { name: 'Sample', value: true };
  expect(formatUrl(field)).toBe('sample');
});

test('Named field with array value and range type', () => {
  const field = { name: 'Price', value: [0, 500], type: 'range' };
  expect(formatUrl(field)).toBe('price-0-to-500');
});
