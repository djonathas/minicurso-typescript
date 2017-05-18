//Named function
function soma(x, y) {
    return x + y;
}

//Anonymous function
let soma2 = function(x, y) { 
    return x+y; 
};

//Arrow Functions
let soma3 = (x, y) => {
    return x+y
}

//Tipagem de dados em funções
function soma4(x: number, y: number):number {
    return x + y;
}

let soma5 = (x:number, y:number):number => {
    return x+y
}

//Função com parametros opcionais (utilizar "?" junto ao nome do parametro)
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let name = buildName("Bob");
let name2 = buildName("Bob", "Adams");

//Função com parametros padrão ou pre-definidos
function buildName2(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

let nome3 = buildName2("Bob");
let nome4 = buildName2("Bob", "Adams"); 