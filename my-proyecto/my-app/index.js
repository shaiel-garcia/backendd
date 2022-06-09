/*
class Usuario {
    constructor(firstName, lastName, books, pets) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.books = books;
        this.pets = pets
    }
    getFullName() {
        return this.firstName + " " + this.lastName
    }
    addPet(pet) {
        this.pets.push(pet);
    }
    countPets() {
        return this.pets.length
    }
    addBook(name, author) {
        this.books.push({ name: name, author: author });
    }
    getBooksName() {
        let names = []
        this.books.forEach(element => {
            names.push(element.name)
        });
        return names
    }
}
let usuario = new Usuario("Blanca", "Robles", [], [])
console.log(usuario.getFullName());
usuario.addPet("Giuliana")
usuario.addPet("Bianca")
usuario.addPet("Simon")
usuario.addPet("Cala")
usuario.addPet("Marvel")
usuario.addBook("El desorden que dejas", "Carla Montero")
usuario.addBook("El lobo estepario", "Hermann Hesse")
usuario.addBook("Donde el corazon te lleve", "Susana Tamaro")
usuario.addBook("El ingles de los güesos", "Benito lynch")
usuario.addBook("Arboles del abalorio", "Hermann Hesse")
usuario.addBook("El bar del infierno", "Alejandro Dolina")
console.log(`cantidad de animales: ${usuario.countPets()}`)
console.log(`Los nombres de los libros: ${usuario.getBooksName()}`) */
