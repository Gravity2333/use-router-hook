/** 定义新的数据结构 Truncate Stack
 * Truncate.pop 会返回当前的值，但是并不会真的将数据弹出
 * Truncate.push 插入值时，会截断(Truncate)后面的内容
 * Truncate.replace 替换当前项目
 */
interface ITruncateStack<T> {
    pop: (delta?: number) => T | undefined;
    push: (i: T) => void;
    replace: (i: T) => void;
    length: () => number;
    current: () => number;
}
export declare class TruncateStack<T> implements ITruncateStack<T> {
    private list;
    private pointer;
    pop(delta?: number): T;
    push(i: T): void;
    replace(i: T): void;
    length(): number;
    current(): number;
}
export {};
