import { produce } from 'immer';
import { create } from 'zustand';

import { WindowStore } from './window.store';

export const useStore = create((set) => ({
  ...WindowStore(set, produce),
}));