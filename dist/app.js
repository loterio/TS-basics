var message = "and I am iron man.";
console.log(message);
var nbmark = 32;
console.log("the strongest is mark " + nbmark);
nbmark += 7;
console.log("but the best one is mark " + nbmark);
bestArmour("Fabio");
// function
function bestArmour(name) {
    console.log("mark 42 is the beatifuly, " + name);
}
var menorRun = shortestRun(9);
function shortestRun(parsecs) {
    return parsecs < 12;
}
console.log(menorRun);
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc(5,2) = ", inc(5, 2));
console.log("inc(5,1) = ", inc(5, 1));
console.log("inc(5) = ", inc(5)); // resulta 6 pois inc tem um valor default
var jediList = ["Luke", "Obi-wan", "Windu", "Cristiano Ronaldo"];
showJedi(jediList);
function showJedi(jedis) {
    var x = 1; // este exemplo usa vetor como parâmetro
    jedis.forEach(function (jedi) {
        console.log(x, jedi);
        x++;
    });
}
showMark("mark 1", "mark 32", "mark 49", "friday");
function showMark() {
    var marks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        marks[_i] = arguments[_i];
    }
    var x = 1; // já este os parâmetros podem ser postos como strings separadas
    marks.forEach(function (mark) {
        console.log(x, mark);
        x++;
    });
}
// operador ternário
var isEnough = function (parsecs) {
    return parsecs > 12;
};
var distance = 11; // variaveis com ${} são chamadas de Template Strings
console.log("Is " + distance + " parsecs enough to beat MIllenium Falcon? " + (isEnough(distance) ? 'yes' : 'no'));
// getElementById
function getAge() {
    var idadeCLiente = parseInt(document.getElementById("client").value);
    alert(idadeCLiente);
}
// arrow function
var call = function (msg) { return console.log("Jarvis?", msg); };
call('yes sir.');
