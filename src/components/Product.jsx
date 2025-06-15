const Product = ({name,price}) => {
  return (
    <div>
        <h1>{name}</h1>
        <p>Price : ${price}</p>
    </div>
  )
}

export default Product