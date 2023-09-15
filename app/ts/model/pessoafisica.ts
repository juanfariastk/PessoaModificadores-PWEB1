class PessoaFisica extends Pessoa{
    readonly _cpf:string;
    
    constructor(nome:string, idade:number, datanasc:Date, cpf:string){
        super(nome + '- Física', idade, datanasc);
        this._cpf = cpf;
    };
    
    get cpf():string{
        return this._cpf};

    toString():string{
        return `Pessoa Física - Nome: ${this.nome}- CPF:${this.cpf} - Idade: ${this.idade} - Data de Nascimento: ${this.dataNascimento} `
    };
}