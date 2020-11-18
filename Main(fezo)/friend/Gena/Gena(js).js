var slideIndex = 0;
function showSlides() 
{
    var imgs=document.querySelectorAll(".slide");
    if(slideIndex >=1){ slideIndex=0; }
    for(var i=0;i<1;i++)
        {
            imgs[i].style.display="none";
        }
    imgs[slideIndex].style.display="block";
    slideIndex++;
    setTimeout(showSlides, 2000);    
}
showSlides();
