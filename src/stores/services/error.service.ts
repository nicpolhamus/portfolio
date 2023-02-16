import { IMessageContext } from '../contexts/message.context'

export abstract class ErrorService {
  private context: IMessageContext;

  constructor(context: IMessageContext) {
    this.context = context;
  }

  public handleError(errorMessage: string): void {
    if (this.context.setMessage) {
      this.context.setMessage(errorMessage);
    }
  }
}