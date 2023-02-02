
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

// get scrolled pixels
  window.onscroll = function(e){
    console.log(window.scrollY);
  };




// ------------ Scolling Menu ------------
// About me
document.getElementById('MeBtn').addEventListener('click',function(){
  window.scrollTo({top: 500, behavior: 'smooth' })

});
// Skills 
document.getElementById('mySkills').addEventListener('click', function(){
  window.scrollTo({top: 1400, behavior: 'smooth'})
});
//Contact 
document.getElementById('contact').addEventListener('click',function(){
  window.scrollTo({
    top: 1850,
    behavior: 'smooth'
  })
});