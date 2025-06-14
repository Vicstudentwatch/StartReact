const product = {
    name: "Laptop",
    price: "$12000",
    availability:"In Stock",
}

function ProductInfo() {
  return (
    <div>
        <h1>Product Information</h1>
        <p>Name: {product.name}</p>
        <p>Price: {product.price}</p>
        <p>Availability: {product.availability}</p>
    </div>
  )
}

export default ProductInfo