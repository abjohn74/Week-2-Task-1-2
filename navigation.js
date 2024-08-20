const hamBurgerIcon=document.getElementById('hamburgerMenu');

const closeButtonIcon=document.getElementById('closeButtonIcon');

hamBurgerIcon.addEventListener('click',()=>{
    console.log("Clicked");
    
    document.getElementsByClassName('side-bar')[0].classList.add('show-dropDownMenu')
})

closeButtonIcon.addEventListener('click',()=>{
    console.log("Clicked");
    
    document.getElementsByClassName('side-bar')[0].classList.remove('show-dropDownMenu')
})