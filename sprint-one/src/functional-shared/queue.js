var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance._storage = {};
  someInstance._size = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};


var queueMethods = {};

queueMethods.enqueue = function(value) {
  this._storage[this._size] = value;
  this._size++;
};

queueMethods.dequeue = function() {
  if(this._size > 0) {
    this._size--;
    var result = this._storage[0];
    delete this._storage[0];
    for (var index in this._storage) {
      this._storage[index - 1] = this._storage[index];
    }
    console.log(this._storage);
    return result;
  }
};

queueMethods.size = function() {
  return this._size;
};


