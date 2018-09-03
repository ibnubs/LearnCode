        // initiation
        var number = 0;
        var plusButtonDOM = document.getElementById('plus-button');
        var minusButtonDOM = document.getElementById('minus-button');
        //process
        plusButtonDOM.addEventListener('click',function(){
        number += 1;
        counterPlusMinus.innerHTML = number;
        })
        minusButtonDOM.addEventListener('click',function(){
        number -= 1;
        counterPlusMinus.innerHTML = number;
        })
        //output
        greatingDOM.innerHTML = salam + nama;
