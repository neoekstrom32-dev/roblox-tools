export function memoize<T extends (...args: any[]) => any>(fn: T): T {
    const cache = new Map<string, ReturnType<T>>();
    return function(...args: Parameters<T>): ReturnType<T> {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key)!;
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    } as T;
}

export function debounce<T extends (...args: any[]) => void>(fn: T, delay: number): T {
    let timeoutId: NodeJS.Timeout;
    return function(...args: Parameters<T>): void {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => fn(...args), delay);
    } as T;
}

export function throttle<T extends (...args: any[]) => void>(fn: T, limit: number): T {
    let lastCall = 0;
    return function(...args: Parameters<T>): void {
        const now = Date.now();
        if (now - lastCall >= limit) {
            lastCall = now;
            fn(...args);
        }
    } as T;
}
