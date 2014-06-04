var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value;
    size ++;
  };

  someInstance.dequeue = function(){
    if (size !==0){
      size--;
      var temp = storage[0];
      delete storage[0];
      for (var index in storage ){
        storage[index - 1] = storage[index];
      }
      return temp;

    }


  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
