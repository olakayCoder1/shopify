import {useState} from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer";
import Faq from "../components/Faq";

const Contact = () => {

    
    

    const k = 'https://mdbcdn.b-cdn.net/img/new/slides/146.webp'
  return (
    <div>
        <Header />
        <div>
<section class="relative z-20 overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
  <div class="container mx-auto">
    <div class="-mx-4 flex flex-wrap">
      <div class="w-full px-4">
        <div class="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
          <span class="mb-2 block text-lg font-semibold text-primary">
            FAQ
          </span>
          <h2
            class="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]"
          >
            Any Questions? Look Here
          </h2>
          <p class="text-base text-body-color">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>
      </div>
    </div>
    <div class="-mx-4 flex flex-wrap">
      <Faq />
      <Faq />
      <Faq />
      <Faq />
      <Faq />
      <Faq />
      <Faq />
      <Faq />
    </div>
  </div>
</section>

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
