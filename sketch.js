let websiteTitle="Martha's Masks";
let OrderButton;
let GalleryButton;
let ParagraphText;
let TexasTechIMG;
let OklahomaIMG;
function preload(){
    //OklahomaIMG=loadImage('kittens/Oklahoma.jpg');
    //TexasTechIMG=loadImage('kittens/TexasTech.jpg');
}

function setup() {
    createCanvas(1280,960);
    background(255, 200, 200);
    textSize(64);
    textFont('Georgia');
    fill(100,0,0);
    text(websiteTitle,540,0,100,150);
    textSize(21);
    text('Round Rock, TX',560,150,175,25);
    OrderButton=createButton('Order Masks');
    OrderButton.position(580,200);
    OrderButton.mousePressed(OrderMasks);

   // GalleryButton=createButton('View Gallery');
   // GalleryButton.position(300,150);
//    GalleryButton.mousePressed(ViewGallery);


    //image(TexasTechIMG,0,420,400,540);
    //image(OklahomaIMG,880,420,400,540);

}

function OrderMasks(){
   window.open("https://forms.gle/286i6PAbFP88EYqe7");
}

function draw() {


}