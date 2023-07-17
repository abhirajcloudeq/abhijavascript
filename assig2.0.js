var count=1;
function counter(){
    count++;
    document.getElementById("c").innerHTML=count;
}
setInterval(counter,2000);
function set(){
    alert("Welcome");
}
setInterval(set,5000);
