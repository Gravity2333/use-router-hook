import type { IUseRouterHistory, IUseRouterProps, IUseRouterTo } from "./typings";
/**
 * **
 * 提供一套独立的路由系统，可以在单独的组件内部完成复杂的路由切换
 * @param IUseRouterProps
 * @returns [IUseRouterHistory,OutLet组件]
 */
export default function useRouter({ routes, callbacks, initialPath, NotFoundPage, }: IUseRouterProps & {
    initialPath?: IUseRouterTo;
    NotFoundPage?: (props: {
        back: () => void;
    }) => JSX.Element;
}): [IUseRouterHistory, () => JSX.Element];
