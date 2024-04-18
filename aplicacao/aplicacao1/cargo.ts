class Cargo {
    private funcionarios: Funcionario[] = [];

    constructor(public nome: string) {}

    adicionarFuncionario(funcionario: Funcionario) {
        this.funcionarios.push(funcionario);
    }

    listarFuncionarios() {
        console.log(`Funcionários do cargo ${this.nome}:`);
        this.funcionarios.forEach(funcionario => {
            console.log(`Nome: ${funcionario.nome}, Salário: ${funcionario.salario}`);
        });
    }
}

class Funcionario {
    private cargos: Cargo[] = [];

    constructor(public nome: string, public salario: number, cargo: Cargo) {
        this.adicionarAoCargo(cargo);
    }

    adicionarAoCargo(cargo: Cargo) {
        this.cargos.push(cargo);
        cargo.adicionarFuncionario(this);
    }
}

const Gerente = new Cargo("Gerente");
const Atendente = new Cargo("Atendente");

// Aplicação 1
const funcionarioJoao = new Funcionario("João", 3000, Atendente);
const funcionarioMaria = new Funcionario("Maria", 3500, Gerente);

Gerente.listarFuncionarios();
Atendente.listarFuncionarios();
