class BookList{
    constructor() {
        this.readBooks = 0;
        this.notReadYet = 0;
        this.next = "";
        this.current = "";
        this.last = "";
        this.all = [];
    }

    add(book){
        this.all.push(book);
    }

    finishCurrentBook(){
        this.notReadYet -= 1;
        this.readBooks = this.current;
        this.last.readDate = new Date(Date.now());
        this.last = this.current;
        this.current = this.next;
        this.last.read = true;
        var i = 0;
        if(this.notReadYet != 0){
            while(this.all[i].read == true || this.all[i] == this.current)
                i++;
            
            this.next = this.all[i];
        }
        else
            console.log("no hay mas libros para leer");
    }    
}

class Book{
    constructor(title,genre,author,read,readDate = "") {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.readDate = readDate;
    }
}

function guardarLibro(e){

    if (localStorage.listaLibros)
    {
        pintarlistalibros(JSON.parse(localStorage.listaLibros));
    }
    
    e.preventDefault()
    titulo = document.getElementById("titulo").value;
    genero = document.getElementById("genero").value;
    autor = document.getElementById("autor").value;
    leido = document.getElementById("leido").value;
    fecha = document.getElementById("fecha").value;
    libro = new Book(titulo,genero,autor,leido,fecha);
    lista.add(libro);
    let li = document.createElement("li");
    li.innerHTML = lista.all[lista.all.length -1].title + " - "+lista.all[lista.all.length -1].author;
    document.getElementById("lista").appendChild(li);    
}
var lista = new BookList;

function inicia(){

    localStorage.setItem("listaLibors",JSON.stringify(BookList))
    document.getElementById("libro").addEventListener("click",guardarLibro);
}

window.addEventListener('load',inicia);


/*
{
    "readinglist":{
        {"id" : 0, "title" : "Don Quijote", "fechaLectura": "27/07/2017"}
        {"id" : 1, "title" : "El lazarillo", "fechaLectura": "04/04/2019"}
        {"id" : 2, "title" : "Asesinato en el O.Express", "fechaLectura": "15/09/2021"}
    }
}
*/