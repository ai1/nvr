function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}











function openInfo(evt, infoName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("info");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(infoName).style.display = "block";
  evt.currentTarget.className += " w3-red";
}




function openEts(evt, etsName) {
  var i, x, tablinkets;
  x = document.getElementsByClassName("ets");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinkets = document.getElementsByClassName("tablinkets");
  for (i = 0; i < x.length; i++) {
    tablinkets[i].className = tablinkets[i].className.replace(" w3-redets", "");
  }
  document.getElementById(etsName).style.display = "block";
  evt.currentTarget.className += " w3-redets";
}




function openEls(evt, elsName) {
  var i, x, tablinkels;
  x = document.getElementsByClassName("els");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinkels = document.getElementsByClassName("tablinkels");
  for (i = 0; i < x.length; i++) {
    tablinkels[i].className = tablinkels[i].className.replace(" w3-redels", "");
  }
  document.getElementById(elsName).style.display = "block";
  evt.currentTarget.className += " w3-redels";
}
