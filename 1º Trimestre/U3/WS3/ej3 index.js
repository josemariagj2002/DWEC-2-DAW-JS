/*3-Treasure hunt

                  +-------------------------+
                  ¦ 34 ¦ 21 ¦ 32 ¦ 41 ¦ 25  ¦
                  +----+----+----+----+-----¦
                  ¦ 14 ¦ 42 ¦ 43 ¦ 14 ¦ 31  ¦
                  +----+----+----+----+-----¦
                  ¦ 54 ¦ 45 ¦ 52 ¦ 42 ¦ 23  ¦
                  +----+----+----+----+-----¦
                  ¦ 33 ¦ 15 ¦ 51 ¦ 31 ¦ 35  ¦
                  +----+----+----+----+-----¦
                  ¦ 21 ¦ 52 ¦ 33 ¦ 13 ¦ 23  ¦
                  +-------------------------+
                  
Do you like treasure hunts? In this problem you are to write a program to explore the above array for a treasure. 
The values in the array are clues. Each cell contains an integer between 11 and 55; for each value the ten's digit 
represents the row number and the unit's digit represents the column number of the cell containing the next clue. 
Starting in the upper left corner (at 1,1), use the clues to guide your search of the array. (The first three clues are 11, 34, 42). 
The treasure is a cell whose value is the same as its coordinates. Your program must first read in the treasure map data into a 5 by 5 array. 
Your program should output the cells it visits during its search, and a message indicating where you found the treasure.*/


let tesoro =[
    [34,21,32,41,25],
    [14,42,43,14,31],
    [54,45,52,42,23],
    [33,15,51,31,35],
    [21,52,33,13,23]
]

cont = 0;
let valor = 34;
while(cont<25){
    let cord = valor;
    let columna = cord%10;
    let x = Math.floor(cord/10);
    let fila = x;
    valor = tesoro[fila - 1][columna - 1];
    console.log(valor);
    cont += 1;
}


