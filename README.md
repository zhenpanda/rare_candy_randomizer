# rare_candy_randomizer

For our wedding we wanted to give our guests goodie-bags/favor bags to take home after.
And the contents of our goodie-bag will contain different types of Asian candies, this function will take input of both quality of the candies and a pre-set distribution, and will return an object containing a randomized array of bags with the candies inside already randamized by the pre-set distribution. 

The number of types of candies can be set to any amount, with optional labels.
The pre-set distribution is currently hard-coded for a more controlled rarity distribution.

The goal of this program is to "seed" once and generate all the bags, putting inside of an object.
Calling the "start" method on the obj will let me how to pack the "next-bag" and start the bag setup
Calling the "next" method on the obj will let me how to pack the "next-bag"
CurrentSlot will be the current bag we are packing.
CurrentSlot [ int ] will get you bag that's pre-generated.

The goal is create a sudo-random set, not true random.
Make sure there is at least (X) of rare, (Y) uncommon, (Z) of common ... etc.
We gonna use a uniform deviate distribution and Fisher-Yates-Durstenfeld shuffle.
Any amount of candy that's leftover is acceptable, we don't need to use every piece of candy we have.

Seed each bag with the pre-set distrubution for "rarity" guarantees.
Generator a random number as the set [ bagCount ] and memo that number.
Re-organize the the array from smallest memo number to largest.

Each bag will have 4 possible candies pieces.

Common Slot [ White Rabbit x 4 ] This will be in every bag (*guaranteed)
Uncommon Slot [ *Candy x 2 ] A random piece of uncommon candy (*guaranteed)
Rare Slot [ *Candy x 1 ] A random piece of rare candy (*guaranteed)
Super Rare [ *Rare Candy x 1 ] Only 1/12 bags will have this 4th piece of candy which is (Super Rare)