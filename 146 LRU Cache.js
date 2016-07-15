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
    this.capacity = capacity;
    this.curSize = 0;
};

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function(key) {
    let node = this.map.get(key);
    if (!node) {
        return -1;
    }
    
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
    // this.curSize++;
    
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
    } else {
        this.curSize++
        if (this.curSize > this.capacity) {
            //delete tail
            this.map.delete(this.tail.key);
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.curSize--;
        }
    }
    
    this.map.set(key, newNode);
};