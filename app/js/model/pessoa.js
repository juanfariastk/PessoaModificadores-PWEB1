class Pessoa {
    constructor(nome, idade, datanasc) {
        this._nome = nome;
        this._idade = idade;
        this._dataNascimento = datanasc;
    }
    get nome() {
        return this._nome;
    }
    ;
    get idade() {
        return this._idade;
    }
    ;
    get dataNascimento() {
        return this._dataNascimento;
    }
    ;
    set nome(novoNome) {
        this._nome = novoNome;
    }
    ;
    set idade(novaIdade) {
        this._idade = novaIdade;
    }
    ;
    set dataNascimento(novaData) {
        this._dataNascimento = novaData;
    }
    ;
    toString() {
        return `Nome: ${this._nome} - Idade: ${this._idade} - Data de Nascimento: ${this._dataNascimento}`;
    }
    ;
}
