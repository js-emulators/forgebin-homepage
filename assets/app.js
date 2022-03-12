var enabled = 0;
function info(){
  if (enabled == 0) {
    enabled = 1
  $(".main_screen").fadeOut()
$(".info").fadeIn()
    $(".bottom_btn").fadeIn()
  } else {
    enabled = 0
    $(".info").fadeOut()
        $(".bottom_btn").fadeOut()
      $(".main_screen").fadeIn()
  }
};
document.querySelectorAll(".enabled").forEach(function(e){
  e.onclick = info;
});
