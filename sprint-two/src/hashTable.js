var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(!this._storage[i]) {
    this._storage[i] = [];
    this._storage[i].push(tupleMaker(k, v));
  }else{
    if (this._storage[i][0] === k){
      this._storage[i][1] = v;
    }else{
      this._storage[i].push(tupleMaker(k, v));
    }
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //if its empty
  if (!this._storage[i]){
    return this._storage[i];
  }else{
    for (var index =0; index < this._storage[i].length; index++){
      if (this._storage[i][index][0] === k){
        return this._storage[i][index][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k){
 var i = getIndexBelowMaxForKey(k, this._limit);
 this._storage[i] = null;
};

var tupleMaker = function(k, v) {
  var tuple = [];
  tuple.push(k);
  tuple.push(v);
  return tuple;
}

//tuple is an array with two elements where the first
//[cat, happy] [cat, unhappy]
/*
 * Complexity: What is the time complexity of the above functions?
 */
