
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

// get scrolled pixels -- Enabled OPTIONAL

  /* window.onscroll = function(e){
    console.log(window.scrollY);
  }; */


// get device min width
window.onresize = function(){
  console.log("Width in px: " + window.innerWidth);

}


// ------------ Scolling Menu ------------

function SkillMenuResponsive(){
  if(window.innerWidth >= 1115)
    window.scrollTo({top: 1000, behavior: 'smooth'});
  if(window.innerWidth >= 975)
    window.scrollTo({top: 200, behavior: 'smooth'});
    
  if(window.innerWidth >= 892)
    window.scrollTo({top: 1200, behavior: 'smooth'});
  if(window.innerWidth >= 682)
    window.scrollTo({top: 1350, behavior: 'smooth'});  

}

function ContactMenuResponsive(){
  if(window.innerWidth >= 1115)
    window.scrollTo({top: 1500,behavior: 'smooth'});
  if(window.innerWidth >= 892)
    window.scrollTo({top: 1600, behavior: 'smooth'});  
  if(window.innerWidth >= 682)
    window.scrollTo({top: 1850, behavior: 'smooth'}); 

}

// About me
document.getElementById('MeBtn').addEventListener('click',function(){
  window.scrollTo({top: 560, behavior: 'smooth' })
});
// Skills 
document.getElementById('mySkills').addEventListener('click',SkillMenuResponsive);

//Contact 
document.getElementById('contact').addEventListener('click',ContactMenuResponsive);