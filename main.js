
var videoPaused = false;
  // Stop video 
document.addEventListener('keydown',function(event){
  
  var video = document.getElementById('myVideo');
  if(!videoPaused && event.key == "p"){
    video.pause();
    videoPaused = true;

  }else if (videoPaused && event.key == 'p'){
    video.play();
    videoPaused = false;
  }
      
});

// Getting current year
var getTagYear = document.getElementById('currentYear');
 currentYear.innerHTML = new Date().getFullYear() + ". Daniel Fros";

// get scrolled pixels -- OPTIONAL

  /* window.onscroll = function(e){
    console.log(window.scrollY);
  }; */


// get device min width -- OPTIONAL
window.onresize = function(){
  console.log("Width in px: " + window.innerWidth);

}


// ------------ Scolling Menu ------------

// About me
document.getElementById('MeBtn').addEventListener('click',function(){
  document.querySelector('#AboutDiv').scrollIntoView({behavior: 'smooth'})
});


// Skills 
document.getElementById('mySkills').addEventListener('click',function(){
  document.querySelector('#skillDiv').scrollIntoView({
    behavior: 'smooth'
  })
}); 


//Contact 
document.getElementById('contact').addEventListener('click',function(){
  document.querySelector('#contactDiv').scrollIntoView({
    behavior: 'smooth'
  })
});

