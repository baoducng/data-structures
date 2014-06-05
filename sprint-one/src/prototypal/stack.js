var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstances = Object.create(stackMethods);
  someInstances._storage = {};
  someInstances._size = 0;
  return someInstances;

};

var stackMethods = {};

stackMethods.push = function(value){
  this._storage[this._size] = value;
  this._size++;
  //this._storage[]
};

stackMethods.pop = function(){
  if (this._size > 0){
    this._size--;
    var temp;
    temp = this._storage[this._size];
    delete this._storage[this._size];
  }
  return temp;
}

stackMethods.size = function(){
  return this._size;
}




