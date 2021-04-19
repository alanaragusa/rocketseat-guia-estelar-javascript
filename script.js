/* exercicio 01 e 02 - 
1. declarar uma variavel de nome weight
2. que tipo de dado é a variável acima?
*/

/*let weight;
console.log (typeof weight)
/* undefined */

/* exercicio 03
Declara uma variavel e atribua valores para cada um dos dados:
name: string
age: number (integer - inteiro)
stars: number (float - quebrado)
isSubscribed: boolean */

/*let name = "Alana"
let age = 31
let stars = 4.8
let isSubscribed: true*/

/* exercício 04
A variável student abaixo é de que tipo de dados? OBJECT
4.1 atribua a ela as mesmas propriedades e valores do exercicio 3.
4.2 mostre no console a seguir a mensagem:
<name> de idade <age> pesa <weight> kg.
atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto. */

let student = {
    name: "Alana",
    age: 31,
    stars: 4.8,
    isSubscribed: true,
    weight: 61,
}

/*console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.´)*/

/* exercicio 05
Declare uma variável do tipo Array de nome student e atribua a ela nenhum valor, ou seja, somente o Array vazio*/

/*let students = []*/

/* exercicio 06
Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copia e colar o objeto, mas usar o objeto criado e inserir ele no Array)*/

let students = [
    student
]

console.log(student)
