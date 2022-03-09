import useDimensions from 'hooks/useDimensions'

const Products = () => {
  const { width } = useDimensions()

  if (width && width < 600) return <h1>Products in Mobile!</h1>

  return (
    <>
      <h1>Products in Desktop!</h1>
    </>
  )
}

export default Products
