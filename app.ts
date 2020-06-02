let message: string = "and I am iron man.";
console.log(message);

let nbmark: number = 32;
console.log("the strongest is mark " + nbmark);
nbmark+=7;
console.log("but the best one is mark " + nbmark);
bestArmour("Fabio");

// function

function bestArmour(name:string):void{ // void significa que a função não terá retorno
    console.log("mark 42 is the beatifuly, " + name);
}

let menorRun = shortestRun(9);
function shortestRun(parsecs:number):boolean{
    return parsecs < 12;
}
console.log(menorRun);

function inc (speed: number, inc: number = 1) : number {
    return speed + inc;
}
console.log("inc(5,2) = ",inc(5,2))
console.log("inc(5,1) = ",inc(5,1)) 
console.log("inc(5) = ",inc(5))     // resulta 6 pois inc tem um valor default

let jediList: string[] = ["Luke","Obi-wan","Windu","Cristiano Ronaldo"];
showJedi(jediList);
function showJedi(jedis: string[]):void{
    let x: number = 1;                          // este exemplo usa vetor como parâmetro
    jedis.forEach(jedi => {
        console.log(x,jedi);
        x++;
    });
}

showMark("mark 1","mark 32","mark 49","friday");
function showMark(...marks: string[]):void{
    let x: number = 1;                          // já este os parâmetros podem ser postos como strings separadas
    marks.forEach(mark => {                     // que serão reconhecidos como um vetor igualmento
        console.log(x,mark);
        x++;
    });
}

// operador ternário

let isEnough = function (parsecs: number) : boolean {
    return parsecs > 12;
}
let distance = 11   // variaveis com ${} são chamadas de Template Strings
console.log(`Is ${distance} parsecs enough to beat MIllenium Falcon? ${isEnough(distance) ? 'yes' : 'no'}`)

// getElementById

function getAge(){
    let idadeCLiente = parseInt(
        (<HTMLInputElement>document.getElementById("client")).value);
    alert(idadeCLiente);
}

// arrow function

let call = (msg: string) => console.log("Jarvis?",msg)
call('yes sir.');

