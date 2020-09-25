let Position = window.pageYOffset;
window.onscroll = function(){
  if (window.pageYOffset<Position){
    document.getElementById('topnav').style.display = "block"
  }else{
    document.getElementById('topnav').style.display = "none"

  }

  Position = window.pageYOffset;
}
