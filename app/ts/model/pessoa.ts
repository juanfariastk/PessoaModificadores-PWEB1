class Pessoa{
    protected _nome:string;
    private _idade:number;
    private _dataNascimento:Date;

    constructor(nome:string, idade:number, datanasc:Date){
        this._nome = nome;
        this._idade = idade;
        this._dataNascimento = datanasc;
    }

    get nome():string{
        return this._nome;};
    get idade():number{
        return this._idade;};
    get dataNascimento():Date{
        return this._dataNascimento;};

    set nome(novoNome:string){
        this._nome = novoNome;};
    set idade(novaIdade:number){
        this._idade=novaIdade;};
    set dataNascimento(novaData:Date){
        this._dataNascimento = novaData};

    toString():string{
        return `Nome: ${this._nome} - Idade: ${this._idade} - Data de Nascimento: ${this._dataNascimento}`;
    };
}