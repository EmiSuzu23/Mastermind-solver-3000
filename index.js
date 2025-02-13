let black = 1
let white = 3
let col = [1,2,3,4,5,6]
let combos=[]
for(let x of col){
    for(let y of col){
        for(let z of col) {
            for(let h of col) {
                combos.push([x, y, z, h])

            }
        }
    }
}

console.log(combos.length)

function eliminate(num1, num2, num3, num4) {
    if (black + white >=1) {
        if (black + white == 4) {
            combos = combos.filter(subArray => !subArray.includes(3) && !subArray.includes(4) && !subArray.includes(5) && !subArray.includes(6))
        }

        
        combos = combos.filter(subArray => subArray.includes(num1) && subArray.includes(num2) && subArray.includes(num3) && subArray.includes(num4))
    } else {
        combos = combos.filter(subArray => !subArray.includes(1) && !subArray.includes(2))

    }
}

eliminate(1, 1, 2, 2)

console.log(combos.length)
