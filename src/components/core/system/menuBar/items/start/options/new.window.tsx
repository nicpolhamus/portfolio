import { WindowService } from "../../../../../../../stores";

interface IStartButtonOptions {
  text: string;
  action: Function;
}

const StartButtonOptions: IStartButtonOptions[] = [
  {
    text: 'New Window',
    action: (windowService: WindowService) => {
      const
      windowService.add()
    }
  }
]