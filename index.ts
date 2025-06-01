type Pizza = {
    name: string
    price: number
}

const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]

let nextOrderId: number = 1
let cashInRegister: number = 100
let orderQueue = []


function addNewPizza(pizza: Pizza) {
    menu.push(pizza)
}

function placeOrder(pizzaName: string) {
    const selectedPizza = menu.find(pizza => pizza.name === pizzaName)
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder = {pizza: selectedPizza.name, status: 'ordered', id: nextOrderId++ }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId: number) {
    const foundOrder = orderQueue.find(order => order.id === orderId)
    foundOrder.status = 'completed'
    return foundOrder
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)