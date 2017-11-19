//Start at the top of the screen on refresh
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }


//Modify images
  window.onload = function modify_images () {
    //get images from the HTML
    var images = document.getElementsByClassName('images');
    console.log ("Hooray");
   
    //this applys random width, top, left to each key 'image' inside of the array 'images'
    for (let image of images) {  
      //random top
      let top = Math.random() * 260+1+"vh";
      console.log('The top is ${top}');
      image.style.top = top;

      //random left
      let left = Math.random() * 50+5+"vw";
      console.log(left);
      image.style.left = left;

      //random width
      let width = Math.random() * 500+100+'px';
      console.log(width);
      image.style.width = width;

      let rand_image = images[Math.floor(Math.random() * images.length)];
      
    }
  }