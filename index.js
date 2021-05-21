var buttonsColors=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var toggle=false;
var level=0;
function nextsequence(){
    userClickedPattern=[];
    level++;
    $("#level-title").text("Level "+(level));

    var a=Math.floor(Math.random()*4);
    var randomChosenColor=buttonsColors[a];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    var s1=new Audio('sounds/'+randomChosenColor+'.mp3');
    s1.play();
}



    
$(".btn").click(function(e)
{
    var a=e.target.id;
    userClickedPattern.push(a);
    var sound1=new Audio('sounds/'+a+'.mp3');
    sound1.play();
    animatePress(a);
    checkAnswer(userClickedPattern.length-1);
}
);
    

function animatePress(currentColor){
    $('#'+currentColor).addClass('pressed');
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
      }, 100);
    
    }
$(document).keypress(function() {
    if (!toggle) {
          $("#level-title").text("Level " + level);
          nextsequence();
          toggle = true;
    }
}
);

function checkAnswer(a){
    if(userClickedPattern[a] === gamePattern[a]){
           if(userClickedPattern.length === gamePattern.length) {
            setTimeout(function(){
                nextsequence();
              }, 1000);
           }
    } else{
        var sound1=new Audio('sounds/wrong.mp3');
        sound1.play();
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
        
    }
}
function startOver(){
    level=0;
    toggle=false;
    gamePattern=[]
}