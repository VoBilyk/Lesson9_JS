export default async function fight(fighter, improvedFighter, ...points) {
    for (let point of points) {

        improvedFighter.doubleHit(fighter, point)

        if (fighter.health <= 0) {
            return await fighter.knockout();
        }

        fighter.hit(improvedFighter, point)

        if (improvedFighter.health <= 0) {
            return await fighter.knockout();
        }
    }
}