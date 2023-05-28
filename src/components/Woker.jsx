import ProductCard from "./ProductCard"


const Woker = () => {
  return (
    <div>
      <div className="container mx-auto">

        <section className="mb-32 p-12 text-gray-800 text-center">
          <h2 className="text-3xl font-bold mb-6 text-center">Featured <u className="text-blue-600">Wears</u></h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
        
      </div>
    </div>
  )
}

export default Woker
