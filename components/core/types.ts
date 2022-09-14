export type TAction = (args: any) => void;

export type TPosition = {
  x: number;
  y: number;
};

export type TMenuItem = Record<string, TAction>;