import { createContext, Dispatch, SetStateAction} from 'react';

export interface IMessageContext {
  message?: string;
  setMessage?: Dispatch<SetStateAction<string>>;
}

export const MessageContext = createContext<IMessageContext>({ message: '' });