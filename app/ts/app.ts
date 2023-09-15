let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

//testes pessoas;

const pessoa1 = new Pessoa("João", 30, new Date("1993-01-15"));
const pessoaFisica1 = new PessoaFisica("Maria", 25, new Date("1998-05-20"), "123.456.789-00");
const pessoaJuridica1 = new PessoaJuridica("Empresa XYZ", 5, new Date("2018-08-10"), "12.345.678/0001-99");

console.log("Pessoa:");
console.log(pessoa1.toString());

console.log("\nPessoa Física:");
console.log(pessoaFisica1.toString());

console.log("\nPessoa Jurídica:");
console.log(pessoaJuridica1.toString());