let isGame = confirm('Do you want to play a game?');
let rangeNum = 9;
let prize = 100;
let totalPrize = 0;


function rulet (isGame, rangeNum, prize, totalPrize) {
    console.log(isGame);
    if(isGame) {
        let num = Math.floor(Math.random() * rangeNum);
        console.log(num);
        let possPrize = prize;
        for(let i = 3; i >= 1; i--) {
            let userNum = prompt(`Choose a roulette pocket number from 0 to ${rangeNum - 1}\nAttempts left: ${i}\nTotal prize: ${totalPrize}$\nPossible prize on current attempt: ${possPrize}$`);
            let attemNum = i;
            if (i == 1 && num != userNum) {
                alert(`Thank you for your participation. Your prize is: ${totalPrize}`);
                isGame = confirm('Do you want to play again?');
                if (isGame) {
                    totalPrize = 0;
                    prize = 100;
                    rangeNum = 9;
                    rulet(isGame, rangeNum, prize, totalPrize);
                }else {
                    alert('You did not become a billionaire, but can.');
                }
            }else if (num != userNum) {
                possPrize /= 2;
            }else if (num == userNum) {
                switch (attemNum) {
                    case 3: {
                        alert(`Congratulations, you won. Your prize is : ${prize} $`);
                        totalPrize += prize;
                        break;
                        }
                    case 2: {
                        let secAtt = prize / 2;
                        alert(`Congratulations, you won. Your prize is : ${secAtt} $`);
                        totalPrize += secAtt;
                        break; 
                        }
                    case 1: {
                        let thirdAtt = prize / 4;
                        alert(`Congratulations, you won. Your prize is : ${thirdAtt} $`);
                        totalPrize += thirdAtt;
                        break;
                        }
                }
                isGame = confirm('Do you want to continue?');
                if (isGame) {
                    rangeNum += 4;
                    prize *= 2;
                    rulet(isGame, rangeNum, prize, totalPrize);
                }else {
                    alert(`Thank you for your participation. Your prize is: ${prize}`);
                }
                break;
            }
        }
    }else {
        alert('You did not become a billionaire, but can.');
    }
}

rulet(isGame, rangeNum, prize, totalPrize);

