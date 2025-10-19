function bukaArtikel(url) {
 document.getElementById("judul-artikel").style.display = "none";
 document.getElementById("article-list").style.display = "none";
 const frameBox = document.getElementById("iframe-container");
 frameBox.style.display = "flex";
 frameBox.style.flexDirection = "column";
 document.getElementById("artikel-frame").src = url;
 }

function kembali() {
 document.getElementById("iframe-container").style.display = "none";
 document.getElementById("artikel-frame").src = "";
 document.getElementById("judul-artikel").style.display = "block";
 document.getElementById("article-list").style.display = "block";
 }