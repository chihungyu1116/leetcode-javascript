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










// Second Implementation


function DoublyLinkListNode(key, value) {
    this.key = key;
    this.value = value;
    this.prev = this.next = null;
}

/**
 * @constructor
 */
var LRUCache = function(capacity) {
    this.head = this.tail = null;
    this.maxCapacity = capacity;
    this.currSize = 0;
    this.hash = {};
};

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.hash[key]) {
        return -1;
    }
    
    this.moveToHead(key);
    return this.hash[key].value;
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function(key, value) {
    if(this.maxCapacity <= 0) {
        return;
    }

    if(!this.hash[key]) {

        if(this.currSize === this.maxCapacity) {
            this.removeLast();
            this.currSize--;
        }
        
        this.hash[key] = new DoublyLinkListNode(key, value);
        this.currSize++;
    }
    
    this.hash[key].value = value;
    this.moveToHead(key);
};

LRUCache.prototype.removeLast = function() { 
    if(this.tail === null) {
        return;
    }

    delete this.hash[this.tail.key];
    var newTail = this.tail.prev;

    if(newTail === null) {
        this.head = this.tail = null;
        return;
    }

    this.tail.prev = null;
    newTail.next = null;
    this.tail = newTail;
}

LRUCache.prototype.moveToHead = function(key) {
    var newHead = this.hash[key];
    
    if(this.head === null && this.tail === null) {
        this.head = this.tail = newHead;
    }

    if(newHead === this.head) {
        return;
    }
    
    if(newHead === this.tail) {
        this.tail = newHead.prev;
    }
    
    if(newHead.prev) {
        newHead.prev.next = newHead.next;    
    }
    if(newHead.next) {
        newHead.next.prev = newHead.prev;    
    }
    
    newHead.prev = null;
    newHead.next = this.head;
    this.head.prev = newHead;
    this.head = newHead;
}