var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.storage={};
  stack.length= 0;

  _.extend(stack, stackMethods);
  return stack;
};

var stackMethods = {};


stackMethods.push = function(value) {
  this.storage[this.length] = value;
  this.length++;

}
stackMethods.pop = function() {
  if (this.length > 0){
    this.length--;
    var temp;
    temp = this.storage[this.length];
    delete this.storage[this.length];
    return temp;
  }


}
stackMethods.size = function() {
  return this.length;
}



//create'. objects that holds the methods for all instances

//use this

//extend functinon.
//

