//1- declarando uma classe

class Veiculo {
    titulo: string
    preco: number

    constructor(titulo: string, preco: number) {
        this.titulo = titulo
        this.preco = preco
    }

    mostraDados() {
        return `Título: ${this.titulo} - Preço: ${this.preco}`
    }
}

let veiculo = new Veiculo("Clio", 25000)
let veiculo2:Veiculo = new Veiculo("Uno", 35000)

//2- HERANÇA

class Carro extends Veiculo {
    direcao: string
    transmissao: string

    constructor(titulo: string, preco:number, direcao: string, transmissao: string) {
        super(titulo, preco) //quando uma classe é extendida é obrigatorio instanciar a classe super
        this.direcao = direcao
        this.transmissao = transmissao
    }

//SOBRESCRITA DE METODO
// como este método existe na classe super, estamos substituindo seu comportamento aqui
// também é possivel acessar o método original utilizando o termo super
    mostraDados() {
        return `${super.mostraDados()} - Direção: ${this.direcao} - Transmissão: ${this.transmissao}`
    }
}

let carro = new Carro("Uno", 25000, "hidraulica", "automatica")
console.log(carro.mostraDados())