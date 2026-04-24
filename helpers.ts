function memoize(fn: Function): Function {
    const cache = new Map();
    return function(...args: any[]): any {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

function throttle(fn: Function, limit: number): Function {
    let inThrottle: boolean;
    return function(...args: any[]): void {
        if (!inThrottle) {
            fn(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

export { memoize, throttle };