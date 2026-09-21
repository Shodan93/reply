export interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  error?: string;
  disabled?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export function Input(props: InputProps): JSX.Element;
