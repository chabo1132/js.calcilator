'use strict';

  function update(sum) {
    document.querySelector('input').value = sum;
  }
  function append(sum) {
    document.querySelector('input').value += sum;
  }
  function calc() 
  {
    const v = document.querySelector('input').value;
    try {
    const f = new Function('return ' + v )
    update( f().toString() );
    }catch(error) {
    update(error);
    }
  }