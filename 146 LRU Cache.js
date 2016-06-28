// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and set.

// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// set(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.
class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
/**
 * @constructor
 */
var LRUCache = function(capacity) {
    this.list = null;
    this.map = new Map();
    this.head = null;
    this.tail = null;
    this.size = capacity;
    this.curSize = 0;
};

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.map.get(key)) {
        return -1;
    }
    
    let node = this.map.get(key);
    
    if (node === this.head) {
        return node.val;
    }
    
    // remove node from list
    if (node === this.tail) {
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
    } else {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    
    // insert node to head
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    
    return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function(key, value) {
    let newNode = new Node(key, value);
    
    if (this.curSize === 0) {
        this.tail = newNode;
    } else {
        newNode.next = this.head;
        this.head.prev = newNode;
    }
    
    this.head = newNode;
    this.curSize++;
    
    // update
    if (this.map.get(key)) {
        let oldNode = this.map.get(key);
        
        // remove node
        if (oldNode === this.tail) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            oldNode.prev.next = oldNode.next;
            oldNode.next.prev = oldNode.prev;
        }
        
        this.curSize--;
        
    } else {
        if (this.curSize > this.size) {
            //delete tail
            this.map.delete(this.tail.key);
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.curSize--;
        }
    }
    
    this.map.set(key, newNode);
};