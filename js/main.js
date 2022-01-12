let button = document.querySelector('button');
let row = document.querySelector('.row');

button.onclick = function(){
    if(this.innerText =='light mood'){
        row.classList.toggle('dark')
        this.classList ='btn btn-dark'
        this.innerText = 'Dark Mood'
    }else
    {row.classList.toggle('dark')
    this.classList ='btn btn-light'
        this.innerText = 'Light Mood';
    }
}


