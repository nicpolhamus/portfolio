import { useContext } from 'react';
import { IPromotedZIndexContext, PromotableZIndexContext } from '../stores';

export function usePromotableZIndex(): IPromotedZIndexContext {
  const promotedZIndexContext = useContext(PromotableZIndexContext) as IPromotedZIndexContext;

  return promotedZIndexContext;
}