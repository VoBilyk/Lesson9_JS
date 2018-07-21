export default class Fighter {
    constructor(name, power = 5, health = 100) {
        this.name = name;
        this.power = power;
        this.health = health;
    }

    setDamage(damage) {
        this.health -= damage;
        console.log(`Name: ${this.name}, health: ${this.health}`);
    }

    hit(enemy, point) {
        let damage = point * this.power;
        enemy.setDamage(damage);
    }

    knockout() {
        return new Promise((resolve, reject) => {
            console.log('time is over');
            setTimeout(() => {
                resolve();
            }, 500);
        });
    }
}