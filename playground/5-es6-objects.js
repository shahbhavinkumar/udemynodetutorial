// Object property shorthand

const name = 'Bhavin'
const userAge = 30

const user = {
    name,
    age:userAge,
    location:'Sarasota'
}

console.log(user)

//object des

const product = {
    label:'Red note book',
    price:3, 
    stock:290,
    salePrice:undefined,
    rating:undefined
}

// const label = product.label
// const stock = product.stock

// const {label:productLabel, stock, rating = 5} = product

// console.log(productLabel, stock, rating)

const transaction = (type, {label}) =>{
    console.log(label)
}

transaction('order', product)