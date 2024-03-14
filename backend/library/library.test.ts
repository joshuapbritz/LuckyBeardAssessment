import { prettify } from './strings';
import { validate, verifyContactForm } from './verify-contact-form';

test('Test validate data object: Passable Values', () => {
  const result = verifyContactForm({
    name: 'John Doe',
    email: 'john.doe@email.com',
    phoneNumber: '+27888888888',
    company: 'John Co',
    role: 'Developer',
  });

  expect(result).toBe(true);
});

test('Test validate data object: Invalid Values', () => {
  const result = verifyContactForm({
    name: 'John 3 Doe',
    email: 'john.doe',
    phoneNumber: '+27888888888',
    company: 'John Co',
    role: 'Writer',
  });

  expect(result).toBe(false);
});

test('Test data point validator: text', () => {
  const isValid = validate('Joshua', 'text', { required: true });
  expect(isValid).toBe(true);
});

test('Test data point validator: invalid email', () => {
  const isValid = validate('theismyemail.com', 'email', { required: true });
  expect(isValid).toBe(false);
});

test('Test data point validator: valid email', () => {
  const isValid = validate('hello@theismyemail.com', 'email', { required: true });
  expect(isValid).toBe(true);
});

test('Test data point validator: valid list', () => {
  const isValid = validate('A', 'list', { required: true, validateList: ['A', 'B', 'C'] });
  expect(isValid).toBe(true);
});

test('Test data point validator: invalid list', () => {
  const isValid = validate('D', 'list', { required: true, validateList: ['A', 'B', 'C'] });
  expect(isValid).toBe(false);
});

test('Test data point validator: missing list', () => {
  expect(() => validate('D', 'list', { required: true })).toThrow('options.validateList is required when doing a list validity check');
});

test('Test data point validator: invalid phone', () => {
  const isValid = validate('myphone', 'phone', { required: true });
  expect(isValid).toBe(false);
});

test('Test data point validator: valid phone', () => {
  const isValid = validate('+27888888888', 'phone', { required: true });
  expect(isValid).toBe(true);
});

test('Test data point validator: valid phone', () => {
  const isValid = validate('0888888888', 'phone', { required: true });
  expect(isValid).toBe(true);
});

test('Prettifier: valid', () => {
  const result = prettify('jamesIsOkay');
  expect(result).toBe('James Is Okay');
});

test('Prettifier: valid', () => {
  const result = prettify('helloworld');
  expect(result).toBe('Helloworld');
});

