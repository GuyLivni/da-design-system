import React, { FC, ReactNode, ButtonHTMLAttributes } from 'react';
import tw, { css, styled } from 'twin.macro';
import { WithTheme } from '../../theme/types';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'small' | 'large';
  disabled?: boolean;
  children: ReactNode;
}

const StyledButton = styled.button(
  ({
    variant = 'primary',
    size = 'large',
    disabled,
    theme,
  }: ButtonProps & WithTheme) => [
    tw`text-lg px-8 py-2 rounded focus:outline-none cursor-pointer`,
    tw`transform transition-transform duration-75`,
    tw`hocus:(scale-105)`,

    variant === 'primary' && [
      css`
        color: ${theme.colors.white};
        border: 1px solid ${theme.colors.primary};
        background-color: ${theme.colors.primary};
      `,
    ],

    variant === 'secondary' && [
      css`
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};
        background-color: ${theme.colors.transparent};
      `,
    ],

    variant === 'text' && [
      css`
        color: ${theme.colors.primary};
        border: none;
        background-color: ${theme.colors.transparent};
      `,
    ],

    disabled && tw`disabled:opacity-50`,
    size === 'small' ? tw`text-sm` : tw`text-lg`,
  ]
);

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
