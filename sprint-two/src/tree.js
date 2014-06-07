var makeTree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  if(this.value === target){
    return true;
  }
  for (var i = 0; i < this.children.length; i++){
    if( this.children[i].contains(target))
      return true;
    }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
