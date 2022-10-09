const addToLocalStorage = (id) =>{
    let shoppingCart = {}
    //shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart')
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }
    //add quantity
    const quantity = shoppingCart[id]
    if(quantity){
        const newQuantity = quantity+1
        shoppingCart[id] = newQuantity
    } else{
        shoppingCart[id] = 1
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

const getCartFromLocalStorage = () => {
    let shoppingCart = {}

    const storedCart = localStorage.getItem('shopping-cart')
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
        }
        return shoppingCart
}

const removeFromLocalStorage = (id) =>{
    const storedCart = localStorage.getItem('shopping-cart')
    if(storedCart){
      const shoppingCart = JSON.parse(storedCart)
      if(id in shoppingCart){
        delete shoppingCart[id]
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
      }
    }
}

const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart')
}
export {addToLocalStorage, getCartFromLocalStorage, removeFromLocalStorage, deleteShoppingCart}