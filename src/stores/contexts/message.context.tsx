import { createContext, Dispatch, SetStateAction} from 'react';

export interface IMessageContext {
  setMessage?: Dispatch<SetStateAction<string>>;
  message: string;
}

export const MessageContext = createContext<IMessageContext>({ message: '' });