let ville = "Bordeaux";
recevoirTemperature(ville);

let btn = document.querySelector("#changer");
btn.addEventListener("click", changer);

function changer() {
    ville = prompt("Quelle ville choisissez-vous ?")
    recevoirTemperature(ville);
}

function recevoirTemperature(ville) {
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + 
    ville + "&appid=a43109d286048546be8ff0f28e414f81&units=metric"; 
    let requete = new XMLHttpRequest();

    requete.open("GET", url);
    requete.responseType = "json";
    requete.send();

    requete.onload = function() {
        if(requete.readyState === XMLHttpRequest.DONE) {
            if(requete.status === 200) {
                let rep = requete.response;
                document.querySelector("#temperature_label").textContent = rep.main.temp;
                document.querySelector("#ville").textContent = ville;
            } else {
                alert("Le site est momentanément indisponible !")
            }
        }
    }
}

  



