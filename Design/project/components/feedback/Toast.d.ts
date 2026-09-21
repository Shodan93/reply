export interface ToastProps {
  tone?: 'ink' | 'teal' | 'coral';
  icon?: string;
  children: React.ReactNode;
}
export function Toast(props: ToastProps): JSX.Element;
