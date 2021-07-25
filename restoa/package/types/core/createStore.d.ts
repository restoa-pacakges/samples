interface GetValueHook<T> {
    (value: T, key: string): T;
}
interface SetValueHook<T> {
    (value: T, key: string): T;
}
interface Option<T> {
    key?: string;
    getValueHook?: GetValueHook<T>;
    setValueHook?: SetValueHook<T>;
}
interface UseValue<T> {
    (): T;
}
interface SetValueAction<T> {
    (currentValue: T): T;
}
interface SetValue<T> {
    (next: T | SetValueAction<T>): void;
}
interface GetValue<T> {
    (): T;
}
export declare function createStore<T>(initialValue: T, option?: Option<T>): [UseValue<T>, SetValue<T>, GetValue<T>];
export {};
