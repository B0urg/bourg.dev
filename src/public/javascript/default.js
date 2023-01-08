const modal = document.getElementById("settings-modal");
const button = document.getElementById("setting-button");
const span = document.getElementsByClassName("close")[0];
const darkmodeSwitch = document.getElementById("dark-mode-switch");

window.onload = () => {
   if(window.localStorage.getItem('dark-mode') === "false"){
       darkmodeSwitch.checked = false;
       document.body.classList.add('light-mode');
   }
}

darkmodeSwitch.onclick = () => {
   if(!darkmodeSwitch.checked){
       window.localStorage.setItem('dark-mode', "false");
       document.body.classList.add('light-mode');
   }else {
       window.localStorage.setItem('dark-mode', "true");
       document.body.classList.remove('light-mode');
   }
}

button.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}