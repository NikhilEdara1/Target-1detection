A="";
objects=[];
status1="";

function preload()
{
A=loadImage("room.png");

}

function setup()
{
    canvas=createCanvas(380,380);
    canvas.center();
    x=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="Status: detecting objects";
}
function modelloaded()
{
console.log("modelloaded");
status1=true;
x.detect(A,cocoa);
}
function cocoa(erorr,result)
{
    if(erorr)
    {console.log(erorr)}
    console.log(result);
    objects=result;
}

function draw()
{
    image(A,0,0,380,380);
    if(status1 != "")
    {
        for(var i=0; i<objects.length;i++)
        {
            document.getElementById("status").innerHTML="Staus: Target has been indetified";
            fill("red");
            c=floor(objects[i].confidence*100)
    text(objects[i].label+ " "+c+"%",objects[i].x+10,objects[i].y+15);
    noFill();
     stroke("red");
     rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
    
     
}