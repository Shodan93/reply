export interface IconButtonProps {
  icon?: string;
  variant?: 'ghost' | 'outline' | 'inverse';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  'aria-label': string;
}
export function IconButton(props: IconButtonProps): JSX.Element;
