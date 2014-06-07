var makeBinarySearchTree = function(value){
  var bst = Object.create(binaryMethods);
  bst.value = value;
  bst.left = null;
  bst.right = null;
  return bst;
};

var binaryMethods = {};

binaryMethods.insert = function(value) {

  if(value < this.value) {
    if (this.left === null) {
      this.left = makeBinarySearchTree(value);
    }else{
      return this.left.insert(value);
    }
  }else{
    if (this.right === null) {
      this.right = makeBinarySearchTree(value);
    }
    else {
      return this.right.insert(value);
    }
  }
};

binaryMethods.contains = function(target) {
  if(this.value === target) {
    return true;
  } else if (target < this.value) {
    if (this.left){
      return this.left.contains(target);
    }
    return false;
  } else {
    if (this.right){
      return this.right.contains(target);
    }
    return false;
  }
};

binaryMethods.depthFirstLog = function(func) {
  func(this.value);
  if (this.left){
    this.left.depthFirstLog(func);
  }
  if (this.right){
    this.right.depthFirstLog(func);
  }


  //traverse through the tree
 //we gotta find a way to call func(this.value)
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
