var slideIndex = 0;
function showSlides() 
{
    var imgs=document.querySelectorAll(".slide");
    if(slideIndex >=7){ slideIndex=0; }
    for(var i=0;i<7;i++)
        {
            imgs[i].style.display="none";
        }
    imgs[slideIndex].style.display="block";
    slideIndex++;
    setTimeout(showSlides, 2000);    
}
showSlides();
