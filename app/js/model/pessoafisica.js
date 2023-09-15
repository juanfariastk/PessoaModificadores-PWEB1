class PessoaFisica extends Pessoa {
    constructor(nome, idade, datanasc, cpf) {
        super(nome + '- Física', idade, datanasc);
        this._cpf = cpf;
    }
    ;
    get cpf() {
        return this._cpf;
    }
    ;
    toString() {
        return `Pessoa Física - Nome: ${this.nome}- CPF:${this.cpf} - Idade: ${this.idade} - Data de Nascimento: ${this.dataNascimento} `;
    }
    ;
}
