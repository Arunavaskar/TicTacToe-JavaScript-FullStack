// here we have to know when the grid/ boxes are being clicked.
$(document).ready(() => {

    // button to start the game/unhide the game
    $(".button").click(() => {
        $(".game").css({ "display": "block" });
        $(".button").css({ "display": "none" });
        $(".winingText").css({ display: "block" });
    })
    // button to reset the game/
    $(".button2").click(() => {
        $(".wrapper div").val("");
        $(".wrapper div").css({ "background-image": "", "background-size": "196px 194px" });
        $(".turn-x").css({ "background-color": "#C1C1C1" });
        $(".turn-o").css({ "background-color": "white" });
        $(".winingText").css({ display: "none" });
        $(".winingText").html();
    })
        var playerXX = "player X";
        var playerOO = "player O";


    // function to add the CROSS image while clicked once
    function cssCross(clss) {
        $(clss).css({ "background-image": "url('media/cross.png')", "background-size": "196px 194px" });
    }
    // function to add the round image while clicked once
    function cssRound(clss) {
        $(clss).css({ "background-image": "url('media/round.png')", "background-size": "196px 197px" });
    }

    // player data
    var player_Marks_obj = {"playerX_Marks": [], "playerY_Marks": []};
    var player_Marks_val = Object.values(player_Marks_obj);
    var playerX = player_Marks_val[0];
    var playerO = player_Marks_val[1];

    // wining model
    var winModel_obj =
    {
        "LeftToSide":[[1,2,3],[4,5,6],[7,8,9]]
        , 
        "TopToBottom":[[1,4,7],[2,5,8],[3,6,9]]
        , 
        "Corners":[[1,5,9],[3,5,7]]
    };

    var winModel_val = Object.values(winModel_obj);
    function WhoWon(player, playerName, winModel_val) {
        for (let index = 0; index < winModel_val.length; index++) {
            let element = winModel_val[index];
            for (let index2 = 0; index2 < element.length; index2++) {
                var element2 = element[index2];
                var included = element2.filter((value) => player.includes(value));
                if (JSON.stringify(included) == JSON.stringify(element2)){
                    var write = playerName + " won";
                    console.log(write + JSON.stringify(included));
                    $(".winingText").css({"display":"block"});
                    $(".winingText").html(playerName + " won! tap or click on the screen to continue!");
                    // $(".wrapper div").val("");
                    // $(".wrapper div").css({ "background-image": "", "background-size": "196px 194px" });
                    // $(".turn-x").css({ "background-color": "#C1C1C1" });
                    // $(".turn-o").css({ "background-color": "white" });
                    // $(".game").css({ display: "none" });
                    // $(".box").off("click");
                    
                }
            }
        }
    }

///////////////////////////////////////////////////////////////////////////////
    // by default turn will be x, means first turn will always belong to x
    var turn = 'x';

    // one
    const one = "#one";
    $(one).click(() => {
        if (turn == 'x') {
            cssCross(one);
            turn = 'o';
            $(".turn-x").css({ "background-color": "white" });
            $(".turn-o").css({ "background-color": "#C1C1C1" });
            player_Marks_obj["playerX_Marks"].push(1);

                    if (playerX.length > 2) {
                      WhoWon(playerX, playerXX, winModel_val);
                    }
                    if (playerO.length > 2) {
                      WhoWon(playerO, playerOO, winModel_val);
                    }
        }
        else if (turn == 'o') {
            cssRound(one);
            turn = 'x';
            $(".turn-x").css({ "background-color": "#C1C1C1" });
            $(".turn-o").css({ "background-color": "white" });
            player_Marks_obj["playerY_Marks"].push(1);
                    if (playerX.length > 2) {
                      WhoWon(playerX, playerXX, winModel_val);
                    }
                    if (playerO.length > 2) {
                      WhoWon(playerO, playerOO, winModel_val);
                    }
        }
        // MarkerChanger_TurnIndicator(turn);
    });

    // two
    const two = "#two";
    $(two).click(() => {
        if (turn == 'x') {
            cssCross(two);
            turn = 'o';
            $(".turn-x").css({ "background-color": "white" });
            $(".turn-o").css({ "background-color": "#C1C1C1" });
            player_Marks_obj["playerX_Marks"].push(2);
                    if (playerX.length > 2) {
                      WhoWon(playerX, playerXX, winModel_val);
                    }
                    if (playerO.length > 2) {
                      WhoWon(playerO, playerOO, winModel_val);
                    }
        }
        else if (turn == 'o') {
            cssRound(two);
            turn = 'x';
            $(".turn-x").css({ "background-color": "#C1C1C1" });
            $(".turn-o").css({ "background-color": "white" });
            player_Marks_obj["playerY_Marks"].push(2);
                    if (playerX.length > 2) {
                      WhoWon(playerX, playerXX, winModel_val);
                    }
                    if (playerO.length > 2) {
                      WhoWon(playerO, playerOO, winModel_val);
                    }
        }
    });

    // three
    const three = "#three";
    $(three).click(() => {
        if (turn == 'x') {
            cssCross(three);
            turn = 'o';
            $(".turn-x").css({ "background-color": "white" });
            $(".turn-o").css({ "background-color": "#C1C1C1" });
            player_Marks_obj["playerX_Marks"].push(3);
                    if (playerX.length > 2) {
                      WhoWon(playerX, playerXX, winModel_val);
                    }
                    if (playerO.length > 2) {
                      WhoWon(playerO, playerOO, winModel_val);
                    }
        }
        else if (turn == 'o') {
            cssRound(three);
            turn = 'x';
            $(".turn-x").css({ "background-color": "#C1C1C1" });
            $(".turn-o").css({ "background-color": "white" });
            player_Marks_obj["playerY_Marks"].push(3);
                    if (playerX.length > 2) {
                      WhoWon(playerX, playerXX, winModel_val);
                    }
                    if (playerO.length > 2) {
                      WhoWon(playerO, playerOO, winModel_val);
                    }
        }
    });

    // four
    const four = "#four";
    $(four).click(() => {
        if (turn == 'x') {
            cssCross(four);
            turn = 'o';
            $(".turn-x").css({ "background-color": "white" });
            $(".turn-o").css({ "background-color": "#C1C1C1" });
            player_Marks_obj["playerX_Marks"].push(4);
                    if (playerX.length > 2) {
                      WhoWon(playerX, playerXX, winModel_val);
                    }
                    if (playerO.length > 2) {
                      WhoWon(playerO, playerOO, winModel_val);
                    }
        }
        else if (turn == 'o') {
            cssRound(four);
            turn = 'x';
            $(".turn-x").css({ "background-color": "#C1C1C1" });
            $(".turn-o").css({ "background-color": "white" });
            player_Marks_obj["playerY_Marks"].push(4);
                    if (playerX.length > 2) {
                      WhoWon(playerX, playerXX, winModel_val);
                    }
                    if (playerO.length > 2) {
                      WhoWon(playerO, playerOO, winModel_val);
                    }
        }
    });

    // five
    const five = "#five";
    $(five).click(() => {
        if (turn == 'x') {
            cssCross(five);
            turn = 'o';
            $(".turn-x").css({ "background-color": "white" });
            $(".turn-o").css({ "background-color": "#C1C1C1" });
            player_Marks_obj["playerX_Marks"].push(5);
                    if (playerX.length > 2) {
                      WhoWon(playerX, playerXX, winModel_val);
                    }
                    if (playerO.length > 2) {
                      WhoWon(playerO, playerOO, winModel_val);
                    }
        }
        else if (turn == 'o') {
            cssRound(five);
            turn = 'x';
            $(".turn-x").css({ "background-color": "#C1C1C1" });
            $(".turn-o").css({ "background-color": "white" });
            player_Marks_obj["playerY_Marks"].push(5);
                    if (playerX.length > 2) {
                      WhoWon(playerX, playerXX, winModel_val);
                    }
                    if (playerO.length > 2) {
                      WhoWon(playerO, playerOO, winModel_val);
                    }
        }
    });

    // six
    const six = "#six";
    $(six).click(() => {
        if (turn == 'x') {
            cssCross(six);
            turn = 'o';
            $(".turn-x").css({ "background-color": "white" });
            $(".turn-o").css({ "background-color": "#C1C1C1" });
            player_Marks_obj["playerX_Marks"].push(6);
                    if (playerX.length > 2) {
                      WhoWon(playerX, playerXX, winModel_val);
                    }
                    if (playerO.length > 2) {
                      WhoWon(playerO, playerOO, winModel_val);
                    }
        }
        else if (turn == 'o') {
            cssRound(six);
            turn = 'x';
            $(".turn-x").css({ "background-color": "#C1C1C1" });
            $(".turn-o").css({ "background-color": "white" });
            player_Marks_obj["playerY_Marks"].push(6);
                    if (playerX.length > 2) {
                      WhoWon(playerX, playerXX, winModel_val);
                    }
                    if (playerO.length > 2) {
                      WhoWon(playerO, playerOO, winModel_val);
                    }
        }
    });

    // seven
    const seven = "#seven";
    $(seven).click(() => {
        if (turn == 'x') {
            cssCross(seven);
            turn = 'o';
            $(".turn-x").css({ "background-color": "white" });
            $(".turn-o").css({ "background-color": "#C1C1C1" });
            player_Marks_obj["playerX_Marks"].push(7);
                    if (playerX.length > 2) {
                      WhoWon(playerX, playerXX, winModel_val);
                    }
                    if (playerO.length > 2) {
                      WhoWon(playerO, playerOO, winModel_val);
                    }
        }
        else if (turn == 'o') {
            cssRound(seven);
            turn = 'x';
            $(".turn-x").css({ "background-color": "#C1C1C1" });
            $(".turn-o").css({ "background-color": "white" });
            player_Marks_obj["playerY_Marks"].push(7);
                    if (playerX.length > 2) {
                      WhoWon(playerX, playerXX, winModel_val);
                    }
                    if (playerO.length > 2) {
                      WhoWon(playerO, playerOO, winModel_val);
                    }
        }
    });

    // eight
    const eight = "#eight";
    $(eight).click(() => {
        if (turn == 'x') {
            cssCross(eight);
            turn = 'o';
            $(".turn-x").css({ "background-color": "white" });
            $(".turn-o").css({ "background-color": "#C1C1C1" });
            player_Marks_obj["playerX_Marks"].push(8);
                    if (playerX.length > 2) {
                      WhoWon(playerX, playerXX, winModel_val);
                    }
                    if (playerO.length > 2) {
                      WhoWon(playerO, playerOO, winModel_val);
                    }
        }
        else if (turn == 'o') {
            cssRound(eight);
            turn = 'x';
            $(".turn-x").css({ "background-color": "#C1C1C1" });
            $(".turn-o").css({ "background-color": "white" });
            player_Marks_obj["playerY_Marks"].push(8);
                    if (playerX.length > 2) {
                      WhoWon(playerX, playerXX, winModel_val);
                    }
                    if (playerO.length > 2) {
                      WhoWon(playerO, playerOO, winModel_val);
                    }
        }
    });

    // nine
    const nine = "#nine";
    $(nine).click(() => {
        if (turn == 'x') {
            cssCross(nine);
            turn = 'o';
            $(".turn-x").css({ "background-color": "white" });
            $(".turn-o").css({ "background-color": "#C1C1C1" });
            player_Marks_obj["playerX_Marks"].push(9);
                    if (playerX.length > 2) {
                      WhoWon(playerX, playerXX, winModel_val);
                    }
                    if (playerO.length > 2) {
                      WhoWon(playerO, playerOO, winModel_val);
                    }
        }
        else if (turn == 'o') {
            cssRound(nine);
            turn = 'x';
            $(".turn-x").css({ "background-color": "#C1C1C1" });
            $(".turn-o").css({ "background-color": "white" });
            player_Marks_obj["playerY_Marks"].push(9);
                    if (playerX.length > 2) {
                      WhoWon(playerX, playerXX, winModel_val);
                    }
                    if (playerO.length > 2) {
                      WhoWon(playerO, playerOO, winModel_val);
                    }
        }
    });







    /*
    rules:-
    X will always be the first player
    O will always be the second player
    */


    //    var boxes = $(".box");
    //    for (let index = 0; index < boxes.length; index++) {
    //        const box = boxes[index];
    //    }



    // $(".wrapper").click(()=>{
    //     alert("clicked");
    // })




});