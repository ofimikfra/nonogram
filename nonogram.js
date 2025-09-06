const test5x5 = [
    [1,0,1,0,1],
    [0,0,1,0,0],
    [1,1,1,1,1],
    [0,0,1,0,0],
    [1,0,1,0,1]
];

// split nonogram into columns
function splitColumns(ngm) {
    let columns = []

    for (let col = 0; col < ngm.length; col++) {
        let newcol = [];
        for (let row = 0; row < ngm.length; row++) {
            newcol.push(ngm[col][row]);
        }
        columns.push(newcol);
    }

    columns.forEach(i => {
        console.log(i);
    });
    
}

