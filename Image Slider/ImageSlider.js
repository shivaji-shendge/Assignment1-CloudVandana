let arr = ["./Images/car2.webp" , "./Images/Dhoni.jpg",
           "./Images/kat.jpg",    "./Images/lordKrishna.jpg",
           "./Images/virat.jpg"]

let i = 0; 
let nextImage = (e)=>{
    ++i;
    if(i==arr.length){
     i=0;
    }
    document.getElementById("image").src=arr[i];
}

let previousImage = (e)=>{
    --i;
    if(i<0){
        i=arr.length-1;
    }
    document.getElementById("image").src=arr[i];
}
document.getElementById("b2").addEventListener("click",nextImage);
document.getElementById("b1").addEventListener("click",previousImage)

setInterval(nextImage,3000);