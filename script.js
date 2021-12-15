var b=document.querySelector('button');
function contro() {
  var a = document.getElementById('img');
  if (a.src.match("img/bulboff.gif")) {
      a.src = "img/bulbon.gif";
  } else {
      a.src = "img/bulboff.gif";
  }
}
