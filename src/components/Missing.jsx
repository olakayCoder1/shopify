import { Link } from "react-router-dom"

const Missing = () => {
    
    return (
        <div className="container px-6 mx-auto h-screen w-full">
            <section className="mb-32 text-gray-800 text-center">
                <div className="px-6 py-12 md:px-12">
                <h2 className="text-5xl my-12 font-bold tracking-tight">
                    404!<br />
                    <span className="text-blue-600">Page Not Found</span>
                </h2>
                <Link to='/' className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mb-2 md:mr-2"
                    >Visit Our Homepage</Link>
                </div>
            </section>
            
        </div>
    )
}

export default Missing
