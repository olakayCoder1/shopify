import {useState} from 'react'
import Header from "../components/Header"
import Woker from "../components/Woker";
import Footer from "../components/Footer";
import  Carts from "../components/carts/Carts";


const Contact = () => {


    

    const k = 'https://mdbcdn.b-cdn.net/img/new/slides/146.webp'
  return (
    <div>
        <Header />
        <div>
            <section className="bg-white ">
                <div className="py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="heading text-center">Contact Us</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">Got a technical issue? Want to send feedback about a feature? Need details about our Business plan? Let us know.</p>
                    <form action="#" className="space-y-8">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium ">Your email</label>
                            <input type="email" id="email" className="input-primary-blue w-full" placeholder="example@example.com" required />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium ">Subject</label>
                            <input type="text" id="subject" className="input-primary-blue w-full" placeholder="Let us know how we can help you" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium ">Your message</label>
                            <textarea id="message" rows="6" className="input-primary-blue w-full    " placeholder="Leave a comment..."></textarea>
                        </div>
                        <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 ">Send message</button>
                    </form>
                </div>
            </section>

        </div>
        <Footer />
    </div>
  )
}

export default Contact
