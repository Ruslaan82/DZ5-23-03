// ⁃ напишите функцию, куда может прилетать неограниченный список названия книг.
// Функция должна выводить только те книги, в названиях которых есть буква «у»
// и отдельным списком уже все остальные книги . Использовать filter нельзя,
// напишите свою версию метода фильтр)

function books(...arguments) {
    let uBooks = [];
    let books = [];
    for (let i = 0; i < arguments.length; i++){
        if (arguments[i].includes('у')) {
            uBooks.push(arguments[i]);
        } else {
            books.push(arguments[i]);
        }
    }
    console.log(uBooks)
    console.log(books)
}
books('Теремок', 'Мутант', 'Клоп', 'Аргумент')
