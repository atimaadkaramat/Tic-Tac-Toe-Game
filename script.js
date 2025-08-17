
index=0;
draw=0;
xWons=0;
zeroWons=0;
preSelected='0';
arr= document.getElementsByClassName("all");
gameEnd=false;

function fun(i)
{
    index++;
    if(preSelected==0)
    {
        arr[i].innerText='x';
        preSelected='x';
    }
    else
    {
        arr[i].innerText='0';
        preSelected='0';
    }

    arr[i].disabled=true;

    if
    (
        (arr[0].innerText=='x' && arr[1].innerText=='x' && arr[2].innerText=='x')
        ||
        (arr[3].innerText=='x' && arr[4].innerText=='x' && arr[5].innerText=='x')
        ||
        (arr[6].innerText=='x' && arr[7].innerText=='x' && arr[8].innerText=='x')

        ||
        (arr[0].innerText=='x' && arr[4].innerText=='x' && arr[8].innerText=='x')
        ||
        (arr[2].innerText=='x' && arr[4].innerText=='x' && arr[6].innerText=='x')

        ||
        (arr[0].innerText=='x' && arr[3].innerText=='x' && arr[6].innerText=='x')
        ||
        (arr[1].innerText=='x' && arr[4].innerText=='x' && arr[7].innerText=='x')
        ||
        (arr[2].innerText=='x' && arr[5].innerText=='x' && arr[8].innerText=='x')
    )
    {
        alert("Player 1 won");
        gameEnd=true;
        xWons++;
    }
    else if
    (
        (arr[0].innerText=='0' && arr[1].innerText=='0' && arr[2].innerText=='0')
        ||
        (arr[3].innerText=='0' && arr[4].innerText=='0' && arr[5].innerText=='0')
        ||
        (arr[6].innerText=='0' && arr[7].innerText=='0' && arr[8].innerText=='0')

        ||
        (arr[0].innerText=='0' && arr[4].innerText=='0' && arr[8].innerText=='0')
        ||
        (arr[2].innerText=='0' && arr[4].innerText=='0' && arr[6].innerText=='0')

        ||
        (arr[0].innerText=='0' && arr[3].innerText=='0' && arr[6].innerText=='0')
        ||
        (arr[1].innerText=='0' && arr[4].innerText=='0' && arr[7].innerText=='0')
        ||
        (arr[2].innerText=='0' && arr[5].innerText=='0' && arr[8].innerText=='0')
    )
    {
        alert("Player 2 won");
        gameEnd=true;
        zeroWons++;
    }
    else if(index==9)
    {
        alert("Draw");
        draw++;
        gameEnd=true;
    }

    if(gameEnd==true)
    {
        for(i=0; i<9; i++)
        {
            arr[i].disabled=true;
        }
        document.getElementById("Player1").value = xWons;
        document.getElementById("Player2").value = zeroWons;
        document.getElementById("Draw").value = draw;
        
        index=0;
        gameEnd=false
    }

    

}



function reset()
{
    for(i=0; i<9; i++)
    {
        arr[i].disabled=false;
        arr[i].innerText="";
    }
    preSelected='0';
}

