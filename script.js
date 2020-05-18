// here we have to know when the grid/ boxes are being clicked.
$(document).ready(()=>{

    $(".one").click(() => {
        $(".one").html("<img id='one-img' src='my.jpg' height = '100' width = '100'>");
        $("#one-img").css({"border":"2px red dotted"})
    });
    $(".two").click(() => {
        $(".two").html("<img id='two-img' src='my.jpg' height = '100' width = '100'>");
        $("#two-img").css({"border": "2px blue dotted" })
    });
    $(".three").click(() => {
        $(".three").html("<img id='three-img' src='my.jpg' height = '100' width = '100'>");
        $("#three-img").css({"border": "2px blueviolet dotted"})
    });
    $(".four").click(() => {
                $(".three").html("<img id='three-img' src='my.jpg' height = '100' width = '100'>");
        $("#three-img").css({"border": "2px blueviolet dotted"})
    });
    $(".five").click(() => {
                $(".three").html("<img id='three-img' src='my.jpg' height = '100' width = '100'>");
        $("#three-img").css({"border": "2px blueviolet dotted"})
    });
    $(".six").click(() => {
                $(".three").html("<img id='three-img' src='my.jpg' height = '100' width = '100'>");
        $("#three-img").css({"border": "2px blueviolet dotted"})
    });
    $(".seven").click(() => {
                $(".three").html("<img id='three-img' src='my.jpg' height = '100' width = '100'>");
    });
    $(".eight").click(() => {
        $(".three").html("<img id='three-img' src='my.jpg' height = '100' width = '100'>");
        $("#three-img").css({ "border": "2px blueviolet dotted" })
    });
    $(".nine").click(() => {
                $("#three-img").css({"border": "2px blueviolet dotted"})
    });

});
