let slider = document.querySelector(".container");
let n=0;
let k=0;
let z=0;
imageW=document.querySelectorAll(".img1")[0].getBoundingClientRect().width;


slider.onmousedown = function (event) {
  let shiftX = event.clientX - slider.getBoundingClientRect().left + 55;
  let x=event.clientX;

  function show(pageX) {
    
   
    if (Number(slider.style.left.substr(0,(slider.style.left.length-2)))<=-imageW*2&&n==0)  {
      
    img = document.createElement("IMG");
      img.src = "img/slider_1.jpg";
      img.classList.add("img1");
      slider.appendChild(img); 
      n=1;
    }
    if (Number(slider.style.left.substr(0,(slider.style.left.length-2)))>=-imageW*2&&n==1){
      let imgS=document.querySelectorAll(".img1");
     imgS[imgS.length-1].remove(); 
      n=0;
    }

    if (Number(slider.style.left.substr(0,(slider.style.left.length-2)))>=0&&k==0)  {
      let imgS=document.querySelectorAll(".img1");
      img = document.createElement("IMG");
      img.src = "img/slider_3.jpg";
      img.classList.add("img1");
      slider.insertBefore(img,imgS[0]); 
      k=1;
      shiftX+=imageW;
      
    }
    if (Number(slider.style.left.substr(0,(slider.style.left.length-2)))<=-imageW&&k==1){
      let imgS=document.querySelectorAll(".img1");
     imgS[0].remove(); 
     shiftX+=-imageW;
      k=0;
    }
    z=pageX-x;
  if (z<=(imageW/2)&&z>0||z<0&&z>=-(imageW/2))
      slider.style.left = pageX - shiftX + 'px';
      else {
        if (z>=(imageW/2)||z<=-(imageW/2)){
        let even = new MouseEvent("mouseup",{bubbles: true});
        document.dispatchEvent(even);}
      }
  }
  

  function MouseMove(event) {
    show(event.pageX);
  }


  slider.addEventListener('mousemove', MouseMove);

  document.onmouseup = function () {

    slider.removeEventListener('mousemove', MouseMove);
    if (Math.abs(z)<(imageW/2)){
    slider.style.left=x - shiftX + 'px';
  if (slider.style.left==-imageW+"px"&&k==1){
  let imgS=document.querySelectorAll(".img1");
     imgS[0].remove(); 
     shiftX+=-imageW;
     slider.style.left="0px";
      k=0;}
      if (slider.style.left==-imageW*2+"px" &&n==1){
        let imgS=document.querySelectorAll(".img1");
           imgS[imgS.length-1].remove(); 
           shiftX+=-imageW;
           
            n=0;}
  }
    if (z>(imageW/2))
    slider.style.left=x - shiftX+imageW + 'px';
    if (z<-(imageW/2))
    slider.style.left=x - shiftX-imageW + 'px';
    if (slider.style.left=="0px"&&k==1){
      let imgS=document.querySelectorAll(".img1");
     imgS[0].remove(); 
     shiftX+=-imageW;
      k=0;
    slider.style.left=-imageW*2+"px";
    k=0;
  }
  if (slider.style.left==-imageW*3+"px"&&n==1){
    let imgS=document.querySelectorAll(".img1");
   imgS[imgS.length-1].remove(); 
   shiftX+=-imageW;
    n=0;
  slider.style.left="0px";
  k=0;
}
    
    document.onmouseup = null;
  };
};

document.ondragstart = function () {
  return false;
};


