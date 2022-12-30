let wordSeparatedComma = prompt("Saisissez des mots séparé par des virgule :");
let comma = wordSeparatedComma.split(",");
let maxLenght = -1;
let asterix = "";
let asterix1 = "*"
let space = " ";

for (let i of comma) {
    if (i.length > maxLenght) {
        maxLenght = i.length;
    }
}

maxLenght += 4;

for (let i = 1; i <= maxLenght; i++) {
    asterix += '*';
}
console.log(asterix);
for (let word of comma) {
    if (word.length < (maxLenght - 4)) {

        for (let j = 0; j < (maxLenght - 4 - Number(word.length)); j++) {
            space += ' ';
        }
        console.log(asterix1, space, word, space, asterix1);
        space = ' ';
    } else {
        console.log(asterix1, space, word, space, asterix1);
    }

}
console.log(asterix);