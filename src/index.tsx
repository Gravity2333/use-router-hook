import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type {
  IRouterUpdate,
  IUseRouterHistory,
  IUseRouterProps,
  IUseRouterRoute,
  IUseRouterTo,
} from "./typings";
import { createUseRouterHistory } from "./utils/history";
import * as React from "react";

function NotFoundPageDefaultElem({ back }: { back: () => void }) {
  return (
    <div>
      404Page <span onClick={back}>back</span>
    </div>
  );
}

/**
 * **
 * 提供一套独立的路由系统，可以在单独的组件内部完成复杂的路由切换
 * @param IUseRouterProps
 * @returns [IUseRouterHistory,OutLet组件]
 */

export default function useRouter({
  routes,
  callbacks = [],
  initialPath,
  NotFoundPage = NotFoundPageDefaultElem,
}: IUseRouterProps & {
  initialPath?: IUseRouterTo;
  NotFoundPage?: (props: { back: () => void }) => JSX.Element;
}) {
  /** 初始化路由history */
  const routerHistory = useRef<IUseRouterHistory>(createUseRouterHistory());
  const routesMap = useRef<Record<string, IUseRouterRoute>>(
    routes.reduce((prev, curr) => {
      return {
        ...prev,
        [curr.pathname]: curr,
      };
    }, {})
  );

  const [MatchedRoute, setMatchedRoute] = useState<IUseRouterRoute | null>(
    routesMap.current[routerHistory.current?.location?.pathname || "/"]
  );

  const MatchedComponent = useMemo(() => {
    if (!MatchedRoute?.component) {
      return null;
    }
    return MatchedRoute.component;
  }, [MatchedRoute]);

  const OutLet = useCallback(
    function OutLet() {
      const MatchedRouteComponent =
        MatchedComponent ||
        (() => (
          <NotFoundPage
            back={() => {
              routerHistory.current?.push("/");
            }}
          />
        ));
      return (
        <MatchedRouteComponent
          history={routerHistory.current}
          location={{
            ...(routerHistory.current?.location || {}),
            state: {
              ...(MatchedRoute?.initialState || {}),
              ...(routerHistory.current?.location?.state || {}),
            },
          }}
        />
      );
    },
    [MatchedComponent, MatchedRoute?.initialState]
  );

  useEffect(() => {
    /** 初始化操作 */
    function matchRoute(update: IRouterUpdate) {
      const { location } = update;
      const { pathname } = location;
      const matchedRoute = routesMap.current[pathname];
      if (matchedRoute) {
        const { callback } = matchedRoute;
        /** 触发事件 */
        if (callback) {
          callback(update);
        }
        setMatchedRoute(matchedRoute);
      } else {
        setMatchedRoute(null);
      }
    }
    /** 注册事件 */
    callbacks.forEach((callback) => routerHistory.current.listen(callback));
    const unlisten = routerHistory.current.listen(matchRoute);
    return () => {
      unlisten();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    /** 跳转初始化路径 */
    if (initialPath) {
      routerHistory.current.push(initialPath);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [routerHistory.current, OutLet] as [
    IUseRouterHistory,
    () => JSX.Element
  ];
}
