// Pre-seed input object
const allCandies = {
    slotZero: [
        {
            name: "1 Pie Cake",
            count: 12
        }
    ],
    slotOne: [
        {
            name: "1 Pocky",
            count: 54
        },
        {
            name: "1 Salted Crackers",
            count: 50
        },
        {
            name: "1 Fruitchips",
            count: 42
        },
    ],
    slotTwo: [
        {
            name: "2 Mini Mochi",
            count: 180
        },
        {
            name: "2 Rice Crackers",
            count: 84
        },
        {
            name: "2 Shrimp Bag",
            count: 60
        },
    ],
    slotThree: [
        {
            name: "4 White Rabbit",
            // everyone gets 4 each
        }
    ]
}

function randomIntFromInterval(min, max) { 
    // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
class CandyBagGenerator {
    constructor(bagCount, allCandies) {
      this.bagCount = bagCount
      this.allCandies = allCandies
      this.currentBag = 0
      this.arrayOfBags = []
    }

    generate() {
        if(this.allCandies && this.bagCount) {
        /* 
            this.arrayOfBags = [
                {
                    contents: ["Test1", "Test1", "Test1"],
                    bagNum: 1
                    seed: 0.3710609471013733
                }
        ]
        */
       
        let bagsCount = this.bagCount
        let allCandies= this.allCandies

            while(bagsCount > 0) {
                
                let bagContents = {
                    bagSeedNum: 140 - bagsCount + 1,
                    seed: Math.random(),
                    contents: ["4 White Rabbit"]
                }

                // pack super rare candy
                if(allCandies.slotZero[0].count > 0) {
                    bagContents.contents.push(allCandies.slotZero[0].name)
                    allCandies.slotZero[0].count = allCandies.slotZero[0].count - 1
                }
                
                // shuffle slots
                let randomRare = randomIntFromInterval(0,2)

                // pack rare candy
                if(allCandies.slotOne[randomRare]?.count > 0) {
                    bagContents.contents.push(allCandies.slotOne[randomRare].name)
                    allCandies.slotOne[randomRare].count = allCandies.slotOne[randomRare].count - 1   
                }else{
                    // search for leftover fills
                    if(allCandies.slotOne[0]?.count > 0) {
                        bagContents.contents.push(allCandies.slotOne[0].name)
                        allCandies.slotOne[0].count = allCandies.slotOne[0].count - 1   
                    }else if(allCandies.slotOne[1]?.count > 0) {
                        bagContents.contents.push(allCandies.slotOne[1].name)
                        allCandies.slotOne[1].count = allCandies.slotOne[1].count - 1   
                    }else if(allCandies.slotOne[2]?.count > 0) {
                        bagContents.contents.push(allCandies.slotOne[2].name)
                        allCandies.slotOne[2].count = allCandies.slotOne[2].count - 1   
                    }
                }

                // pack uncommon candy
                let randomUncommon = randomIntFromInterval(0,2)
                if(allCandies.slotTwo[randomUncommon]?.count > 0) {
                    bagContents.contents.push(allCandies.slotTwo[randomUncommon].name)
                    allCandies.slotTwo[randomUncommon].count = allCandies.slotTwo[randomUncommon].count - 2   
                }else{
                    // search for leftover fills
                    if(allCandies.slotTwo[0]?.count > 0) {
                        bagContents.contents.push(allCandies.slotTwo[0].name)
                        allCandies.slotTwo[0].count = allCandies.slotTwo[0].count - 2   
                    }else if(allCandies.slotTwo[1]?.count > 0) {
                        bagContents.contents.push(allCandies.slotTwo[1].name)
                        allCandies.slotTwo[1].count = allCandies.slotTwo[1].count - 2   
                    }else if(allCandies.slotTwo[2]?.count > 0) {
                        bagContents.contents.push(allCandies.slotTwo[2].name)
                        allCandies.slotTwo[2].count = allCandies.slotTwo[2].count - 2   
                    }
                }

                // console.log(bagContents)
                this.arrayOfBags.push(bagContents)
                bagsCount = bagsCount - 1
            }

            // console.log(allCandies)
            this.arrayOfBags.sort(function(a,b) { return a.seed - b.seed
            })
        }
    }
    start() {
        this.currentBag = 0
        alert(`BAG #${this.currentBag+1}: [ ${this.arrayOfBags[this.currentBag].contents} ]`)
        return this.arrayOfBags[0]
    }
    next() {
        this.currentBag = this.currentBag + 1
        alert(`BAG #${this.currentBag+1}: [ ${this.arrayOfBags[this.currentBag].contents} ]`)
        return this.arrayOfBags[this.currentBag]
    }
    current() {
        return this.currentBag
    }
    moveSlot(slot) {
        this.currentBag = slot
        return this.arrayOfBags[this.currentBag]
    }
}

const candyBagsSet = new CandyBagGenerator(140, allCandies)
candyBagsSet.generate()
candyBagsSet.start()
// candyBagsSet.next()