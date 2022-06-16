flag=0;
let sudukuarray = [
        [2, 4, 1, 6, 9, 5, 3, 8, 7],
        [7, 3, 5, 4, 2, 8, 1, 6, 9],
        [8, 6, 9, 7, 3, 1, 4, 2, 5],
        [4, 1, 3, 8, 7, 9, 2, 5, 6],
        [6, 9, 2, 5, 1, 3, 7, 4, 8],
        [5, 8, 7, 2, 4, 6, 9, 3, 1],
        [1, 7, 8, 3, 6, 4, 5, 9, 2],
        [9, 5, 4, 1, 8, 2, 6, 7, 3],
        [3, 2, 6, 9, 5, 7, 8, 1, 4]
]
let sudukoinvert = [[], [], [], [], [], [], [], [], []];
function sudukuvelidat(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i == j) {
                j++;
            }
            if (arr[i] == arr[j]) {
                console.log(i + " and " + j + " indexed elemet are same");
                flag = 1;
                break;
            }
        }
        if (flag == 1) {
            break;
        }
    }
    if (flag == 0) {
        return true;
    }
    else {
        return false;
    }
}

//invert sudoku
for (i = 0; i < sudukuarray.length; i++) {
    for (j = 0; j < sudukuarray.length; j++) {
        sudukoinvert[j][i] = sudukuarray[i][j]
    }
}

for (const array in sudukuarray) {
   var validetrow = sudukuvelidat(sudukuarray[array])
    if (validetrow == true) {

        console.log(sudukuarray[array] + "  " + validetrow);
    }
    else {
        break;
    }
}

for (const array in sudukoinvert) {
    var validetorcol =sudukuvelidat(sudukoinvert[array]);
    if (validetorcol == true) {

        console.log(sudukoinvert[array] + "  " + validetrow);
    }
    else {
        break;
    }
}

 //array of suduku group
group1 = [
    sudukuarray[0][0], sudukuarray[0][1], sudukuarray[0][2],
    sudukuarray[1][0], sudukuarray[1][1], sudukuarray[1][2],
    sudukuarray[2][0], sudukuarray[2][1], sudukuarray[2][2]
]
group2 = [
    sudukuarray[0][3], sudukuarray[0][4], sudukuarray[0][5],
    sudukuarray[1][3], sudukuarray[1][4], sudukuarray[1][5],
    sudukuarray[2][3], sudukuarray[2][4], sudukuarray[2][5]
]
group3 = [
    sudukuarray[0][6], sudukuarray[0][7], sudukuarray[0][8],
    sudukuarray[1][6], sudukuarray[1][7], sudukuarray[1][8],
    sudukuarray[2][6], sudukuarray[2][7], sudukuarray[2][8]
]
group4 = [
    sudukuarray[3][0], sudukuarray[3][1], sudukuarray[3][2],
    sudukuarray[4][0], sudukuarray[4][1], sudukuarray[4][2],
    sudukuarray[5][0], sudukuarray[5][1], sudukuarray[5][2]
]
group5 = [
    sudukuarray[3][3], sudukuarray[3][4], sudukuarray[3][5],
    sudukuarray[4][3], sudukuarray[4][4], sudukuarray[4][5],
    sudukuarray[5][3], sudukuarray[5][4], sudukuarray[5][5]
]
group6 = [
    sudukuarray[3][6], sudukuarray[3][7], sudukuarray[3][8],
    sudukuarray[4][6], sudukuarray[4][7], sudukuarray[4][8],
    sudukuarray[5][6], sudukuarray[5][7], sudukuarray[5][8]
]
group7 = [
    sudukuarray[6][0], sudukuarray[6][1], sudukuarray[6][2],
    sudukuarray[7][0], sudukuarray[7][1], sudukuarray[7][2],
    sudukuarray[8][0], sudukuarray[8][1], sudukuarray[8][2]
]
group8 = [
    sudukuarray[6][3], sudukuarray[6][4], sudukuarray[6][5],
    sudukuarray[7][3], sudukuarray[7][4], sudukuarray[7][5],
    sudukuarray[8][3], sudukuarray[8][4], sudukuarray[8][5]
]
group9 = [
    sudukuarray[6][6], sudukuarray[6][7], sudukuarray[6][8],
    sudukuarray[7][6], sudukuarray[7][7], sudukuarray[7][8],
    sudukuarray[8][6], sudukuarray[8][7], sudukuarray[8][8]
]
grupsudo = [group1, group2, group3, group4, group5, group6, group7, group8, group9]
function grupvalid(arrgru) {
    for (i = 0; i < arrgru.length; i++) {
        for (j = 0; j < arrgru.length; j++) {
            if (i == j) {
                j++;
            }
            if (arrgru[i] == arrgru[j]) {
               console.log(i + " and " + j + " indexex are same in group");
                flag = 1;
                break;
            }
        }
        if (flag == 1) {
            break;
        }
    }
    if (flag == 0) {
        return true;
    }
    else {
        return false;
    }
}
for (const arrgrup in grupsudo) {
    //console.log(grupsudo[arrgrup]);
    var validgrup =grupvalid(grupsudo[arrgrup])
    // if(validgrup===true)
    // {
    //     console.log("sudoku validation success in grup formation");
    // }
    // else{
    //     break;
    // }
}
if(flag==0&&validgrup==true&&validetorcol==true&&validetrow==true){
    console.log("sudoku validate horizontally vertically and in groupgride")
}
else{
    console.log("Not valid");
}

