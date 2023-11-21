// let name = "larissy"
// let age = 24
// let products = ["mouse", "teclad", "monitor"]
// let productsValues = [29.90, 129.300, 899.99]

// generateInvoice(name, products, productsValues, age)

// function generateInvoice(name, products, productsValues, age) {
//     console.log("o comprador  é " + name)
//     console.log("a idade é " + age)
//     console.log("o produto é " + products[0])
//     console.log("o valor é  " + productsValues[0])
// }

// let invoice = {
//     name: "felipe",
//     age: 24,
//     products: {
//         0: ["mouse", 29.90],
//         1: ["teclado", 129.300],
//         2: ["monitor", 899.99]
//     }

// }

// console.log(invoice)


//JSON - JavaScript Object Notation
// chave e valor com o objetivo de transferir dados
let invoice = {
	name: "felipe",
    age: 28,
    products: {
    	0: ["mouse 2xwm", 29.90],
        1: ["Teclado mecânico", 129.99],
        2: ["Monitor", "899.99"],
        3: ["TV 100 polegadas", "10000.90"]
    },
    taxes: "98.90"
}

generateInvoice(invoice)

function generateInvoice(invoice){
	console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    console.log("------------")
    
    for(let index in invoice.products){
    	let [productName, productPrice] = invoice.products[index]
        console.log(`- ${productName}: R$ ${productPrice}`)
    }
    
    
}