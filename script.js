var segments = ["1", "2", "3","4", "5", "6","7", "8","9", "10"]
var wheel = document.getElementById("wheel")
var rotate = 1;
var speed=3
function drawWheel(){
    for (var i=0; i<segments.length; i++)
    {
        var segment = document.createElement("div")
        segment.innerHTML = segments[i]
    
        segment.classList.add("segment");
        segment.style.transform = "rotate("+(360/segments.length*i*rotate)+"deg)";
        wheel.appendChild(segment)
        
    }

}
drawWheel()


function spin(){
    setInterval(function () { spinWheel() }, 1);
    
    
    function spinWheel()
    {
        wheel.style.transform = "rotate("+rotate+"deg)";  
        rotate = rotate+speed;
        speed = speed-0.002

        console.log(speed)
        if (speed<0){
            speed = 0
        }
    
    }
    
}
