import type {
  IUseRouterHistory,
  IUseRouterLocation,
  IUseRouterPath,
  IUseRouterState,
  IUseRouterTo,
} from '../typings';
import { EUseRouterAction } from '../typings';
import eventEmitter from './eventEmitter';
import { TruncateStack } from './stack';
import { v4 as uuidv4 } from 'uuid';

function _initRootLocation(): IUseRouterLocation {
  return {
    pathname: '/',
    search: '',
    key: 'default',
    state: {},
  };
}

/** 初始化location */
const _rootLocation = _initRootLocation();

// 解析To参数
function parsePath(to: IUseRouterTo): Partial<IUseRouterPath> {
  if (typeof to === 'string') {
    const parsedPath: Partial<IUseRouterPath> = {};
    let cachePath = to;
    const searchIndex = cachePath.indexOf('?');
    if (searchIndex >= 0) {
      parsedPath.search = cachePath.substring(searchIndex);
      cachePath = cachePath.substring(0, searchIndex);
    }
    parsedPath.pathname = cachePath;
    return parsedPath;
  } else {
    return to;
  }
}

/** 返回一个简单的history对象，用来记录，监听，历史记录 */
export function createUseRouterHistory(): IUseRouterHistory {
  /** 创建事件中心 */
  const emitters = new eventEmitter();
  /** 创建一个location堆栈，存放历史 */
  const locationStack = new TruncateStack<IUseRouterLocation>();
  /** 当前location */
  let currentLocation = _rootLocation;
  /** 上一个action，默认POP */
  let lastAction = EUseRouterAction.POP;
  /** 将根location入栈 */
  locationStack.push(currentLocation);

  /** 生成新的location */
  function _generateNewLocation(to: IUseRouterTo, state: IUseRouterState = {}): IUseRouterLocation {
    const { pathname, search } = currentLocation;
    return {
      pathname,
      search,
      ...parsePath(to),
      state,
      key: uuidv4(),
    };
  }

  function push(to: IUseRouterTo, state?: IUseRouterState) {
    const newLocation = _generateNewLocation(to, state);
    if (!state) {
      if (
        newLocation.pathname === currentLocation.pathname &&
        newLocation.search === currentLocation.search
      ) {
        return;
      }
    }
    locationStack.push(newLocation);
    lastAction = EUseRouterAction.PUSH;
    currentLocation = newLocation;
    emitters.trigger({
      action: lastAction,
      location: currentLocation,
    });
  }

  function replace(to: IUseRouterTo, state?: IUseRouterState) {
    const newLocation = _generateNewLocation(to, state);
    if (!state) {
      if (
        newLocation.pathname === currentLocation.pathname &&
        newLocation.search === currentLocation.search
      ) {
        return;
      }
    }
    locationStack.replace(newLocation);
    lastAction = EUseRouterAction.REPLACE;
    currentLocation = newLocation;
    emitters.trigger({
      action: lastAction,
      location: currentLocation,
    });
  }

  function go(delta: number) {
    currentLocation = locationStack.pop(delta) || _rootLocation;
    lastAction = EUseRouterAction.POP;
    emitters.trigger({
      action: lastAction,
      location: currentLocation,
    });
  }

  return {
    get location() {
      return currentLocation;
    },
    get action() {
      return lastAction;
    },
    get length() {
      return locationStack.length();
    },
    get current() {
      return locationStack.current();
    },
    push,
    replace,
    listen: emitters.listen,
    go,
    forward: () => go(1),
    back: () => go(-1),
  };
}
