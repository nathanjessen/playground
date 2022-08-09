import { render, screen } from '@testing-library/react';
import EmailSignupFormContainer from './index';

test('it should have the correct form', async () => {
  render(<EmailSignupFormContainer />);
  const form = await screen.findByText('Sign up for email updates');
  expect(form).toBeVisible();
});
