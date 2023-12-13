// Variáveis para Nome e XP

let NomeDoPersonagem = "JU-LOKAO"
let XpDoPersonagem = 7096
 
// Estruturas de decisão para o nível baseado no XP do Personagem

if (XpDoPersonagem <= 1000) {
console.log("O herói de nome " + NomeDoPersonagem + "está no nível de Ferro")
} 
else if (XpDoPersonagem >= 1001 && XpDoPersonagem <=2000) {
    console.log("O herói de nome " + NomeDoPersonagem + "está no nível de Bronze")
    } else if (XpDoPersonagem >= 2001 && XpDoPersonagem <=5000) {
        console.log("O herói de nome " + NomeDoPersonagem + "está no nível de Prata")
        } else if (XpDoPersonagem >= 5001 && XpDoPersonagem <=7000) {
            console.log("O herói de nome " + NomeDoPersonagem + "está no nível de Ouro")
            } else if (XpDoPersonagem >= 7001 && XpDoPersonagem <=8000) {
                console.log("O herói de nome " + NomeDoPersonagem + " está no nível de Platina")
                } else if (XpDoPersonagem >= 8001 && XpDoPersonagem <=9000) {
                    console.log("O herói de nome " + NomeDoPersonagem + "está no nível de Ascendente")
                    } else if (XpDoPersonagem >= 9001 && XpDoPersonagem <=10000) {
                        console.log("O herói de nome " + NomeDoPersonagem + "está no nível de Imortal")
                        } else {
                            console.log("O herói de nome" + NomeDoPersonagem +  " está no nível de Radiante")
                            } 
   
