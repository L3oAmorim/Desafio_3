import { Endereco } from "./endereco";

class Cliente {
    private endereco: Endereco;
    private enderecos: Endereco[] = [];

    constructor(cep: string, logradouro: string, numero: string, complemento: string, cidade: string, uf: string) {
        this.endereco = new Endereco(cep, logradouro, numero, complemento, cidade, uf);
    }

    public adicionarEndereco(endereco: Endereco) {
        this.enderecos.push(endereco);
    }

    public listarEnderecos() {
        console.log("Endereço principal do cliente:");
        console.log("CEP:", this.endereco.cep);
        console.log("Logradouro:", this.endereco.logradouro);
        console.log("Número:", this.endereco.numero);
        console.log("Complemento:", this.endereco.complemento);
        console.log("Cidade:", this.endereco.cidade);
        console.log("UF:", this.endereco.uf);
        console.log("---------------------");

        console.log("Outros endereços do cliente:");
        this.enderecos.forEach((endereco, index) => {
            console.log(`Endereço ${index + 1}:`);
            console.log("CEP:", endereco.cep);
            console.log("Logradouro:", endereco.logradouro);
            console.log("Número:", endereco.numero);
            console.log("Complemento:", endereco.complemento);
            console.log("Cidade:", endereco.cidade);
            console.log("UF:", endereco.uf);
            console.log("---------------------");
        });
    }
}

// Aplicação 2
const cliente = new Cliente("12345-678", "Rua A", "123", "", "Cidade A", "UF A");
cliente.adicionarEndereco(new Endereco("11111-111", "Rua B", "456", "", "Cidade B", "UF B"));
cliente.adicionarEndereco(new Endereco("22222-222", "Rua C", "789", "", "Cidade C", "UF C" ));
cliente.listarEnderecos();
