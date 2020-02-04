var gamePlaying;
var currentPlayer =1;

init();

$( document ).ready(function() {
    createblock();
});

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;

        //2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'assest/dice-' + dice + '.png';


        //3. Move the playes in blocks
        var player = document.querySelector('#player_'+currentPlayer);
        var currentPos = parseInt(player.getAttribute("data-id"));
        currentPos += dice;
        if(currentPos >= 100){
             currentPos = 100;
             
        }
        player.setAttribute("data-id",currentPos);
        var parent = document.getElementById(currentPos);
        parent.appendChild(player);

        if(currentPos >= 100){
            // setTimeout(function(){ alert("winner!",currentPlayer); }, 200);
            document.querySelector('.fas').style.display = 'none';
            $('#winner').append('<span>Winner is '+currentPlayer+' Player</span>');
        }

        var select = document.getElementById("sel1");
        var strUser = select.options[select.selectedIndex].value;

        currentPlayer++;
        if(currentPlayer > strUser){
            currentPlayer = 1;
        }

        
    }    
});



//For Snak-lader block creation
function createblock(){
    
    for(var j=10; j>0; j--){
    for(var i=0; i<10; i++){
        var count;
        if(j%2==0){
            count = parseInt((j * 10) -i);
        }
        else{
            count =parseInt((j * 10) -(9-i));
        }
        $('#row').append('<div class="block" id='+count+'><span>'+count+'</span></div>');
        
    }
    }
};



//show roll Button Function
document.getElementById("player-sele-btn").onclick = function() {btnDisplay()};

function btnDisplay() {
  document.getElementById("btn").style.display = 'block';
}


function init() {
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';
    document.getElementById("btn").style.display = 'none';
}