//EXERCICIO 3

// Parte 1
let nome = 'Informe seu nome completo:'
let date = 'Informe sua data de nascimento:'
let endereco = 'Informe seu endereço:'
let cpf = 'Informe seu CPF:'
let escolaridade = 'Informe sua escolaridade:'
let cnh = 'VocÊ possui CNH?'
let filhos = 'Informe quantos finhos tem:'
let cargo = 'Informe seu cargo na empresa:'
let salario = 'Informe seu salário:'
let comissao = 'Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero:'
let admissao = 'Informe o ano de adimissão:'


//a)
const nomeCompleto = prompt(nome)
//b)
const dataDeNascimento = prompt(date)
//c)
const enderecoCompleto = prompt(endereco)
//d)
const cpfInformado = prompt(cpf)
//e)
const nivelEscolar = prompt(escolaridade)
//f)
const possuiCnh = prompt(cnh)
//g)
const qunatFilhosInfomado = prompt(filhos)
//h)
const cargoInformado = prompt(cargo)
//i)
const salarioInformado = prompt(salario)
//j)
const comissaoInformada = prompt(comissao)
//k)
const dataDeAdimissao = prompt(admissao)

//Parte 2
const cpfConvertido = Number(cpfInformado)
const qunatFilhosConvertida = Number(qunatFilhosInfomado)
const salarioAtualConverido = Number(salarioInformado)
const comissaoConvertida = Number(comissaoInformada)
//console.log(cpfConvertido)
//Parte 3
console.log(typeof nome)
console.log(typeof date)
console.log(typeof endereco)
console.log(typeof cpf)
console.log(typeof escolaridade)
console.log(typeof cnh)
console.log(typeof filhos)
console.log(typeof cargo)
console.log(typeof salario)
console.log(typeof comissao)
console.log(typeof admissao)
console.log(typeof nomeCompleto)
console.log(typeof dataDeNascimento)
console.log(typeof enderecoCompleto)
console.log(typeof cpfInformado)
console.log(typeof nivelEscolar)
console.log(typeof possuiCnh)
console.log(typeof qunatFilhosInfomado)
console.log(typeof cargoInformado)
console.log(typeof salarioInformado)
console.log(typeof comissaoInformada)
console.log(typeof dataDeAdimissao)
console.log(typeof cpfConvertido)
console.log(typeof qunatFilhosConvertida)
console.log(typeof salarioAtualConverido)
console.log(typeof comissaoConvertida)

//Pate 4
console.log('Nome completo:', nomeCompleto)
console.log('Data de nascimento:', dataDeNascimento)
console.log('Endereço:', enderecoCompleto)
console.log('CPF:', cpfConvertido)
console.log('Escolaridade', nivelEscolar)
console.log('Possue CNH:', possuiCnh)
console.log('Quanto filhos possue', qunatFilhosConvertida)
console.log('Cargo atual:', cargoInformado)
console.log('Salário:', salarioAtualConverido)
console.log('Valor da comissão:', comissaoConvertida)
console.log('Ano da adimissão:', dataDeAdimissao)
