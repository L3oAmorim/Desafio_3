abstract class Conta {
    protected titular: string
    protected numero: number
    private saldo:number
    
    constructor(titular: string, numero: number) {
        this.titular = titular
        this.numero = numero
        this.saldo = 0
    }

    protected info() {
        console.log(`Titular: ${this.titular}`)
        console.log(`Número da Conta: ${this.numero}`)
    }

    public CalcularSaldo():number{
        return this.saldo
    }

    protected deposito(valor:number){
        if(valor < 0){
            console.log(`Valor inválido`)
            return
        }
        this.saldo+=valor
        
    }

    protected saque(valor:number){
        if(valor < 0){
            console.log(`Valor inválido`)
            return
        }
        if(valor <= this.saldo){
            this.saldo -= valor
        }
        else{
            console.log(`Saldo insuficiente`)
        }
    }        
}


class ContaCorrente extends Conta {
    cpf: number

    constructor(cpf: number, titular: string, numero: number) {
        super(titular, numero)
        this.cpf = cpf
    }

    info() {
        super.info()
        console.log(`CPF: ${this.cpf}`)
    }

    deposito(valor:number){
        if(valor>2500){
            console.log(`Valor de depósito muito alto`)
        } else {
            super.deposito(valor)
        }
    }
    Saque(valor:number){
        if(valor>2000){
            console.log(`Valor de saque não permitido`)
        } else {
            super.saque(valor)
        }
    }

    transferenciaParaPoupanca(valor: number, contaPoupanca: ContaPoupanca): void {
        if (valor < 0) {
            console.log(`Valor inválido para transferência`);
            return;
        }
        if (valor <= this.CalcularSaldo()) {
            this.saque(valor);
            contaPoupanca.depositoPoupanca(valor);
            console.log(`Transferência de ${valor} realizada com sucesso para a conta poupança`);
        } else {
            console.log(`Saldo insuficiente para realizar a transferência`);
        }
    }
}

class ContaPoupanca extends Conta {
        private numeroPoupanca: number;
        private saldoPoupanca: number;
        private cpf: number
    
        constructor(titular: string, cpf: number, numeroConta: number, numeroPoupanca: number) {
            super(titular, numeroConta);
            this.cpf = cpf
            this.numeroPoupanca = numeroPoupanca;
            this.saldoPoupanca = 0;
        }
    
        public infoPoupanca(): string {
            return `Conta Poupança: ${this.numeroPoupanca}, Titular: ${this.titular}, CPF: ${this.cpf}`;
        }
        
        calcularSaldoPoupanca(): number {
            return this.saldoPoupanca;
        }

        depositoPoupanca(valor: number): void {
            if (valor < 0) {
                console.log(`Valor inválido para depósito`);
                return;
            }
            this.saldoPoupanca += valor;
        }
    
        saquePoupanca(valor: number): void {
            if (valor < 0) {
                console.log(`Valor inválido para saque`);
                return;
            }
            if (valor <= this.saldoPoupanca) {
                this.saldoPoupanca -= valor;
            } else {
                console.log(`Saldo insuficiente na conta poupança`);
            }
        }
    }

//Aplicação 4
const cont1 = new ContaCorrente(999, "Maria", 123456)
const contp1 = new ContaPoupanca(`Leonardo`, 444, 77, 654321)

//Movimentação da contaCorrente
cont1.deposito(1000)
cont1.transferenciaParaPoupanca(500, contp1);

cont1.info()
console.log("Saldo:", cont1.CalcularSaldo());
console.log(`-----------------------------------------`)
//____________________________________________________________________________________

//Movimentação da ContaPoupança
contp1.depositoPoupanca(1000)

console.log(contp1.infoPoupanca());
console.log("SaldoPoupanca", contp1.calcularSaldoPoupanca());