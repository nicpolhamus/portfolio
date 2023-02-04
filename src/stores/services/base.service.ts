export abstract class IBaseService {
  abstract get(arg?: any): any;
  abstract add(arg: any): any;
  abstract delete(arg: any): any;
  abstract update(arg: any): any;
}