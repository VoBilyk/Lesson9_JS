import Fighter from './fighter.js'

class ImprovedFighter extends Fighter {
    constructor(name, power, health) {
        super(name, power, health);
    }

    doubleHit(enemy, point) {
        this.hit(enemy, point * 2)
    }
}

export { ImprovedFighter };