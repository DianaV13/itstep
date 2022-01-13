
const fizzbuzz = num => {
    let str; 
    for(let i=1; i<=num; i++) {
      str = "";
      if(i%3===0) {
        str = "fizz";
      }
      if(i%5===0) {
        str += "buzz";
      }
      console.log(str || i);
    }
  }
  
  fizzbuzz(100);