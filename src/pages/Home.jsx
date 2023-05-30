import Header from "../components/Header"
import Woker from "../components/HotProduct"; 
import Footer from "../components/Footer";
import Promo from '../components/example/Promo';
import Feature from '../components/Feature';

const Home = () => {

    

    

    const k = 'https://mdbcdn.b-cdn.net/img/new/slides/146.webp'
  return (
    <div>
      <Header />
      <div>
        <div>
            <section className="mb-16 h-1/2 w-full">
                <div className="relative overflow-hidden bg-no-repeat  bg-fixed bg-center bg-cover "   style={{backgroundPosition: '50%', backgroundImage: `url(${k})`, height: '500px',}}  >
                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed " style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}  >
                        <div className="flex justify-center items-center h-full">
                            <div className="text-center text-white px-6 md:px-12">
                                <h1 className="text-5xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-12">
                                Upgrade Your Wardrobe with our High-Quality  <br /><span>Bags, Fashion Wears, and Shoes </span>
                                </h1>
                                <button type="button" className="inline-block px-7 py-3 border-2 bg-blue-700 border-white text-white font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                >
                                Explore
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Woker />
            <Promo />
            <Feature />
        </div>
      </div>
        
        <Footer />
    </div>
  )
}

export default Home
