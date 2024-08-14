type Pathname = string;
type Search = string;
export type IUseRouterState = Record<string, any>;
type Key = string | number;
export declare enum EUseRouterAction {
    'POP' = "POP",
    'PUSH' = "PUSH",
    'REPLACE' = "REPLACE"
}
/** 存储当前路径信息 */
export interface IUseRouterPath {
    pathname: Pathname;
    search: Search;
}
/** 路径信息和状态 */
export interface IUseRouterLocation extends IUseRouterPath {
    /** 当前唯一key */
    key: Key;
    /** 记录当前状态 */
    state: IUseRouterState;
}
export type IRouterUpdate = {
    action: EUseRouterAction;
    location: IUseRouterLocation;
};
export type IRouterCallback = (update: IRouterUpdate) => void;
export type IUseRouterTo = Partial<IUseRouterPath> | string;
export interface IUseRouterHistory {
    /** 上一次操作的action 默认EAction.POP */
    action: EUseRouterAction;
    /** Location 记录当前路径信息和状态 */
    location: IUseRouterLocation;
    /** push 路由 */
    push: (to: IUseRouterTo, state?: IUseRouterState) => void;
    /** replace 路由 */
    replace: (to: IUseRouterTo, state?: IUseRouterState) => void;
    /**
     * 向前后导航n个实体，n可正可负
     */
    go: (delta: number) => void;
    /** 向后导航一个实体 等价于go(1) */
    back: () => void;
    /** 向前导航一个实体，等价于go(-1) */
    forward: () => void;
    /** 监听注册 */
    listen: (listener: IRouterCallback) => (() => void);
    /** 长度 */
    length: number;
    /** curent pointer位置 */
    current: number;
}
export interface IUseRouterRoute {
    /** 标题 */
    title?: string;
    /** 路径 */
    pathname: Pathname;
    /** 渲染的组件元素 */
    component: (props?: any) => JSX.Element;
    /** 默认数据 */
    initialState?: Record<string, any>;
    /** callback 当前路径被匹配到时调用 */
    callback?: IRouterCallback;
}
export interface IUseRouterProps {
    routes: IUseRouterRoute[];
    callbacks?: IRouterCallback[];
}
export {};
