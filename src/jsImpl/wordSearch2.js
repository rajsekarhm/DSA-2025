/**
 * @param {character[][]} booard
 * @param {string[]} woords
 * @return {string[]}
 */

class TrieNode {
  children;
  isLeaf;
  constructor() {
    this.children = {};
    this.isLeaf = false;
    this.word = null;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word) {
    var node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!node.children[word[i]]) {
        node.children[word[i]] = new TrieNode();
      }
      node = node.children[word[i]];
    }
    node.isLeaf = true;
    node.word = word;
  }
}
var findWords = function (booard, woords) {
  const rooot = new Trie();
  for (let i = 0; i < woords.length; i++) {
    rooot.insert(woords[i]);
  }
  const row = booard.length;
  const col = booard[0].length;
  const result = new Set();
  const board_status = Array.from({ length: row }, () =>
    new Array(booard[0].length).fill(false)
  );

  function dfs(i, j, node, path) {
    if (
      i < 0 ||
      j < 0 ||
      i >= row ||
      j >= col ||
      board_status[i][j] ||
      !node.children[booard[i][j]]
    ) {
      return;
    }

    const char = booard[i][j];
    board_status[i][j] = true;
    node = node.children[char];
    path += char;

    if (node.isLeaf) {
      result.add(path);
    }

    dfs(i + 1, j, node, path);
    dfs(i - 1, j, node, path);
    dfs(i, j + 1, node, path);
    dfs(i, j - 1, node, path);

    board_status[i][j] = false;
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      dfs(i, j, rooot.root, "");
    }
  }
  return Array.from(result);
};

const c = findWords(
  [
    ["o", "a", "a", "n"],
    ["e", "t", "a", "e"],
    ["i", "h", "k", "r"],
    ["i", "f", "l", "v"],
  ],
  ["oath", "o", "eat", "rain"]
);

console.log(c);
