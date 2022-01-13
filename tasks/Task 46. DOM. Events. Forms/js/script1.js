form.onmouseover = function(event) {
    let target = event.target;
    target.style.background = 'blue';
  };
  
  form.onmouseout = function(event) {
    let target = event.target;
    target.style.background = '';
  };