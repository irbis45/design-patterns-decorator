class Coffee {
  cost () {
    return 5
  }
}

const sugar = coffee => {
  const cost = coffee.cost()
  coffee.cost = () => cost + 1
}

const small = coffee => {
  const cost = coffee.cost()
  coffee.cost = () => cost - 1
}

const large = coffee => {
  const cost = coffee.cost()
  coffee.cost = () => cost + 2
}

const withMilk = coffee => {
  const cost = coffee.cost()
  coffee.cost = () => cost + 1
}

const largeWithMilkAndSugar = coffee => {
  large(coffee)
  withMilk(coffee)
  sugar(coffee)
  const cost = coffee.cost()

  coffee.cost = () => cost
}

const coffee = new Coffee()
largeWithMilkAndSugar(coffee)
console.log(coffee.cost())
