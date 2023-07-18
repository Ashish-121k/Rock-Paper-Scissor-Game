let score = JSON.parse(localStorage.getItem('score'))||       // get the value in form of object.
{
    Wins:0,
    Loses:0,
    Ties:0
};

        /*
        if(!score)    // score===null
        {
        score ={
                 Wins :0,
                 Loses:0,
                 Ties:0
                 };
        }
        */

function pickcomputermove()
{
    let randomnumber=Math.random();   //math.random() takes random number b/w 0&1

    let computermove='';

    if(randomnumber>=0 && randomnumber<=1/3)
    {
        computermove='Rock';
    }
    else if(randomnumber>1/3 && randomnumber<=2/3)
    {
        computermove='Paper';
    }
    else if(randomnumber>2/3 && randomnumber<=1)
    {
         computermove='Scissors';
    }

     return computermove;

}

function playgame(playerMove)
{
    const computermove = pickcomputermove();

    let result ='';
    if(playerMove==='Scissors')
    {
        if(computermove==='Rock')
        {
            result ='You Lose';
        }
        else if(computermove==='Paper')
        {
            result ='You Win';
        }
        else if(computermove==='Scissors')
        {
            result ='Tie';
        }
    }
    else if(playerMove==='Paper')
    {
        if(computermove==='Rock')
        {
            result ='You Win';
        }
        else if(computermove==='Paper')
        {
            result ='Tie';
        }
        else if(computermove==='Scissors')
        {
            result ='You Lose';
        }
    }
       else if(playerMove==='Rock')
    {
        if(computermove==='Rock')
        {
            result ='Tie';
        }
        else if(computermove==='Paper')
        {
            result ='You Lose';
        }
        else if(computermove==='Scissors')
        {
            result ='You Win';
        }
    }

    if(result ==='You Win')
    {
        score.Wins +=1;
    }
    else if(result ==='You Lose')
    {
        score.Loses +=1;
    }
     else if(result ==='Tie')
    {
        score.Ties +=1;
    }

    //local storage support string only.

    localStorage.setItem('score',JSON.stringify(score));     //put the value(in string form) in a variable or object named score.

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = ` You <img src="images/${playerMove}-emoji.png" class = "move-icon">  & <img src="images/${computermove}-emoji.png" class = "move-icon">Computer` ;

    updateScoreElement();



}
function updateScoreElement()
{
    document.querySelector('.js-score')
    .innerHTML = `Wins : ${score.Wins}   &nbsp&nbsp Loses :${score.Loses}   &nbsp&nbsp Ties :${score.Ties}.`
}
