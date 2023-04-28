const image = document.getElementById("finput");
const imgcanvas = document.getElementById("canvas");


image.addEventListener("load", function() {
  upload();
});

function upload() {                         
  var imagee = new SimpleImage(image);
  imagee.drawTo(imgcanvas);
} 
  
/* function makeGray() {
  var imagee = new SimpleImage(image);
  for (var pixel of imagee.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  imagee.drawTo(imgcanvas);
} */

function makeGray() {
  var imagee = new SimpleImage(imgcanvas);
  for (var pixel of imagee.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  imagee.drawTo(imgcanvas);
}