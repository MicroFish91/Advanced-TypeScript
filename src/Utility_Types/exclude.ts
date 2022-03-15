type AvailableDrinks = "Coffee" | "Tea" | "Orange Juice" | "Lemonade";
type DrinksJohnHates = "Coffee" | "Orange Juice";

// "Tea" | "Lemonade"
let johnDrinks: Exclude<AvailableDrinks, DrinksJohnHates>;
