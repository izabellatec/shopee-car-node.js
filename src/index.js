import * as cartService from './services/cart.js'
import createItem from './services/item.js';

const myCart = []
const myWishList = []

console.log("welcome to the your shopee cart")

const item1 = await createItem("hotwheels ferrari", 20.99, 1 )
const item2 =  await createItem("hotwheels lamborguini", 39.99, 3 )
const item3 = await createItem("hotwheels porsche", 25.50, 2);
const item4 = await createItem("hotwheels mustang", 18.75, 4);

await cartService.additem(myCart, item1)
await cartService.additem(myCart, item2);
await cartService.additem(myCart, item3);
await cartService.additem(myCart, item4);

await cartService.displayCart(myCart, item1)


/* await cartService.removeItem(myCart, item2) */






/* await cartService.displayCart(myCart) */
//deleta itens do carrinho
/* await cartService.deleteItem(myCart, item2.name)
await cartService.deleteItem(myCart, item1.name)
 */
await cartService.calcularTotal(myCart);