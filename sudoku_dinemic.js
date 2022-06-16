let flag = 0;
let array = [
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
function grupvalidator(grp) {
    for (i = 0; i < grp.length; i += 3) {
        for (j = 0; j < grp.length; j += 3) {
            for (k = i; k < i + 3; k++) {
                for (l = j; l < j + 3; l++) {
                    if (k == l) {
                        l++;
                    }
                    if (grp[k] == grp[l]) {
                        console.log(k + " and " + l + " indext element are same");
                        flag = 1;
                        break;
                    }
                }
                if (flag == 1) {
                    break;
                }
            }
            if (flag == 1) {
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
for (const group in array) {
    //  console.log(array[group])
    var validgrup = grupvalidator(array[group]);
    // console.log(validgrup);
}
if (validgrup == true) {
    console.log("sudoku dynemic group run successfully complete");
}
else {
    console.log("Not valid");
}

