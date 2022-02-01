
export const menuAverage = (menu) => {

let statsAverage = {
    price: 0,
    time: 0,
    healt: 0
}
const average = menu.reduce((acc, el) => {

    acc.price += el.pricePerServing
    acc.time  += el.readyInMinutes
    acc.healt += el.healthScore;

    return acc;

}, statsAverage) 

statsAverage.time = statsAverage.time / menu.length;
statsAverage.healt = statsAverage.healt / menu.length;

    return statsAverage;
}