export interface CardProps {
  title?: string;
  eyebrow?: string;
  children?: React.ReactNode;
  variant?: 'bordered' | 'elevated' | 'inverse';
  accent?: string;
}
export function Card(props: CardProps): JSX.Element;
