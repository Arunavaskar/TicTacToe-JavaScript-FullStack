// here we have to know when the grid/ boxes are being clicked.
$(document).ready(()=>{

    $(".one").click(() => {
        $(".one").html("<img id='one-img' src='my.jpg' height = '100' width = '100'>");
        $("#one-img").css({"border":"2px red dotted"})
    });

    $(".two").click(() => {
        $(".two").html("<img id='two-img' src='my.jpg' height = '100' width = '100'>");
        $("#two-img").css({"border": "2px blue dotted"})
    });

    $(".three").click(() => {
        $(".three").html("<img id='three-img' src='my.jpg' height = '100' width = '100'>");
        $("#three-img").css({"border": "2px blueviolet dotted"})
    });

    $(".four").click(() => {
        $(".four").html("<img id='four-img' src='my.jpg' height = '100' width = '100'>");
        $("#four-img").css({"border": "2px blueviolet dotted"})
    });

    $(".five").click(() => {
        $(".five").html("<img id='five-img' src='my.jpg' height = '100' width = '100'>");
        $("#five-img").css({"border": "2px blueviolet dotted"})
    });

    $(".six").click(() => {
        $(".six").html("<img id='six-img' src='my.jpg' height = '100' width = '100'>");
        $("#six-img").css({"border": "2px blueviolet dotted"})
    });

    $(".seven").click(() => {
        $(".seven").html("<img id='seven-img' src='my.jpg' height = '100' width = '100'>");
        $("#seven-img").css({ "border": "2px blueviolet dotted" })
    });

    $(".eight").click(() => {
        $(".eight").html("<img id='eight-img' src='my.jpg' height = '100' width = '100'>");
        $("#eight-img").css({ "border": "2px blueviolet dotted" })
    });

    $(".nine").click(() => {
        $(".nine").html("<img id='nine-img' src='my.jpg' height = '100' width = '100'>");
        $("#nine-img").css({"border": "2px blueviolet dotted"})
    });

});
