let message: string = "and I am iron man.";
console.log(message);

let nbmark: number = 32;
console.log("the strongest is mark " + nbmark);
nbmark+=7;
console.log("but the best one is mark " + nbmark);
bestArmour("Fabio");

function bestArmour(name:string):void{ // void significa que a função não terá retorno
    console.log("mark 42 is the beatifuly, " + name);
}

let menorRun = shortestRun(9);
function shortestRun(parsecs:number):boolean{
    return parsecs < 12;
}
console.log(menorRun);