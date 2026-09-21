import React from 'react';
export interface ButtonProps {
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  icon?: string;
  children: React.ReactNode;
  onClick?: () => void;
}
export function Button(props: ButtonProps): JSX.Element;
