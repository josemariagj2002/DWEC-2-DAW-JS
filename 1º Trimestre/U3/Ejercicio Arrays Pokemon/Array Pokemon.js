/*crear un array con 10 numeros y los ordenamos de forma creciente y de forma decreciente
*/


let numeros =[1,2,3,4,5,6,7,8,9,10];

function creciente(valor1, valor2){
    return valor1 - valor2;
}

function decreciente(valor1, valor2){
    return valor2 - valor1;
}

numeros.sort(creciente);
numeros.sort(decreciente);



/*crar un array con objetos y ordenarlos por varios campos (pokemon)*/

let pokemons =
[
    {nombre:'Infernape', tipo:'Fuego', subtipo:'Lucha', n_pokedex:392},
    {nombre:'Staraptor', tipo:'Normal', subtipo:'Volador', n_pokedex:398},
    {nombre:'Dialga', tipo:'Dragón', subtipo:'Acero', n_pokedex:483},
    {nombre:'Gyarados', tipo:'Agua', subtipo:'Volador', n_pokedex:130},
    {nombre:'Volcarona', tipo:'Bicho', subtipo:'Fuego', n_pokedex:637},
    {nombre:'Snorlax', tipo:'Normal', subtipo:undefined, n_pokedex:143},
    {nombre:'Sceptile', tipo:'Planta', subtipo:undefined, n_pokedex:254},
    {nombre:'Pinsir', tipo:'Bicho', subtipo: undefined, n_pokedex:127},
    {nombre:'Machamp', tipo:'Lucha', subtipo: undefined, n_pokedex:68},
    {nombre:'Greninja', tipo:'Sobrevalorado', subtipo:undefined, n_pokedex:658}
];


//ordena por n de pokedex
function n_pokedex(valor1, valor2){
    return valor1.n_pokedex - valor2.npokedex;
};

pokemons.sort(n_pokedex);

//ordena por tipo y por subtipo
function tipo(valor1, valor2){

        return valor1.tipo - valor2.tipo;
};

pokemons.sort(tipo);
