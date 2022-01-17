{
    "readinglist":{
        {"id" : 0, "title" : "Don Quijote", "fechaLectura": "27/07/2017"}
        {"id" : 1, "title" : "El lazarillo", "fechaLectura": "04/04/2019"}
        {"id" : 2, "title" : "Asesinato en el O.Express", "fechaLectura": "15/09/2021"}
    }
}

class Book{
    constructor(title,author,genre){
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.read = Boolean;
        this.readDate = undefined;
    }
}


class Booklist{
    constructor(){
        this.totalBooks = [];
        this.booksRead = 0;
        this.booksNotRead = 0;
        this.currentBook = undefined;
        this.nextBook = undefined;
        this.lastBook = undefined; 
    }

    //Methods
    
    add(book){
        this.totalBooks.push(book);
        this.booksNotRead +=1;
    };

    startRead(pos){
        this.booksNotRead -= 1;
        this.currentBook = this.totalBooks[pos];
        this.nextBook = (this.totalBooks[pos].length + 1);
        if (this.nextBook.length != this.totalBooks.legnth){
            this.lastBook = this.totalBooks[pos] -1;
        }
        else{
            this.lastBook = this.totalBooks[0];
        }
    }

    finishCurrentBook(){
        this.currentBook.read = true;
        this.currentBook.readDate = Date.now();
        this.booksRead +=1;
        this.currentBook = this.lastBook;
        this.nextBook = this.currentBook;
        this.lastBook = this.nextBook;
    }
}

export { Book, Booklist};

/*a = new Booklist();

x = new Book('El Quijote','Cervantes','Novela Fantástica');
y = new Book('El Cid Campeador','Anónimo','Novela Histórica');
z = new Book('La Odisea','Homero','Novela Mitológica');

a.add(x);
a.add(y);
a.add(z);*/
