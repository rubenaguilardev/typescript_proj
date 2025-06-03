type Pizza = {
    id: number
    name: string
    price: number
}

type Order = {
    id: number
    pizza: Pizza
    status: 'ordered' | 'completed'
}

const menu: Pizza[] = [
    { id: 1, name: "Margherita", price: 8 },
    { id: 2, name: "Pepperoni", price: 10 },
    { id: 3, name: "Hawaiian", price: 10 },
    { id: 4, name: "Veggie", price: 9 },
]

let nextOrderId: number = 1
let cashInRegister: number = 100
let orderQueue: Order[] = []


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
    const newOrder: Order = {pizza: selectedPizza, status: 'ordered', id: nextOrderId++ }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId: number) {
    const foundOrder = orderQueue.find(order => order.id === orderId)
    if (!foundOrder) {
        console.error(`${orderId} does not exist`)
        return
    }
    foundOrder.status = 'completed'
    return foundOrder
}

function getPizzaDetail(identifier: string | number) {
    
}

addNewPizza({ id: 5, name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ id: 6, name: "BBQ Chicken", price: 12 })
addNewPizza({ id: 7, name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)