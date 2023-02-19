const randomDataDeyer=()=>{
    return Math.round(Math.random()*(10-2)+2);
}
const randomCompScore=()=>{
    return Math.round(Math.random()*(120-70)+70);
}
const btn1=document.querySelectorAll('.btn1');
for (const i of btn1) {
    i.dataset.deyer=randomDataDeyer();
}
let myScore=0;
let wins_count=0;
let loss_count=0;
$('#comp_score').html(randomCompScore())
$('#my_score').html(myScore)
$('#wins').html(wins_count)
$('#losses').html(loss_count)
$('.btn1').on('click',function(){
    myScore+=parseInt(this.dataset.deyer);
    $('#my_score').html(myScore)
    if(parseInt($('#comp_score').html())===parseInt($('#my_score').html())){
    wins_count++;
    $('#comp_score').html(randomCompScore())
    myScore=0;
    $('#my_score').html(myScore)
    }
    else if(parseInt($('#comp_score').html())<parseInt($('#my_score').html())){
       loss_count++;
    $('#comp_score').html(randomCompScore())
    myScore=0;
    $('#my_score').html(myScore)
    }
    $('#wins').html(wins_count)
    $('#losses').html(loss_count)
})