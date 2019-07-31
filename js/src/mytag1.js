var tagEle = "querySelectorAll" in document ? document.querySelectorAll(".tag-link") : getClass("tag-link"),
    paper = "querySelectorAll" in document ? document.querySelector(".tagBall") : getClass("tagBall")[0];
var allll=new Array();
for (var i = 0; i < tagEle.length; i++) {
  console.log(tagEle[i]);
  
  allll[i]={label:tagEle[i].innerText, url:tagEle[i].href};
}
console.log(allll);
var settings = {
    entries: allll,
    width: 640,
    height: 500,
    radius: '65%',
    radiusMin: 75,
    bgDraw: true,
    bgColor: '#ffffff',
    opacityOver: 1.00,
    opacityOut: 0.05,
    opacitySpeed: 6,
    fov: 800,
    speed: 1.5,
    fontFamily: 'Oswald, Arial, sans-serif',
    fontSize: '20',
    fontColor: '#000',
    fontWeight: 'normal',//bold
    fontStyle: 'normal',//italic 
    fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    fontToUpperCase: true

};

//var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
$( '#tag-cloud' ).svg3DTagCloud( settings );

