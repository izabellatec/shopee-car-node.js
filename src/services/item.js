//casos de usos dos itens

//criar itemcom subtotal certo

async function createItem(name, price, quantity) {
 return {
    name,
    price,
    quantity,
    subtotal: () => price * quantity,
 }
}

export default createItem;
