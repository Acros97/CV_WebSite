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
