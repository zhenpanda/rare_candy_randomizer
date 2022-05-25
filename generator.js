// Pre-seed input object

const allCandies = {
    slotZero: [
        {
            name: "Pie Cake",
            count: 12
        }
    ],
    slotOne: [
        {
            name: "Fruitchips",
            count: 42
        },
        {
            name: "Pocky",
            count: 54
        },
        {
            name: "Salted Crackers",
            count: 50
        }
    ],
    slotTwo: [
        {
            name: "Shrimp Bag",
            count: 60
        },
        {
            name: "Rice Crackers",
            count: 84
        },
        {
            name: "Mini Mochi",
            count: 180
        }
    ],
    slotThree: [
        {
            name: "White Rabbit",
            count: 540
        }
    ]
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
            this.arrayOfBags = [
                ["Test1", "Test1", "Test1"],
                ["Test2", "Test2", "Test2"],
                ["Test3", "Test3", "Test3"],
            ]
        }
    }
    start() {
        this.currentBag = 0
        return this.arrayOfBags[0]
    }
    next() {
        this.currentBag = this.currentBag + 1
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

const candyBagsSet = new CandyBagGenerator(136, allCandies)
candyBagsSet.generate()
candyBagsSet.start()
// candyBagsSet.next()