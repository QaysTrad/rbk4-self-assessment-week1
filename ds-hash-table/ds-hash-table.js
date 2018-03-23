var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

    return {
      _storage: [],
      retrieve: function(key) {
        return this._storage[hashFn(key, max)] ;
      },

      insert: function(key, value) {
        //your code is here
        var bucket  = this._storage[hashFn(key , max)]
        var tuple = [key , value]

        if(!bucket){
          bucket = []
          this._storage[hashFn(key, max)] = bucket
        }

        if(this._storage.indexOf(this._storage[hashFn(key , max)]) === hashFn(key , max)){
          bucket.push(tuple)
        }
         
    }
  }
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};