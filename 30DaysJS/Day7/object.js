let books = {
    title: "Rich Dad Poor Dad",
    Author: "Yash",
    Year: "2000",
};

console.log(books)

books.printt = () => {
    return `this it title ${this.title} and author is ${this.Author}`;
}
console.log(books.printt())


books.bkyear = function (year) {
    this.Year = year;
}
books.bkyear(2024)
console.log(books)


let nestedobj = {
    lib: "mum Lib",
    books: [
        {
            name: "Yash",
            title: "Book1",
            Year: 2024
        },
        {
            name: "Sahil",
            title: "Book2",
            Year: 2023
        }
    ]
}
console.log(nestedobj)
console.log(nestedobj.lib)

nestedobj.books.forEach(books => {

    console.log(books.name)
})


let bookss = {
    name: "Sahill",
    year: 2003,
};

bookss.addStr = function () {
    return `name : ${this.name} yerar : ${this.year}`
}
console.log(bookss.addStr())

let names = {
    name: "yash",
    name2: "Sahil",
    name3: "Ingale"
};

for (let property in names) {
    if (names.hasOwnProperty(property)) {
        console.log(`${property} = ${names[property]}`)
    }
}

let obj = {
    name: "Yash",
    surname: "Ingale"
};

let key = Object.keys(obj);
let objs = Object.values(obj);

key.forEach((keys, index) => {
    console.log(`Keys: ${keys} value: ${objs[index]}`)
})




let newBook = {
    name: "The Merical Morning",
    Author: "Hal Elord",
    NewMethord: function () {
        return `title: ${this.name} Writer: ${this.Author}`
    }
}

console.log(newBook)
console.log(newBook.NewMethord())



let libObj = {

   books : [
        {
            name: "The Merical Morning",
            Author: "Hal Elord"
        },
        {
            name: "The Merical Morning",
            Author: "Hal Elord"
        },
        {
            name: "The Merical Morning",
            Author: "Hal Elord"
        }
    ] 
};
console.log(libObj)