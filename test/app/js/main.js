const hamburger=document.querySelector('.hamburger'),   
        menu=document.querySelector(' .dashboard'),

      main=document.querySelector('.main-page');
      
hamburger.addEventListener('click', function () {
    menu.classList.toggle('dashboard--active');
    hamburger.classList.toggle('hamburger--active');
    main.classList.toggle('opacity');
    
});  