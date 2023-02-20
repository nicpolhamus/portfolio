// inspo from: https://github.com/huy-nguyen/z-index-management/blob/problem-simple-solution/src/usePromotableZIndex.ts
// big thanks/shout outs to huy-nguyen
import { createContext, PropsWithChildren, useState } from 'react';

export interface IPromotedZIndexContext {
  addZIndex: (name: string) => void;
  getZIndex: (name: string) => number;
  promoteZIndex: (name: string) => void;
  restoreZIndex: () => void;
}

export const PromotableZIndexContext = createContext<IPromotedZIndexContext | null>(null);

export const PromotableZIndexProvider = ({ children }: PropsWithChildren) => {
  const [normalZIndices, setNormalZIndices] = useState<Array<{ id: string, zIndex: number }>>([]);
  const defaultZIndex = -1;
  const promotedZIndex = 100;

  // The name of the currently promoted sibling, if any. Initialized to
  // `undefined` (none promoted):
  const [promotedElementName, setPromotedElementName] = useState<string | undefined>(undefined);

  // Returns the z-index of a sibling, taking into account whether it's the
  // currently promoted one:
  const getZIndex = (zIndexId: string) => {
    (promotedElementName === zIndexId) 
      ? promotedZIndex 
      : normalZIndices.find(({ id }) => id === zIndexId)?.zIndex;
  }

  const addZIndex = (zIndexId: string) => {
    setNormalZIndices({ [zIndexId]: defaultZIndex, ...normalZIndices});
  }

  const promoteZIndex = (siblingName: string) => setPromotedElementName(siblingName);

  const restoreZIndex = () => setPromotedElementName(undefined);

  const value = { addZIndex, getZIndex, promoteZIndex, restoreZIndex };

  return <PromotableZIndexContext.Provider value={value}>{children}</PromotableZIndexContext.Provider>;
}