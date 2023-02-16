import { useContext } from "react";
import { MessageContext, WindowContext, WindowService } from "../stores";



export function useWindowService(): WindowService {
  const messageContext = useContext(MessageContext);
  const windowContext = useContext(WindowContext);

  return new WindowService(messageContext, windowContext);
}