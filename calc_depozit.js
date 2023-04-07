/************************calculator depozit********************************************* */

function calculeazaDepozit() {
    var suma = document.getElementById("suma").value;
    var perioada = document.getElementById("perioada").value;

    if (suma < 0 || perioada < 0) {
        alert("Introduceți o valoare validă!");
    } else {
        var dobanda = 1;
        var total = suma + (suma * dobanda / 100 * perioada / 12);
        var rataLunara = total / perioada;

        var afisare = "Suma depozitată: " + suma + " lei<br>";
        afisare += "Dobânda: " + dobanda + "% pe an<br>";
        afisare += "Perioada de depozitare: " + perioada + " luni<br>";
        afisare += "Rata lunară: " + rataLunara.toFixed(2) + " lei<br>";
        afisare += "Total întors: " + total.toFixed(2) + " lei";

        document.getElementById("afisare").innerHTML = afisare;
      
    }  
    
}