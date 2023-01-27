import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import {
  AuthenticationButton,
  AuthenticationButtonProps,
} from 'components/auth/button';

const authenticationButtonProps: AuthenticationButtonProps = {
  authenticationProviderBgColor: '#7289DA',
  authenticationProviderTextColor: '#FFF',
  authenticationProviderLabel: 'Discord',
  authenticationProviderName: 'discord',
};

const mockedSignInFn = vi.fn().mockImplementation(() => {});
vi.mock('next-auth/react', () => ({
  signIn: (providerName: string) => mockedSignInFn(providerName),
}));

describe('Authentication button test battery', () => {
  it('should call the sign in function when is clicked', () => {
    const { getByRole } = render(
      <AuthenticationButton {...authenticationButtonProps} />
    );
    const renderedButton = getByRole('button');

    renderedButton.click();
    expect(mockedSignInFn).toBeCalled();
  });
});
