const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]
let nextOrderId = 1
let cashInRegister = 100
const orderQueue = []


function addNewPizza(pizza){
    menu.push(pizza)
}

function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizza => pizza.name === pizzaName)
    cashInRegister += selectedPizza.price
    const newOrder = {pizza: selectedPizza.name, status: 'ordered', id: nextOrderId++ }
    orderQueue.push(newOrder)
    return newOrder
}

function completOrder(orderId) {
    const foundOrder = orderQueue.find(order => order.id === orderId)
    foundOrder.status = 'completed'
    return foundOrder
}
