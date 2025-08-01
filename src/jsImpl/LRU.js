/**
 * @param {number} capacity
 */

var LRUCache = function(capacity) {
    this.capacity = capacity
    this.kv = new Map();
    this.queue = []
    this.makeQueueProper = function(key){
        let idx = this.queue.indexOf(key)
        if (idx !== -1) this.queue.splice(idx, 1);
        this.queue.unshift(key)
    }
    return null
    
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    // if(this.kv.has(key)){
    //     this.makeQueueProper(key)
    //     return this.kv.get(key)
    // }
    // return -1

    if (!this.kv.has(key)) return -1;

    // Move to end (most recently used)
    const value = this.kv.get(key);
    this.kv.delete(key);
    this.kv.set(key, value);
    return value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.kv.has(key)) {
        this.kv.delete(key); // Remove old so we can move to end
    } else if (this.kv.size >= this.capacity) {
        // Remove least recently used (first entry)
        const lruKey = this.kv.keys().next().value;
        this.kv.delete(lruKey);
    }

    this.kv.set(key, value); // Insert new or updated key at end
    // if(this.kv.has(key)){
    //     this.kv.set(key,value)
    //     this.makeQueueProper(key)
    //     return 
    // }
    // if(this.kv.size >= this.capacity ){
    //     const toRemove = this.queue.pop()
    //     this.kv.delete(toRemove)
    // }
    // this.kv.set(key,value)
    // this.queue.unshift(key)
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */