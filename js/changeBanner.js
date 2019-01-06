function reziseMyHeaderFont() {
    var bannerObject = document.getElementById("centerTitleBar");
    var referenceObject = document.getElementsByClassName("article-header")[0];
    var widthOfPage = referenceObject.scrollWidth;
    if(widthOfPage < 500) {
      bannerObject.style.fontSize = "4vw";
    } else {
      bannerObject.style.fontSize = "2.7vw";
    }
}
 window.onresize = function(event) {
     reziseMyHeaderFont();
};