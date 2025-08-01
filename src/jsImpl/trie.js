class TrieNode {
    constructor() {
      this.children = {}; // key: char, value: TrieNode
      this.isEndOfWord = false;
    }
}

var Trie = function() {
    this.root = new TrieNode()
    this._search = function(word){
        var node  = this.root
        for(let c of word){
            if(!node.children[c]){
                return null
            }
            node = node.children[c]
        }
    }
    return node
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    var node  = this.root
    for(let c  of word){
        if(!(node.children[c] == null)){
            node.children[c] = new TrieNode()
        }
        node = node.children[c]
    }
    node.isEndOfWord = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    var node = this._search(word)
    return  node !== null && node.isEndOfWord == true
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return this._search(prefix) !== null
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */ 

