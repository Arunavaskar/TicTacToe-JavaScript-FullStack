$(document).ready(() => {
$(".button").click(() => {
  $(".game").css({ display: "block" });
  $(".button").css({ display: "none" });
  $(".winingText").css({ display: "block" });
});

var boxes = Array.from($(".wrapper div"));
const boxesArray = Array.from(boxes);
//console.log(boxesValue[0]);
boxes.forEach(element => {
    console.log(element);
    $(element).click((e)=>{
        const index = boxesArray.indexOf(e.target);
        console.log(index);
        //now we need to change icons based on turns
        
    });
});











});