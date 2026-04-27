export function deepClone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}

export function mergeDeep<T>(target: T, source: Partial<T>): T {
    for (const key in source) {
        if (source[key] && typeof source[key] === 'object') {
            target[key] = target[key] || {};
            mergeDeep(target[key], source[key]);
        } else {
            target[key] = source[key];
        }
    }
    return target;
}

export function isEmpty(obj: Record<string, unknown>): boolean {
    return Object.keys(obj).length === 0;
}

export function debounce(func: Function, delay: number) {
    let timeoutId: NodeJS.Timeout;
    return function(...args: any[]) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}