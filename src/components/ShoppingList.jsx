import { useState } from "react"

const ShoppingList = () => {
    const [itemList, setItemList] = useState([{name: 'Apple', quantity: 2}, {name: 'Banana', quantity: 5}])

  return (
    <>
    <h1>Shopping List</h1>
    {itemList.length > 0 ? (
        <ul>
            {itemList.map((item, index) => (
                <li key={index}>{item.name} - Quantity: {item.quantity}</li>
            ))}
        </ul>
    ) : (
        <p>No items in the shopping list</p>
    )}
    </>
  )
}

export default ShoppingList