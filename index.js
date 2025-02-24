
let col = [1,2,3,4,5,6]
let combos=[]
let firstGuess = [1, 1, 2, 2]
let nextGuess = []
let simGuesses = []
let average =[]
let averageCalc = 0
let simGuess = []
let simAnswer = []
let minIndex = 0


for(let x of col){
    for(let y of col){
        for(let z of col) {
            for(let h of col) {
                combos.push([x, y, z, h])

            }
        }
    }
}





let guesses = []; 


function eliminate(num1, num2, num3, num4, black, white) {
     let guess = [num1, num2, num3, num4]
    combos = combos.filter(subArray => {
        let blackCount = 0
        let whiteCount = 0
        let guessCopy = [...guess]
        let subArrayCopy = [...subArray]
        
        for(let i = 0; i<4; i++) {
            if(subArrayCopy[i] == guessCopy[i]) {
                blackCount++
                guessCopy[i] = null
                subArrayCopy[i] = null
            }
        }
         for(let i = 0; i<4; i++) {
            if(guessCopy[i] !== null && subArrayCopy.includes(guessCopy[i])) {
                whiteCount++
                subArrayCopy[subArrayCopy.indexOf(guessCopy[i])] = null
                guessCopy[i] = null
            }
         }
         return blackCount === black && whiteCount === white
        
       
    })
     combos = combos.filter(subArray => !guesses.some(guess => JSON.stringify(guess) === JSON.strinify(subArray)))
         
         return combos
        
    
}

function simEliminate(num1, num2, num3, num4, black, white) {
    let guess2 = [num1, num2, num3, num4];
   
   
    
    simCombos = simCombos.filter(subArray => {
        let blackCount2 = 0;
        let whiteCount2 = 0;
        let guessCopy2 = [...guess2];
        let subArrayCopy2 = [...subArray]; 
        
       
        for (let i = 0; i < 4; i++) {
            if (subArrayCopy2[i] === guessCopy2[i]) {
                blackCount2++;
                guessCopy2[i] = null;
                subArrayCopy2[i] = null; 
            }
        }

        
        for (let i = 0; i < 4; i++) {
            if (guessCopy2[i] !== null && subArrayCopy2.includes(guessCopy2[i])) {
                whiteCount2++;
                subArrayCopy2[subArrayCopy2.indexOf(guessCopy2[i])] = null; 
                guessCopy2[i] = null;
            }
        }

       
        return blackCount2 === black && whiteCount2 === white;
    });

   
    simCombos = simCombos.filter(subArray => {
        return !simGuesses.some(guess2 => {
            return JSON.stringify(guess2) === JSON.stringify(subArray);
             
        });
    });

    return simCombos;
   
}


function findGuess() {
    simCombos = [...combos]
    average = []
   
    nextGuess = []
    for (let i = 0; i < combos.length; i++) {
        let simBlack = 0;
        let simWhite = 0;
         simCombos = [...combos]
        
         simGuess = combos[i];  
        nextGuess.push(simGuess);
        minIndex = 0
       
       
        for (let x = 0; x < combos.length; x++) { 
             simAnswer = combos[x];
             simCombos = [...combos]
            
            simBlack = 0
            simWhite = 0
           
           
            let simGuessCopy = [...simGuess];
            let simAnswerCopy = [...simAnswer];
            
           
            for (let j = 0; j < 4; j++) {
                if (simGuessCopy[j] === simAnswerCopy[j]) {
                    simBlack++;
                    simGuessCopy[j] = null;  
                    simAnswerCopy[j] = null;  
                }
            }

          
            for (let j = 0; j < 4; j++) {
                if (simGuessCopy[j] !== null && simAnswerCopy.includes(simGuessCopy[j])) {
                    simWhite++;
                  
                    simAnswerCopy[simAnswerCopy.indexOf(simGuessCopy[j])] = null;
                    simGuessCopy[j] = null;
                }
            }

          
            simEliminate(simGuess[0], simGuess[1], simGuess[2], simGuess[3], simBlack, simWhite);
           
           
            averageCalc += simCombos.length;
            
           
           
            
        }

       
        average.push(averageCalc / combos.length);
        
       
        averageCalc = 0;
     


       
    }
     for (let i = 0; i < average.length; i++) {
if (average[i] < average[minIndex]) {
minIndex = i;


 }
}

nextGuess = nextGuess[minIndex]


    return average; 
   
}


eliminate(1, 1, 2, 2, 0, 0)
let simCombos = [...combos]
findGuess()


console.log(nextGuess)












