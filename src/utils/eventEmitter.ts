import type { IRouterCallback, IRouterUpdate } from '../typings';

interface IEventEmitter {
  listen: (listener: IRouterCallback) => (() => void);
  trigger: (update: IRouterUpdate) => void;
  getLength: () => number;
}

/** 实现一个事件中心 */
export default class eventEmitter implements IEventEmitter {
  private handlers: any[] = [];
  /** 注册监听 */
  public listen = (listener: any) => {
    this.handlers.push(listener);
    return () => {
      this.handlers.filter((handler) => handler !== listener);
    };
  };

  public trigger = (update: IRouterUpdate) => {
    this.handlers.forEach((handler) => handler(update));
  };

  public getLength = () => {
    return this.handlers.length;
  };
}
