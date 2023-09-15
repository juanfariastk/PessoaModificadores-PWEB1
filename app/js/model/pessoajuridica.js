class PessoaJuridica extends Pessoa {
    constructor(nome, idade, datanasc, cnpj) {
        super(nome + '-Jurídica', idade, datanasc);
        this._cnpj = cnpj;
    }
    ;
    get cnpj() {
        return this._cnpj;
    }
    ;
    toString() {
        return `Pessoa Juridica - Nome: ${this.nome}- CNPJ:${this._cnpj} - Idade: ${this.idade} - Data de Nascimento: ${this.dataNascimento} `;
    }
    ;
}
