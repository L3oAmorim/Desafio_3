export abstract class Pessoa {
    private _nome!: string;
    private _cpf!: string;
    private _telefone!: string;

    // get = acessar o nome
    public get nome(): string {
        return this._nome;
    }

    // set = definir o nome
    public set nome(value: string) {
        this._nome = value;
    }

    public get cpf(): string {
        return this._cpf;
    }

    public set cpf(value: string) {
        this._cpf = value;
    }

    public get telefone(): string {
        return this._telefone;
    }

    public set telefone(value: string) {
        this._telefone = value;
    }
}



