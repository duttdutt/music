export const useDebounce = <T extends (...args: any[]) => any>(
    func: T,
    duration: number
): ((...args: Parameters<T>) => void) => {
    let timeout: ReturnType<typeof setTimeout> | null = null;

    return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
        const effect = () => {
            timeout = null;
            return func.apply(this, args);
        };

        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(effect, duration);
    };
};
