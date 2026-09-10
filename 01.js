class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.head = { key: 0, value: 0, prev: null, next: null };
        this.tail = { key: 0, value: 0, prev: null, next: null };
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    get(key) {
        if (!this.map.has(key)) {
            return -1;
        }
        let node = this.map.get(key);
        this.remove(node);
        this.addFirst(node);
        return node.value;
    }
    put(key, value) {
        if (this.map.has(key)) {
            let node = this.map.get(key);
            node.value = value;
            this.remove(node);
            this.addFirst(node);
            return;
        }
        let node = {
            key: key,
            value: value,
            prev: null,
            next: null
        };
        this.map.set(key, node);
        this.addFirst(node);
        if (this.map.size > this.capacity) {
            let last = this.tail.prev;
            this.remove(last);
            this.map.delete(last.key);
        }
    }
    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    addFirst(node) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
    }
}


let cache = new LRUCache(2);
cache.put(1, 10);
cache.put(2, 20);
console.log(cache.get(1)); // 10
cache.put(3, 30);
console.log(cache.get(2)); // -1
console.log(cache.get(3)); // 30