/* arrays ( listas en python)

a=[3,4,5]

length de un array vacio es 0

a.push = a.append     a.unshif = a.append por el principio     a.shif quita del principio           a.pop del final
splice quita la posición que le pases, 
puede ser incluso un rango. Ej:(5,9) pero la segunda posicion es el numero de posiciojnes qu ele pases, no la posicion hasta la que quita 
tambien te permite introducir elementos inmediatamente después de eliminar las posiciones

ejemplo splice   array = [0,1,2,3,4,5,6]   a = array.slice(2,4)  a = [2,3,4]
map recorre todos los elementos del array y hace un cambio de todos 
ej
numeros = [1,2,3]
dobles = numeros.map(num=> num*5)
dobles = [5,10,15]
*/

var frutas = ['Peras', 'Manzanas', 'Kiwis', 'Plátanos', 'Mandarinas'];

frutas.splice(1);

frutas.push('Naranjas');
frutas.push('Sandías');

frutas.splice(2,2,'Cerezas','Nísperios');

