function Negative() {
    var Array = [1, 2, -3, 4];
    for (var i = 0; i < Array.length; i++) {
      if (Array[i] < 0) {
        Array[i] = Math.abs(Array[i]);
      }
    }
    return Array;
  }
  
  console.log(Negative());