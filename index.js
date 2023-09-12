var screen=document.querySelector('#display');
var btn=document.querySelectorAll('.button');

for(item of btn)
{
    item.addEventListener('click', (e)=>{
        btntext=e.target.innerText;
        if (btntext=='X')
        {
            btntext='*' ;
        }
        screen.value+=btntext;
});
}
