class PessoaJuridica extends Pessoa{
    readonly _cnpj:string;

    constructor(nome:string, idade:number, datanasc:Date, cnpj:string){
        super(nome + '-Jurídica', idade, datanasc);
        this._cnpj = cnpj;
    };

    get cnpj():string{
        return this._cnpj;};

    toString():string{
        return `Pessoa Juridica - Nome: ${this.nome}- CNPJ:${this._cnpj} - Idade: ${this.idade} - Data de Nascimento: ${this.dataNascimento} `
    };
}