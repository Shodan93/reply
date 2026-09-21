export interface TabsProps {
  items: string[];
  active?: number;
  onChange?: (index: number) => void;
}
export function Tabs(props: TabsProps): JSX.Element;
