var makeTree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = undefined;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  if (this.children === undefined){
    this.children = [];
  }
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  var found = false;

  if(this.value === target){
    found = true;
  }
  if(this.children !== undefined){
    for (var i = 0; i < this.children.length; i++){
      found = this.children[i].contains(target);
      if (found) {
        return found;
      }
    }
  }
  return found;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
