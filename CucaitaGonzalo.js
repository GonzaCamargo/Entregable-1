class Usuario{

    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){
        console.log("-------Nombre completo --------");
        console.log(`${this.nombre} ${this.apellido}`);
        return `Su nombre completo es: ${this.nombre} ${this.apellido}`;
    }

    addMascota(nomMascota){
        console.log("-------Mascota agregada --------");
        this.mascotas.push(nomMascota);
        console.log(`Su nueva mascota es ${this.mascotas[this.mascotas.length - 1]}`);
    }

    countMascotas(){
        console.log("-------Total Mascotas --------");
        let sum = this.mascotas.length;
        console.log(`Total mascotas ${sum}`);
        return `Total mascotas ${sum}`
    }

    addBook(nomLibro, aut){
        console.log("-------Libros agregados --------");
        let newLibro = {
            'nombre': nomLibro,
            'autor': aut
        }

        this.libros.push(newLibro)

        console.log(`Su ultimo libro agregado fue ${JSON.stringify(this.libros[this.libros.length -1])}`);

    }

    getBookNames(){
        console.log("-------Nombre de libros --------");
        this.libros.forEach(function (element, indice, array) {
            console.log(`${indice}: ${element.nombre}`);
        });
    }
}

let nom = "Gonzalo";
let ape = "Camargo";
let lib = []
let mascotas = ['Simba', 'Nala']

let c = new Usuario(nom, ape, lib, mascotas);

c.getFullName();
c.addMascota('Scar')
c.countMascotas()
c.addBook('Las venas abiertas de America Latina','Eduardo Galeano');
c.addBook('Satanas','Mario Mendoza');
c.getBookNames();