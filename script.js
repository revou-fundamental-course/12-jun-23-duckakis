
 

    function konversi(){

    
        // menginput bilCel menggunakan let dan memberi instruksi pada java untuk memanggil Id suhuCel agar bisa tersambung ke kolom Input Suhu (°C). 
        let bilCel = document.getElementById("suhuCel").value;

        // menginput result dengan membuat perhitungan konversi bilangan °C ke °F
        let result = parseInt(bilCel) / 5 * 9 + 32;

        // memanggil Id display untuk menampilkan result dari hasil perhitungan ke kolom Hasil Konversi ke Suhu (°F)
        document.getElementById("display").value = result + " °F";

        // memanggil ID display2 untuk menampilkan cara hasil konversi dengan rumus °C ke °F
        document.getElementById("display2").value = document.getElementById("display2").innerHTML = bilCel + " / 5 * 9 + 32 " ;
        
    }
    //sama seperti diatas
    function konversi2(){
        let bilFar = document.getElementById("suhuFar").value;

        let hasil = (parseInt(bilFar) -32) / 9 * 5;

        document.getElementById("display3").value = hasil + " °C";

        document.getElementById("display4").value = document.getElementById("display4").innerHTML = "(" + bilFar + " - 32) / 9 * 5 " ;
    }
   
    
