class Client {
    nome: string
    cpf: number

    constructor(nome: string, cpf: number) {
        this.nome = nome
        this.cpf = cpf
    }

    public infoCliente(): string {
        return `Cliente: ${this.nome}, CPF: ${this.cpf}`
    }
}

class ContCorrente extends Client {
    private conta: number
    private saldo: number

    constructor(nome: string, cpf: number, conta: number) {
        super(nome, cpf)
        this.conta = conta
        this.saldo = 0
    }

    public infoConta(): string {
        return `Conta: ${this.conta}`
    }

    public CalcularSaldo(): number {
        return this.saldo
    }

    deposito(valor: number) {
        if (valor < 0) {
            console.log(`Valor inválido`)
            return
        }
        this.saldo += valor
    }

    saque(valor: number) {
        if (valor < 0) {
            console.log(`Valor inválido`)
            return
        }
        if (valor <= this.saldo) {
            this.saldo -= valor
        } else {
            console.log(`Saldo insuficiente`)
        }
    }
}
// Aplicação 3
const client1 = new Client("Maria", 1111)
console.log(client1.infoCliente())

const con1 = new ContCorrente(`client1`,11111, 55555)
con1.deposito(100)
con1.deposito(100)
con1.deposito(100)

con1.saque(50)

console.log(con1.infoConta())
console.log("Saldo:", con1.CalcularSaldo())
