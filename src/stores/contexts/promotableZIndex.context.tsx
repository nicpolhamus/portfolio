// inspo from: https://github.com/huy-nguyen/z-index-management/blob/problem-simple-solution/src/usePromotableZIndex.ts
// big thanks/shout outs to huy-nguyen
import { createContext, PropsWithChildren, useState } from 'react';

export interface IPromotedZIndexContext {
  addZIndex: (windowId: string) => void;
  getZIndex: (windowId: string) => number;
  promoteZIndex: (windowId: string) => void;
  restoreZIndex: () => void;
}

export const PromotableZIndexContext = createContext<IPromotedZIndexContext | null>(null);

export const PromotableZIndexProvider = ({ children }: PropsWithChildren) => {
  const [normalZIndices, setNormalZIndices] = useState<string[]>([]);
  const defaultZIndex = 1;
  const promotedZIndex = 100;
  const zIndexIncrement = 10;

  // The name of the currently promoted sibling, if any. Initialized to
  // `undefined` (none promoted):
  const [promotedElementName, setPromotedElementName] = useState<string | undefined>(undefined);

  // Returns the z-index of a sibling, taking into account whether it's the
  // currently promoted one:
  const getZIndex = (windowId: string): number => {
    if (Array.isArray(normalZIndices)) {
      const windowIndex = normalZIndices.findIndex(id => id === windowId);
      
      return (windowIndex + zIndexIncrement);
    }
      
    return defaultZIndex;
  }

  const addZIndex = (windowId: string) => {
    normalZIndices.push(windowId);

    setNormalZIndices(normalZIndices);
  }

  const promoteZIndex = (windowId: string) => {
    setPromotedElementName(windowId);

    if (normalZIndices.length > 1) {
      const promotedIndex = normalZIndices.findIndex(id => id === windowId);
      // sort array so that windows stack correctly
      const indicesToMove = normalZIndices.splice(promotedIndex, 1);
      
      setNormalZIndices(normalZIndices.concat(indicesToMove));
    }
  };

  const restoreZIndex = () => setPromotedElementName(undefined);

  const value = { addZIndex, getZIndex, promoteZIndex, restoreZIndex };

  return <PromotableZIndexContext.Provider value={value}>{children}</PromotableZIndexContext.Provider>;
}