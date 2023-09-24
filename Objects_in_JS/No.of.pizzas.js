function numberOfPizzas(order) {
    return order.pizzas;
}

module.exports = numberOfPizzas; 

function numberOfPizzas(orders) {
    let totalPizzas = 0
    for(let i = 0; i < orders.length; i++){
        totalPizzas += orders[i].pizzas; 
    }
    return totalPizzas;
}

module.exports = numberOfPizzas;