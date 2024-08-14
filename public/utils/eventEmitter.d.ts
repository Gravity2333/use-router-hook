import type { IRouterCallback, IRouterUpdate } from '../typings';
interface IEventEmitter {
    listen: (listener: IRouterCallback) => (() => void);
    trigger: (update: IRouterUpdate) => void;
    getLength: () => number;
}
/** 实现一个事件中心 */
export default class eventEmitter implements IEventEmitter {
    private handlers;
    /** 注册监听 */
    listen: (listener: any) => () => void;
    trigger: (update: IRouterUpdate) => void;
    getLength: () => number;
}
export {};
