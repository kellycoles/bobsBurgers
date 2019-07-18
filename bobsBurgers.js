// The object should have a property named orders that is an array. You will need to define this.
// Define a function to represent the behavior of placing an order. It should accept one argument named meal. This argument will be an object. There is starter code provided.
// Define a function to represent the behavior of getting all orders. It should return the order property (hint: this). You will need to define this.
// Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.

const restaurant = {
    name: "Bob's Burgers",

//array holds all orders
    orders: [],

//function accepts a meal object and pushes it to the orders array
    placeOrder: function (meal) {
        this.orders.push(meal)
    },

//gets the orders from the orders array
    getOrders: function () {
        return this.orders
    }
}

//regular object

// const comboMeal = {
//     sandwichType: "Tofu",
//     fries: true,
//     drinkSize: "large"
// }

//made object a class constructor 

class ComboMeal {
    constructor(type, Boolean, size) {
        this.entreType = type;
        this.fries = Boolean;
        this.drinkSize = size;
    }
}

//made new object by passing arguements to the ComboMeal class constructor
const combo = new ComboMeal("p&j",false,"small");
const salad = new ComboMeal("salad",true,"large");

restaurant.placeOrder(combo)
restaurant.placeOrder(salad)


//create new objeat healthyOption

// const healthyOption = new Object()
// healthyOption.healthyType ="salad"
// healthyOption.dressing ="ranch"
// healthyOption.crutons = true
// restaurant.placeOrder(healthyOption)

//change values of healthyOption

// healthyOption.healthyType ="rice"
// delete healthyOption.dressing
// healthyOption.crutons = false
// healthyOption.side = "fruit"



const allOrders = restaurant.getOrders()
console.table(allOrders)


