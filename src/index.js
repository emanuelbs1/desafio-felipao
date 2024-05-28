// Variavel nome e nivel
let NomeHeroi = "Goku";
let xp = 25000;

// ranking do heroi
if (xp < 1000) {
    console.log("O nome do heroi é: " + NomeHeroi + " e o nivel do dele é: Ferro");
} else if (xp >= 1001 && xp <= 2000) {
    console.log("O nome do heroi é: " + NomeHeroi + " e o nivel do dele é: Bronze");
} else if (xp >= 2001 && xp <= 5000) {
    console.log("O nome do heroi é: " + NomeHeroi + " e o nivel do dele é: Prata");
} else if (xp >= 5001 && xp <= 7000) {
    console.log("O nome do heroi é: " + NomeHeroi + " e o nivel do dele é: Ouro");
} else if (xp >= 7001 && xp <= 8000) {
    console.log("O nome do heroi é: " + NomeHeroi + " e o nivel do dele é: Platina");
} else if (xp >= 8001 && xp <= 9000) {
    console.log("O nome do heroi é: " + NomeHeroi+ " e o nivel do dele é: Ascendente");
} else if (xp >= 9001 && xp <= 10000) {
    console.log("O nome do heroi é: " + NomeHeroi + " e o nivel do dele é: Imortal");
} else if (xp >= 10001) {
    console.log("O nome do heroi é: " + NomeHeroi + " e o nivel do dele é: Radiante");
}
