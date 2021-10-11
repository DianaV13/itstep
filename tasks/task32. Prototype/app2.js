let num = 5;
Number.prototype.chekNum = function(){
    if (this > 0)
        return 1;
    if (this < 0)
        return -1;
      return 0;
};
console.log(num.chekNum());