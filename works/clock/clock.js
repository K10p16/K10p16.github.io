function clock(){
    var now = new Date();

    var year = now.getFullYear();
    var month = now.getMonth();
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    document.getElementById("date").textContent =  year + "/" + month + "/" + day;
    document.getElementById("time").textContent = hour + ":" + minute + ":" + second;
}
setInterval(clock, 1000);