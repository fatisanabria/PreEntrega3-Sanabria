// PELICULAS //
class Pelicula {
    constructor(imagen, nombre, genero, sinopsis, año, director, id) {
        this.imagen = imagen
        this.nombre = nombre
        this.genero = genero
        this.sinopsis = sinopsis
        this.año = año
        this.director = director
        this.id = id
    }
    
}
const peliculas = []
peliculas.push(new Pelicula ("./img/lalaland.jpeg","La la land","Musical","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, labore.", "2016", "Damien Chazelle", "imgLLL"))
peliculas.push(new Pelicula ("./img/westsidestory.jpg","West side story","Musical","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, labore.", "2021", "Steven Spielberg", "imgWST"))
peliculas.push(new Pelicula ("./img/astarisborn.jpg","A Star is Born","Musical","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, labore.", "2018", "Bradley Cooper","imgASIB"))
peliculas.push(new Pelicula ("./img/matilda.jpg","Matilda: The Musical","Musical","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, labore.", "2022", "Matthew Warchus","imgMatilda"))
peliculas.push(new Pelicula ("./img/spirited.jpg","Spirited: el espíritu de las fiestas","Musical","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, labore.", "2022", "Sean Anders","imgSpirited"))
peliculas.push(new Pelicula ("./img/cloverfield.JPG","Cloverfield","Ciencia Ficcion","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, labore.", "2008", "Matt Reeves", "imgCloverfield"))
peliculas.push(new Pelicula ("./img/e.t.jpg","E.T el extraterrestre","Ciencia Ficcion","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, labore.", "1982", "Steven Spielberg","imgET"))
peliculas.push(new Pelicula ("./img/dune.jpg","Duna","Ciencia Ficcion","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, labore.", "2021", "Denis Villeneuve","imgDuna"))
peliculas.push(new Pelicula ("./img/everything.jpg","Everything Everywhere All At Once","Ciencia Ficcion","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, labore.", "2022", "Dan Kwan","imgEEATST"))
peliculas.push(new Pelicula ("./img/adamproject.jpg","The Adam Project","Ciencia Ficcion","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, labore.", "2022", "Shawn Levy","imgAdamP"))
peliculas.push(new Pelicula ("./img/thebatman.jpg","The Batman","Accion","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, labore.", "2022", "Matt Reeves","imgBatman"))
peliculas.push(new Pelicula ("./img/unchartedportada.jpg","Uncharted","Accion","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, labore.", "2022", "Ruben Fleischer","imgUncharted"))
peliculas.push(new Pelicula ("./img/bullettrain.jpg","Bullet Train","Accion","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, labore.", "2022", "David Leitch","imgBulletT"))
peliculas.push(new Pelicula ("./img/topgun.jpg","Top Gun Maverick","Accion","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, labore.", "2022", "Joseph Kosinski","imgTopGun"))
peliculas.push(new Pelicula ("./img/samaritan.jpg","Samaritan","Accion","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, labore.", "2022", "Julius Avery","imgSamaritan"))
peliculas.push(new Pelicula ("./img/operationFinale.jpg","Operation Finale","Drama","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, labore.", "2018", "Chris Weitz","imgOperationF"))
peliculas.push(new Pelicula ("./img/thegoodnurse.jpg","The good nurse","Drama","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, labore.", "2022", "Tobias Lindholm", "imgGoodN"))
peliculas.push(new Pelicula ("./img/harrigansphone.jpg","Mr. Harrigan's Phone","Drama","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, labore.", "2022", "John Lee Hancock", "imgHPhone"))
peliculas.push(new Pelicula ("./img/paleblueeye.jpg","The Pale Blue Eye","Drama","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, labore.", "2022", "Scott Cooper", "imgTPBE"))
peliculas.push(new Pelicula ("./img/bonesandall.jpg","Bones and All","Drama","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, labore.", "2022", "Luca Guadagnino", "imgBones"))
peliculas.push(new Pelicula ("./img/dontworrydarling.jpg","Don't Worry Darling","Terror","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, labore.", "2022", "Olivia Wilde", "imgDWD"))
peliculas.push(new Pelicula ("./img/umma.jpg","Umma","Terror","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, labore.", "2022", "Iris Shim", "imgUmma"))
peliculas.push(new Pelicula ("./img/hellraiser.jpg","Hellraiser","Terror","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, labore.", "2022", "David Bruckner", "imgHellraiser"))
peliculas.push(new Pelicula ("./img/elsotano.jpg","El sótano","Terror","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, labore.", "2022", "Brendan Muldowney", "imgElSotano"))
peliculas.push(new Pelicula ("./img/smile.jpg","Smile","Terror","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, labore.", "2022", "Parker Finn", "imgSmile"))
peliculas.push(new Pelicula ("./img/argentina1985.jpg","Argentina, 1985","Drama","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, labore.", "2022", "Santiago Mitre", "imgArg1985"))
peliculas.push(new Pelicula ("./img/elvis.jpg","Elvis","Musical","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, labore.", "2022", "Baz Luhrmann","imgElvis"))
peliculas.push(new Pelicula ("./img/x.jpg","X","Terror","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, labore.", "2022", "Ti West", "imgX"))
peliculas.push(new Pelicula ("./img/carter.jpg","Carter","Accion","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, labore.", "2022", "Jung Byung-Gil", "imgCarter"))
peliculas.push(new Pelicula ("./img/spiderhead.jpg","Spiderhead","Ciencia Ficcion","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, labore.", "2022", "Joseph Kosinski", "imgSpiderhead"))

