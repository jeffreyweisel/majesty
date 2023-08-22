const queens = []
const tributeChest = []

// Create some queens
const createQueen = (queenID,queenName) => {
    const queenObject = {
        id: queenID,
        name: queenName
    }

    queens.push(queenObject);
}

const trinity = createQueen(1, "Trinity Terry")
const sydney = createQueen(2, "Sydney Noh")
const christina = createQueen(3, "Christina Asworth")
const aja = createQueen(4, "Aja Washington")


//Hail all of the queens
const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  
}
for (const queen of queens) {
    const hailMessage = hailTheQueen(queen.name)
    console.log(hailMessage)
}

// Pay tribute to the queens
const payTribute = (tributeID, tributeDescription, queenID) => {
  const tribute = {
    id: tributeID,
    decription: tributeDescription,
    queenID: queenID 
  }
  
  tributeChest.push(tribute)
}

payTribute (1, "A rolex", 3)
payTribute (2, "One million dollars", 1)
payTribute (3, "A bugatti", 3)
payTribute(4, "A mansion", 1)
payTribute(5, "A new TV", 2)
payTribute(6, "A lamborghini", 4)
payTribute(7, "A 50 acre beet farm", 2)


//Iterate the queen objects to show tribute for each one
for (const queen of queens) {
//Each queen will look at every item to see if its hers
    for (const tribute of tributeChest) {
        if (tribute.queenID === queen.id) {
            console.log(`${queen.name} has the tribute ${tribute.decription}`)
        }
    }
}