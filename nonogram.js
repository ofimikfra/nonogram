const test5x5 = [
    [0,0,1,0,1],
    [0,0,1,0,0],
    [0,1,1,1,1],
    [0,0,1,0,0],
    [0,0,1,0,1]
];

// split nonogram into columns
function splitColumns(ngm) {
    let columns = []

    for (let col = 0; col < ngm.length; col++) {
        let newcol = [];
        for (let row = 0; row < ngm.length; row++) {
            newcol.push(ngm[row][col]);
        }
        columns.push(newcol);
    }

    return columns;
}

function generateClues(ngm) {
    let clues = []
    
    ngm.forEach(row => {
        let newRowClues = []
        let newClue = 0;

        row.forEach(i => {
            if (i == 1) newClue += 1;
            else if (i == 0 && newClue == 0) return;
            else if (i == 0 && newClue != 0) {
                newRowClues.push(newClue);
                newClue = 0;
            } 
            else console.log("Error")
        })

        if (newClue != 0) newRowClues.push(newClue);
        if (newRowClues.length == 0) newRowClues.push(0);
        clues.push(newRowClues);
    });

    return clues
}


const testclues = generateClues(splitColumns(test5x5));

testclues.forEach(i => {
    console.log(i)
})
