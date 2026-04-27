type Nullable<T> = T | null;

type PriorityQueue<T> = {
    data: T[];
    push(item: T): void;
    pop(): T | null;
    isEmpty(): boolean;
};

function createPriorityQueue<T>(): PriorityQueue<T> {
    const queue: T[] = [];

    function push(item: T) {
        queue.push(item);
        queue.sort();
    }

    function pop(): T | null {
        return isEmpty() ? null : queue.shift() || null;
    }

    function isEmpty(): boolean {
        return queue.length === 0;
    }

    return { data: queue, push, pop, isEmpty };
}

export { Nullable, createPriorityQueue };