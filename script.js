//initialise currentPlayer
let currentPlayer = 'X';

//get all cells
let allCells = $("#table td");

/*adding event listener for all cells */
function addEvent() {
    currentPlayer = 'X'
    $("#table td").click(function () {
        if (currentPlayer == 'X' && $(this).text() === '') {
            $(this).css("color", 'rgb(0,0,0)')
            $(this).text("X")
            winnerCheck()
            currentPlayer = 'O'
        }
        else if (currentPlayer == 'O' && $(this).text() === '') {
            $(this).css("color", 'rgb(232, 237, 223)')
            $(this).text("O")
            winnerCheck()
            currentPlayer = 'X'
        }
    })
}

addEvent();


/* Winner Selection */

let table = $("table tr");

function winnerCheck() {
    if (horizontalCheck() || verticalCheck() || diagonalCheck()) {
        $("#result").text("\"" + currentPlayer + "\"" + " WINNER")
        $("#table td").unbind()

    }
    else if (drawCheck()) {
        $("#result").text("DRAW!!!")
        //Changing all cell colors to red
        for (let i = 0; i <= 8; i++) {
            allCells.eq(i).css("color", "rgb(223, 5, 1)")

        }
        $("#table td").unbind()
    }
}


//Horizontal Check
function horizontalCheck() {
    for (let i = 0; i <= 2; i++) {
        if (table.eq(i).find("td").eq(0).text() !== '' &&
            table.eq(i).find("td").eq(0).text() === table.eq(i).find("td").eq(1).text() &&
            table.eq(i).find("td").eq(0).text() === table.eq(i).find("td").eq(2).text()) {
            table.eq(i).find("td").eq(0).css("color", "rgb(175, 252, 65)")
            table.eq(i).find("td").eq(1).css("color", "rgb(175, 252, 65)")
            table.eq(i).find("td").eq(2).css("color", "rgb(175, 252, 65)")
            return true
        }

    }
    return false
}


//Vertical Check
function verticalCheck() {
    for (let i = 0; i <= 2; i++) {
        if (table.eq(0).find("td").eq(i).text() !== '' &&
            table.eq(0).find("td").eq(i).text() === table.eq(1).find("td").eq(i).text() &&
            table.eq(0).find("td").eq(i).text() === table.eq(2).find("td").eq(i).text()) {
            table.eq(0).find("td").eq(i).css("color", "rgb(0, 255, 0)")
            table.eq(1).find("td").eq(i).css("color", "rgb(0, 255, 0)")
            table.eq(2).find("td").eq(i).css("color", "rgb(0, 255, 0)")
            return true
        }

    }
    return false
}


// Diagonal Check
function diagonalCheck() {
    if (table.eq(1).find("td").eq(1).text() !== '' &&
        table.eq(1).find("td").eq(1).text() === table.eq(2).find("td").eq(2).text() &&
        table.eq(1).find("td").eq(1).text() === table.eq(0).find("td").eq(0).text()) {
        table.eq(0).find("td").eq(0).css("color", "rgb(0,255,0)")
        table.eq(1).find("td").eq(1).css("color", "rgb(0,255,0)")
        table.eq(2).find("td").eq(2).css("color", "rgb(0,255,0)")
        return true
    }

    else if (table.eq(1).find("td").eq(1).text() !== '' &&
        table.eq(1).find("td").eq(1).text() === table.eq(0).find("td").eq(2).text() &&
        table.eq(1).find("td").eq(1).text() === table.eq(2).find("td").eq(0).text()) {
        table.eq(1).find("td").eq(1).css("color", "rgb(0,255,0)")
        table.eq(0).find("td").eq(2).css("color", "rgb(0,255,0)")
        table.eq(2).find("td").eq(0).css("color", "rgb(0,255,0)")
        return true
    }
    return false

}

//Draw check
function drawCheck() {
    if ($("#table td").text().length === 9) {
        return true
    }
}

/* restart button */
$("#b").click(function () {
    location.reload(true);

}
)







