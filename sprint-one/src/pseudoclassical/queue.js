var Queue = function() {
  this._storage = {};
  this._size = 0;
};

Queue.prototype.enqueue = function(value) {
  this._storage[this._size] = value;
  this._size++;
};

Queue.prototype.dequeue = function() {
  if(this._size > 0) {
    this._size--;
    var temp = this._storage[0];
    delete this._storage[0];
    for(var index in this._storage) {
      this._storage[index - 1] = this._storage[index];
    }
    return temp;
  }
};

Queue.prototype.size = function() {
  return this._size;
};


