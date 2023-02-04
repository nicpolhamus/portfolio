import { IMessageContext } from '../contexts/message.context';
import { ErrorService } from './error.service';
import { IWindowContext } from '../contexts/window.context';
import { IWindow } from '../../components';
import { IBaseService } from './base.service';

export class WindowService extends ErrorService implements IBaseService {
  private windowContext: IWindowContext;
  
  constructor(messageContext: IMessageContext, windowContext: IWindowContext) {
    super(messageContext);

    this.windowContext = windowContext;
    this.windowContext.minimizedWindows = this.windowContext
      .windows.filter(({ minimized }) => minimized === true);
  }

  public get(window?: IWindow): IWindow | IWindow[] {
    if (window) {
      const retrievedWindow = this.windowContext.windows.find(
        ({ id }) => id === window.id
      );

      if (!retrievedWindow) {
        this.handleError("window doesn't exist!");
      }

      return retrievedWindow;
    } else {
      return this.windowContext.windows;
    }
  }

  public add(window: IWindow): IWindow {
    this.windowContext.windows.push(window);

    return window;
  }

  public delete({ id: windowId }: IWindow): IWindow[] {
    const windowIndex = this.windowContext.windows.findIndex(
      ({ id }) => id === windowId
    );

    return this.windowContext.windows.splice(windowIndex, 1);
  }

  public update(window: IWindow): IWindow {
    this.delete(window);

    return this.add(window);
  }

  public minimize(window: IWindow): void {
    if (window) {
      window.minimized = true;

      this.delete(window);

      this.windowContext.minimizedWindows 
        ? this.windowContext.minimizedWindows.push(window)
        : Array().push(window);
    } else {
      this.handleError("window doesn't exist!");
    }
  }

  public deleteMinimized(window: IWindow): void {
    if (window &&  this.windowContext.minimizedWindows) {
      const windowIndex = this.windowContext.minimizedWindows.findIndex(
        ({ id }) => id === window.id
      );

      this.windowContext.minimizedWindows.splice(windowIndex, 1);
    } else {
      this.handleError("window doesn't exist!");
    }
  }

  public maximize(window: IWindow): void {
    if (window) {
      window.minimized = false;

      this.deleteMinimized(window);

      this.add(window);
    } else {
      this.handleError("window doesn't exist!");
    }
  }
}