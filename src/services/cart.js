// adicionar item no carrinho
async function additem(usercart, item) {
    usercart.push(item);
}

//deletar item do carrinho

async function deleteItem(userCart, name){
  const index = userCart.findIndex((item) => item.name === name)
  if(index !== -1){
    userCart.splice(index, 1)
  }
}
//diminui o item 
async function removeItem(userCart, item) {
    const indexfound = userCart.findIndex((p) => p.name === item.name)
    console.log(indexfound)
    if(indexfound == -1){
      console.log("item nao encontrado")
      return;
    }

    if(userCart[indexfound].quantity > 1){
     userCart[indexfound].quantity -= 1
     return;
    }

    if(userCart[indexfound].quantity == 1){
      userCart.splice(indexfound, 1)
      return;
     }
     
}

async function displayCart(userCart) {
    console.log("\n shopee cart list")
    userCart.forEach((item, index) => {
      console.log(`${index +1}. ${item.name} - R$ ${item.price} | ${item.quantity} | subtotal = ${item.subtotal()}`)
    });
}



//calcular o total
async function calcularTotal(userCart) {
  console.log("\n shopee carts total is")
const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
console.log(`total: ${result}`)
}

export {
    additem,
    calcularTotal,
    deleteItem,
    removeItem,
    displayCart,
   
}