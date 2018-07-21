import Fighter from './fighter.js';
import ImprovedFighter from './improvedFighter.js';
import fight from './fight.js';


let fighter = new Fighter('Fighter', 3);
let improvedFighter = new ImprovedFighter('Improved Fighter', 3);

// call fight function
fight(fighter, improvedFighter, ...[1, 2, 3, 4, 5, 6, 7, 8, 9]);