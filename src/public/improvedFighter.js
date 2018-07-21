import Fighter from './fighter.js'

export default class ImprovedFighter extends Fighter {
    constructor(name, power = 5, health = 100) {
        super(name, power, health);
    }

    doubleHit(enemy, point) {
        this.hit(enemy, point * 2)
    }
}