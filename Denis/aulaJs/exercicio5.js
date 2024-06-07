var Xmas95 = new Date("June 07, 2024 14:51:00");
var weekday = Xmas95.getDay();

function diaSemana(){
    switch(weekday){
        case 0:
            alert("Domingo")
        break        
        case 1:
            alert("Segunda")
        break
        case 2:
            alert("Terça")
        break
        case 3:
            alert("Quarta")
        break
        case 4:
            alert("Quinta")
        break
        case 5:
            alert("Sexta")
        break
    }
}

console.log(diaSemana());