var Stack = function() {
    this._storage =[]


    this.add = function(value){
      // write me
      this._storage.push(value)
     
      console.log(this._storage)
    };
    this.remove = function() {
      // write me
      var pervVal = this._storage[this._storage.length-1]

      this._storage.pop()
      return pervVal
    };
  };