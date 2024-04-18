abstract class conta {
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
        console.log(`Número: ${this.numero}`)
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


class ContaCorrent extends conta {
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
    private limite: number = -100;
    saque(valor: number): void {
        if(valor>this.CalcularSaldo() + this.limite){
            console.log(`Movimentação não permitida. Saldo insuficiente.`);
            return;
        } else {
            super.saque(valor)
        }
    }
    transferencia(valor: number, destino: ContaCorrent): void {
        if (valor < 0) {
            console.log(`Valor inválido para transferência.`);
            return;
        }

        if (valor > this.CalcularSaldo() + this.limite) {
            console.log(`Transferência não permitida. Saldo insuficiente.`);
            return;
        }

        super.saque(valor);

        destino.deposito(valor);

        console.log(`Transferência de R$${valor} realizada com sucesso.`);
    }

}

//  Aplicação 5
const c1 = new ContaCorrent(999, "Maria", 123456)
const c2 = new ContaCorrent(888, "Amanda", 112233)

c1.deposito(300);
c1.info();
console.log("Saldo c1:", c1.CalcularSaldo());

c2.deposito(100);
c2.info();
console.log("Saldo c2:", c2.CalcularSaldo());

c1.transferencia(1000, c2);

c1.info()
console.log("Saldo c1:", c1.CalcularSaldo())

c2.info()
console.log("Saldo c2:", c2.CalcularSaldo())