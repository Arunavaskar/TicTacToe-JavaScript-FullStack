// here we have to know when the grid/ boxes are being clicked.
$(document).ready(()=>{

    // function to add the CROSS image while clicked once
    function cssCross(clss) {
        $(clss).css({ "background-image": "url('media/cross.png')", "background-size": "196px 194px" });
    }
    // function to add the round image while clicked once
    function cssRound(clss) {
        $(clss).css({ "background-image": "url('media/round.png')", "background-size": "196px 197px" });
    }


    /*
    *winModel*
    
    /////////////
    1.2.3    left
    4.5.6    to
    7.8.9    right
    ///////////////
    123      top
    ...
    456      to
    ...
    789      bottom
    ///////////////
    1.5.9    cross
    3.5.7    cross
    //////////////
     */


    // by default turn will be x, means first turn will always belong to x
    var turn = 'x';

    // function MarkerChanger_TurnIndicator(turn) {
    //     if (turn == 'x') {
    //         cssCross(one);

    //         $(".turn-x").css({ "background-color": "white" });
    //         $(".turn-o").css({ "background-color": "#C1C1C1" });
    //         return turn = 'o';            
    //     }
    //     else if (turn == 'o') {
    //         cssRound(one);
    //         $(".turn-x").css({ "background-color": "#C1C1C1" });
    //         $(".turn-o").css({ "background-color": "white" });
    //         return turn = 'x';
    //     }
    //     return turn;
    // }

    


    // one
    const one = "#one";
    $(one).click(() => {
        if (turn == 'x') {
            cssCross(one);
            turn = 'o';
            $(".turn-x").css({ "background-color": "white" });
            $(".turn-o").css({ "background-color": "#C1C1C1" });
        }
        else if(turn == 'o'){
            cssRound(one);
            turn = 'x';
            $(".turn-x").css({ "background-color": "#C1C1C1" });
            $(".turn-o").css({ "background-color": "white" });
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
        }
        else if (turn == 'o') {
            cssRound(two);
            turn = 'x';
            $(".turn-x").css({ "background-color": "#C1C1C1" });
            $(".turn-o").css({ "background-color": "white" });
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
        }
        else if (turn == 'o') {
            cssRound(three);
            turn = 'x';
            $(".turn-x").css({ "background-color": "#C1C1C1" });
            $(".turn-o").css({ "background-color": "white" });
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
        }
        else if (turn == 'o') {
            cssRound(four);
            turn = 'x';
            $(".turn-x").css({ "background-color": "#C1C1C1" });
            $(".turn-o").css({ "background-color": "white" });
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
        }
        else if (turn == 'o') {
            cssRound(five);
            turn = 'x';
            $(".turn-x").css({ "background-color": "#C1C1C1" });
            $(".turn-o").css({ "background-color": "white" });
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
        }
        else if (turn == 'o') {
            cssRound(six);
            turn = 'x';
            $(".turn-x").css({ "background-color": "#C1C1C1" });
            $(".turn-o").css({ "background-color": "white" });
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
        }
        else if (turn == 'o') {
            cssRound(seven);
            turn = 'x';
            $(".turn-x").css({ "background-color": "#C1C1C1" });
            $(".turn-o").css({ "background-color": "white" });
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
        }
        else if (turn == 'o') {
            cssRound(eight);
            turn = 'x';
            $(".turn-x").css({ "background-color": "#C1C1C1" });
            $(".turn-o").css({ "background-color": "white" });
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
        }
        else if (turn == 'o') {
            cssRound(nine);
            turn = 'x';
            $(".turn-x").css({ "background-color": "#C1C1C1" });
            $(".turn-o").css({ "background-color": "white" });
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