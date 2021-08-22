window.addEventListener('online', updateStatus);
window.addEventListener('offline', updateStatus);

function updateStatus(event) {

    if(navigator.onLine) {
        document.getElementById("signal").style.color = 'black';
        document.getElementById("text").innerHTML = "Online";
    } else {
        document.getElementById("signal").style.color = '#D24949';
        document.getElementById("text").innerHTML = "Offline";
    }
    
}



