/*exercicio 01 - transformar notas escolares
Crie um algoritmo que transforme as notas fo sistema númerico para sistema de notas em caracteres tipo A B C
de 90 para cima - A
entre 80 e 89 - B
entre 70 e 79 - C
entre 60 e 69 - D
menor que 60 - F
*/


/*function getScore (score) {
    
let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreF = score < 60 && score >= 0

let scoreFinal;
if(scoreA) {
    scoreFinal = "A"
} else if (scoreB) {
    scoreFinal = "B"
} else if (scoreC) {
    scoreFinal = "C"
} else if (scoreD) {
    scoreFinal = "D"
} else if (scoreF) {
    scoreFinal = "F"
} else {
    scoreFinal = "Nota Inválida"
}

return scoreFinal

}

console.log(getScore(101))
console.log(getScore(-1))
console.log(getScore(90))
console.log(getScore(0))
console.log(getScore(1))
console.log(getScore(45))
console.log(getScore(60))
console.log(getScore(61))
console.log(getScore(75))
console.log(getScore(85))
console.log(getScore(95)) */

/* exercicio 02 - sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
*receitas: []
*despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostras uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo */

/*
let family = {
    incomes: [2500, 3200, 250.43, 360.45],
    expenses:[320.34, 128.45, 176.87, 1450]
}

function sum (array) {
    let total = 0;

    for (let value of array) {
        total += value
    }
    return total
}

function calculateBalance () {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum (family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = "negativo"

    if (itsOk) {
        balanceText = "positivo"
    }

    console.log (`Seu saldo é ${balanceText}: R$ ${total.toFixed(2)}`)

}

calculateBalance() 
*/

/* exercicio 03 - Celsius em Farenheit
Crie uma função que receba uma string em Celsius ou Farenheit e faça a transformação de uma unidade para outra.

C = (F-32) * 5/9
F = C 9/5 +32
*/
/*
//transformDegree ('50F')
function transformDegree (degree) {
    const celsiusExists = degree.toUpperCase().includes ('C')
    const farenheitExist = degree.toUpperCase().includes ('F')

    //fluxo de erro
    if (!celsiusExists && !farenheitExist) {
        throw new Error ('Grau não identificado')
    }
    //fluxo ideal, F -> C
    let updatedDegree = Number(degree.toUpperCase().replace ("F", ""));
    let formula = (farenheit) => (farenheit-32) * 5/9
    let degreeSign = 'C'

    //fluxo alternativo C -> F
    if (celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace ("C", ""));
        formula = (celsius) => celsius * 9/5 +32
        degreeSign = 'F'
    }

    return formula (updatedDegree) + degreeSign
}

try {
    console.log(transformDegree('10C'))
    console.log(transformDegree('50F'))
    transformDegree ('50Z')
} catch (error) {
    console.log(error.message)
}
*/

/* exercicio 04 - Buscando e contando dados em Arrays

Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
- contar o número de categorias e o número de livros em cada categoria
- contar o número de autores
- mostrar livros do autor Auguto Cury
- transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor
*/

const booksByCategory = [
    { 
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title:"O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },

        ],
    },
    { 
        category:"Inteligênia Emocional",
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },

        ],
    },
]

const totalCategories = booksByCategory.length

console.log(totalCategories);
for (let category of booksByCategory) {
    console.log('Total de livros da categoria:', category.category)
    console.log(category.books.length)
}

function countAuthors () {
    let authors = [];

    for (let category of booksByCategory) {
        for(let book of category.books) {
            if (authors.indexOf (book.author) == -1) {
                authors.push (book.author)
            }
        }
    }

    console.log("Total de autores:", authors.length)
}

countAuthors();

function booksOfAugustoCury () {
    let books = [];

    for (let category of booksByCategory) {
        for(let book of category.books) {
            if (book.author === 'Augusto Cury') {
                books.push(book.title)
            }
        }
    }

    console.log("Livros do autor Augusto Cury:", books)
}

booksOfAugustoCury();

function booksOfAuthor (author) {
    let books = [];

    for (let category of booksByCategory) {
        for(let book of category.books) {
            if (book.author === author) {
                books.push(book.title)
            }
        }
    }

    console.log(`Livros do autor ${author}:${books.join(", ")}`)
}

booksOfAuthor('George S. Clason');