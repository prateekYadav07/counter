// set initial count
var count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const btnClass = e.currentTarget.classList;
        if(btnClass.contains('decrease')){
            count--;
        }
        if(btnClass.contains('reset')){
            count = 0;
        }
        if(btnClass.contains('increase')){
            count++;
        }
        
        if(count>0){
            value.style.color = 'green';
        }
        if(count<0){
            value.style.color = 'red';
        }
        if(count==0){
            value.style.color = 'black';
        }

        value.textContent = count;
    })
});