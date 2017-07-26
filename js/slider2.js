
function Slider2(elementId) {
  var that = this;
  var width=200;
  var element = document.getElementById(elementId);
  var  backButton =document.getElementById('back-button');
  var fastButton=document.getElementById('fast-button');
  var chooseImageSecond=document.getElementById('first-image-2');
  var chooseImage2Second=document.getElementById('second-image-2');
  var chooseImage3Second=document.getElementById('third-image-2');
  var chooseImage4Second=document.getElementById('fourth-image-2');
  var chooseImage5Second=document.getElementById('fifth-image-2');

  this.intervalId;
  this.marginLeft = 0;

  // this chai ramrari padha
  this.init = function () {
    this.slide();
    // this.indicate();
    // this.addEvents();
  }

  this.addEvents = function () {
    // element.addEventListener('pointerenter', that.stop);
    // element.addEventListener('pointerleave', that.slide);
    // backButton.addEventListener('click',that.back);
    // fastButton.addEventListener('click',that.fast);
    // chooseImageSecond.addEventListener('click',abc(1));
    // chooseImage2Second.addEventListener('click',that.imagePosition2);
    // chooseImage3Second.addEventListener('click',that.imagePosition3);
    // chooseImage4Second.addEventListener('click',that.imagePosition4);
    // chooseImage5Second.addEventListener('click',that.imagePosition5);
 }
  // function abc(x){
  //   if (x==1) {

  //     console.log('i am here');
  //     that.marginLeft=0;
  //   }else if (x==2) {
  //     that.marginLeft==-width;
  //   }else if (x==3) {
  //     that.marginLeft==-width*2;
  //   }else if (x==4) {
  //     that.marginLeft==-width*3;
  //   }else if (x==5) {
  //     that.marginLeft==-width*4;
  //   }
  //}
  this.imagePosition2=function(){
    that.marginLeft=-width;
  }
  this.imagePosition3=function(){
    that.marginLeft=-width*2;
  }
  this.imagePosition4=function(){
    that.marginLeft=-width*3;
  }
  this.imagePosition5=function(){
    that.marginLeft=-width*4;
  }
  this.back=function(){
    if (that.marginLeft==0||that.marginLeft>-width) {
      that.marginLeft=-width*4;
    }else if (that.marginLeft==-width||that.marginLeft>-width*2) {
      console.log('i am always here');
      that.marginLeft=0;
    }else  if (that.marginLeft==-width*2||that.marginLeft>-width*3) {
      that.marginLeft=-width;
    }else   if (that.marginLeft==-width*3||that.marginLeft>-width*4) {
      that.marginLeft=-width*2;
    }else  if (that.marginLeft==-width*4||that.marginLeft>-width*5) {
      that.marginLeft=-width*3;
    }

  }
  this.fast=function(){
   if (that.marginLeft==0||that.marginLeft>-width) {
      that.marginLeft=-width;
    }else if (that.marginLeft==-width||that.marginLeft>-width*2) {
      console.log('i am always here');
      that.marginLeft=-width*2;
    }else  if (that.marginLeft==-width*2||that.marginLeft>-width*3) {
      that.marginLeft=-width*3;
    }else   if (that.marginLeft==-width*3||that.marginLeft>-width*4) {
      that.marginLeft=-width*4;
    }else  if (that.marginLeft==-width*4||that.marginLeft>-width*5) {
      that.marginLeft=0;
    }
  }
this.slideAntidirection=function(){
  clearInterval(that.intervalId);
  that.intervalId = setInterval(function () {
          console.log('slideAntidirection');
      element.style.marginLeft = that.marginLeft;
      if(that.marginLeft==0){
      that.slide();
      }else{
          that.marginLeft+=1;
      }
    }, 1000 /120);
ik

}

  this.slide = function () {
    clearInterval(that.intervalId);
  	console.log('here');
    that.intervalId = setInterval(function () {

      console.log('element.style.marginLeft')
      element.style.marginLeft = that.marginLeft;
      if(that.marginLeft==-width*4){
        console.log('slideAntidirection should start');

      that.slideAntidirection();
      
      }else{
          that.marginLeft-=0.5;
      }
    }, 1000 / 60);

   }
   this.indicate=function(){
    that.intervalId=setInterval(function(){
      if (that.marginLeft==0||that.marginLeft>-width) {
      chooseImageSecond.classList.add('active');
      chooseImage5Second.classList.remove('active');
       chooseImage2Second.classList.remove('active');
        chooseImage3Second.classList.remove('active');
         chooseImage4Second.classList.remove('active');
    }else if (that.marginLeft==-width||that.marginLeft>-width*2) {
      chooseImage2Second.style.background='white';
      chooseImageSecond.style.background='green';
       chooseImage3Second.style.background='green';
        chooseImage4Second.style.background='green';
         chooseImage5Second.style.background='green';
    }else  if (that.marginLeft==-width*2||that.marginLeft>-width*3) {
     chooseImage3Second.style.background='white';
     chooseImage2Second.style.background='green';
      chooseImageSecond.style.background='green';
       chooseImage4Second.style.background='green';
        chooseImage5Second.style.background='green';
    }else   if (that.marginLeft==-width*3||that.marginLeft>-width*4) {
     chooseImage4Second.style.background='white';
     chooseImage3Second.style.background='green';
      chooseImage2Second.style.background='green';
       chooseImageSecond.style.background='green';
        chooseImage5Second.style.background='green';
    }else  if (that.marginLeft==-width*4||that.marginLeft>-width*5) {
     chooseImage5Second.style.background='white';
     chooseImage4Second.style.background='green';
      chooseImageSecond.style.background='green';
       chooseImage2Second.style.background='green';
        chooseImage3Second.style.background='green';
    }
    })
   }
  

  this.stop = function () {
  	console.log('yeta aunu parne')
    clearInterval(that.intervalId);
  }
 
}

var slider2 = new Slider2('slider-2');
slider2.slide();



