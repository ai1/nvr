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




function openHll(evt, hllName) {
  var i, x, tablinkhll;
  x = document.getElementsByClassName("hll");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinkhll = document.getElementsByClassName("tablinkhll");
  for (i = 0; i < x.length; i++) {
    tablinkhll[i].className = tablinkhll[i].className.replace(" w3-redhll", "");
  }
  document.getElementById(hllName).style.display = "block";
  evt.currentTarget.className += " w3-redhll";
}




function openJkr(evt, jkrName) {
  var i, x, tablinkjkr;
  x = document.getElementsByClassName("jkr");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinkjkr = document.getElementsByClassName("tablinkjkr");
  for (i = 0; i < x.length; i++) {
    tablinkjkr[i].className = tablinkjkr[i].className.replace(" w3-redjkr", "");
  }
  document.getElementById(jkrName).style.display = "block";
  evt.currentTarget.className += " w3-redjkr";
}




function openMsd(evt, msdName) {
  var i, x, tablinkmsd;
  x = document.getElementsByClassName("msd");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinkmsd = document.getElementsByClassName("tablinkmsd");
  for (i = 0; i < x.length; i++) {
    tablinkmsd[i].className = tablinkmsd[i].className.replace(" w3-redmsd", "");
  }
  document.getElementById(msdName).style.display = "block";
  evt.currentTarget.className += " w3-redmsd";
}




function openQsm(evt, qsmName) {
  var i, x, tablinkqsm;
  x = document.getElementsByClassName("qsm");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinkqsm = document.getElementsByClassName("tablinkqsm");
  for (i = 0; i < x.length; i++) {
    tablinkqsm[i].className = tablinkqsm[i].className.replace(" w3-redqsm", "");
  }
  document.getElementById(qsmName).style.display = "block";
  evt.currentTarget.className += " w3-redqsm";
}




function openRfq(evt, rfqName) {
  var i, x, tablinkrfq;
  x = document.getElementsByClassName("rfq");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinkrfq = document.getElementsByClassName("tablinkrfq");
  for (i = 0; i < x.length; i++) {
    tablinkrfq[i].className = tablinkrfq[i].className.replace(" w3-redrfq", "");
  }
  document.getElementById(rfqName).style.display = "block";
  evt.currentTarget.className += " w3-redrfq";
}




function openSfl(evt, sflName) {
  var i, x, tablinksfl;
  x = document.getElementsByClassName("sfl");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinksfl = document.getElementsByClassName("tablinksfl");
  for (i = 0; i < x.length; i++) {
    tablinksfl[i].className = tablinksfl[i].className.replace(" w3-redsfl", "");
  }
  document.getElementById(sflName).style.display = "block";
  evt.currentTarget.className += " w3-redsfl";
}




function openSrf(evt, srfName) {
  var i, x, tablinksrf;
  x = document.getElementsByClassName("srf");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinksrf = document.getElementsByClassName("tablinksrf");
  for (i = 0; i < x.length; i++) {
    tablinksrf[i].className = tablinksrf[i].className.replace(" w3-redsrf", "");
  }
  document.getElementById(srfName).style.display = "block";
  evt.currentTarget.className += " w3-redsrf";
}




function openZul(evt, zulName) {
  var i, x, tablinkzul;
  x = document.getElementsByClassName("zul");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinkzul = document.getElementsByClassName("tablinkzul");
  for (i = 0; i < x.length; i++) {
    tablinkzul[i].className = tablinkzul[i].className.replace(" w3-redzul", "");
  }
  document.getElementById(zulName).style.display = "block";
  evt.currentTarget.className += " w3-redzul";
}
