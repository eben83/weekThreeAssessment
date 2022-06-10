let compScore = 0
let playerScore = 0
let drawGame = 0

const computerPlay = function() {
    const random = Math.floor(Math.random() * 3)

    if(random === 0) {
        return "Rock"
    }
    if(random === 1) {
        return "Paper"
    }
    if(random === 2) {
        return "Scissors"
    }
}

const singleRound = function(a) {
    const compPlay = computerPlay()
    
        switch(a.toLowerCase()) {
            case "rock":
                if(compPlay == "Scissors"){
                    playerScore ++
                    console.log(`You win!! ${a.toUpperCase()} beats ${compPlay}`)
                }
                else if(compPlay == "Paper") {
                    compScore ++
                    console.log(`You Loose! ${compPlay} beats ${a.toUpperCase()}`)
                }
                else {
                    drawGame ++
                    console.log(`Draw, you chose ${a.toUpperCase()} and apponent chose ${compPlay}`)
                }
                return true
                break
            case "scissors":
                if(compPlay == "Paper"){
                    playerScore ++
                    console.log(`You Winn!! ${a.toUpperCase()} beats ${compPlay}`)
                }
                else if(compPlay === "Rock") {
                    compScore ++
                    console.log(`You Loose! ${compPlay} beats ${a.toUpperCase()}`)
                }
                else {
                    drawGame ++
                    console.log(`Draw, you chose ${a.toUpperCase()} and apponent chose ${compPlay}`)
                }
                return true
                break;
            case "paper":
                if(compPlay === "Rock"){
                    playerScore ++
                    console.log(`You Win!! ${a.toUpperCase()} beats ${compPlay}` )
                }
                else if(compPlay === "Scissors") {
                    compScore ++
                    console.log(`You Loose! ${compPlay} beats ${a.toUpperCase()}`)
                }
                else {
                    drawGame ++
                    console.log(`Draw, you chose ${a.toUpperCase()} and apponent chose ${compPlay}`)
                }
                return true
                break;
            default:
                break
    }
}

const gamePlay = function() {
    
    compScore = 0
    playerScore = 0
    drawGame = 0

    
        for (let i = 0; i < 5; i++) {
            const round = i + 1
            const selection = prompt(
                `Make your selection: 
            'Rock' || 'Paper' || 'Scissors' 
            ROUND ${round}
            Computer Score: ${compScore}
            Your Score: ${playerScore}
            Draw Games: ${drawGame}`,
            )
            // singleRound(selection)
            if(singleRound(selection)) {
                console.log('round played')
            } else {
                console.log('BAD')
                i--
            }
        }
        

    if(compScore > playerScore) {
        alert(`You loose ${compScore} to ${playerScore} - Better luck next time || number of draw points ${drawGame}`)
    }
    if(compScore < playerScore) {
        alert(`Winner, Winner, Chicken Dinner!! ${playerScore} to ${compScore} || number of draw points ${drawGame}`)
    }

    
}
