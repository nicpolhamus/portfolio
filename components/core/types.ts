export type TAction = (args: any) => void;

export type TPosition = {
  x: number;
  y: number;
};

export type TMenuItem = {
  text: string;
  action: TAction;
};