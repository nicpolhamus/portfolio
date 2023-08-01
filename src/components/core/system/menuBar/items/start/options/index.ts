import { NewWindowButton } from './new.window';
import { AppsButton } from './apps/apps.button';

export interface IOptionProps {
  handleVisibility: () => void;
}

export const StartButtonOptions = [
  NewWindowButton,
  AppsButton
];