// JSON & LOCAL STORAGE//
const peliculasJSON = JSON.stringify(peliculas)
localStorage.setItem("peliculas", peliculasJSON);
const storedPeliculasJSON = localStorage.getItem("peliculas");
const storedPeliculas = JSON.parse(storedPeliculasJSON);

// ID'S //
const infoGenero = document.getElementById('infoGenero')
const infoAño = document.getElementById('infoAño')
const infoDirector = document.getElementById('infoDirector')
const infoSinopsis = document.getElementById('infoSinopsis')
const tituloPelicula = document.getElementById('tituloPelicula')
const imagenPortada = document.getElementById('imagenPortada')
const imageIds = [
    "imgLLL",
    "imgWST",
    "imgASIB",
    "imgMatilda",
    "imgSpirited",
    "imgElvis",
    "imgOperationF",
    "imgGoodN",
    "imgHPhone",
    "imgTPBE",
    "imgBones",
    "imgArg1985",
    "imgDWD",
    "imgUmma",
    "imgHellraiser",
    "imgElSotano",
    "imgX",
    "imgSmile",
    "imgBatman",
    "imgUncharted",
    "imgBulletT",
    "imgTopGun",
    "imgSamaritan",
    "imgCarter",
    "imgCloverfield",
    "imgET",
    "imgDuna",
    "imgEEATST",
    "imgAdamP",
    "imgSpiderhead"
    ];
    const cartaPelicula = document.getElementById('cartaPelicula')
    const portadas = document.querySelectorAll(".box img");
    const btnBusqueda = document.getElementById('btnBusqueda')
    const inputBusqueda = document.getElementById('inputBusqueda')

    // FUNCIONES //
function cargaDeImagenes() {
    for (let i = 0; i < storedPeliculas.length; i++) {
        const imagenId = storedPeliculas[i].id;
        const imgElement = document.getElementById(imagenId);
        console.log(imgElement)
        console.log(imagenId)
        imgChange(imgElement, storedPeliculas[i].imagen);
    }
}
function imgChange(id, string){
    id.src = string
}
function obtenerID() {
    seleccion = storedPeliculas.findIndex((peliculas) => {return peliculas.id == this.id})
    console.log(seleccion)
    rellenarInformacion(seleccion) 
    
}
function rellenarInformacion(seleccion) {
    infoGenero.innerText = storedPeliculas[seleccion].genero
    infoAño.innerText = storedPeliculas[seleccion].año
    infoDirector.innerText = storedPeliculas[seleccion].director
    infoSinopsis.innerText = storedPeliculas[seleccion].sinopsis
    tituloPelicula.innerText = storedPeliculas[seleccion].nombre
    imagenPortada.src = storedPeliculas[seleccion].imagen
}
function abrirCarta(){
    if (cartaPelicula.classList == 'd-none') {
        cartaPelicula.classList.remove('d-none')}
}
portadas.forEach(
function(portadas){
    portadas.addEventListener("click", abrirCarta, false)
}
)
// Eventos //
window.addEventListener("load", cargaDeImagenes)
    imageIds.forEach(imgId => {
    const image = document.getElementById(imgId);
    image.addEventListener("click", obtenerID);
    });
btnBusqueda.addEventListener("click", (e)=> {
    e.preventDefault()
    let elegido = storedPeliculas.findIndex((storedPeliculas) => {
        return storedPeliculas.nombre == inputBusqueda.value
    })
    rellenarInformacion(elegido)
    abrirCarta()
})





