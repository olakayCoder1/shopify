import { useState } from "react";
import Header from "../components/Header"
import Footer from "../components/Footer";
import  Carts from "../components/carts/Carts";



const AboutSection = ({sectionTitle, sectionDescription}) => {
    return (
        <div>
            <h1 className="heading">{sectionTitle}</h1>
            <p className=' text-sm font-medium leading-6 text-gray-500'>
                {sectionDescription}
            </p>
        </div>
    )
}



const RelatedArticle = ({articleTitle, articleDescription , articleLink}) => {
    return (
        <article className="max-w-xs">
            <a href={articleLink}>
                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png" className="mb-5 rounded-lg" alt="I"/>
            </a>
            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-800 ">
                <a href={articleLink}>{articleTitle}</a>
            </h2>
            <p className="mb-4 font-light text-gray-500 ">{articleDescription}</p>
            <a href={articleLink} target="_blank" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 hover:no-underline">
                Read in 2 minutes
            </a>
        </article>
    )
}


const About = () => {

  return (
    <div>
        <Header />
        <div>
            <div>
                <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white ">
                    <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                        <article className="mx-auto w-full max-w-2xl  space-y-4">
                                <AboutSection sectionTitle='Who we are'
                                    sectionDescription="We are more than just an e-commerce website. We are a passionate 
                                    team of individuals dedicated to bringing you the best shopping experience possible. 
                                    Here's a glimpse of who we are:"
                                />

                                <AboutSection sectionTitle='Our Story'
                                    sectionDescription="Our journey started with a vision to create an 
                                    online marketplace that offers a curated selection of high-quality products. 
                                    We believe that shopping should be easy, enjoyable, and tailored to individual preferences. 
                                    That's why we handpick every item in our inventory, ensuring that it meets our strict standards of quality and style."
                                />
                                

                                <AboutSection sectionTitle='Our Mission'
                                    sectionDescription="Our mission is to provide you with a seamless shopping experience. 
                                    We want to make it easy for you to find what you're looking for, 
                                    whether it's a gift for someone special or something new for yourself. 
                                    That's why we offer a wide selection of products from top brands at competitive prices. 
                                    And if you need help finding the perfect item, our team of experts is always happy to assist!"
                                />
                                
                                <AboutSection sectionTitle='Our Values'
                                    sectionDescription="We believe in providing our customers with the best possible service. 
                                    That's why we offer free shipping on all orders over $50 and a 30-day return policy. 
                                    If you're not satisfied with your purchase, we'll refund your money or exchange it for another item.
                                    No questions asked!"
                                />

                                <AboutSection sectionTitle='Our Vision'
                                    sectionDescription="Our vision is to be the leading online marketplace for high-quality products. 
                                    We want to make it easy for you to find what you're looking for, 
                                    whether it's a gift for someone special or something new for yourself. 
                                    That's why we offer a wide selection of products from top brands at competitive prices. 
                                    And if you need help finding the perfect item, our team of experts is always happy to assist!"
                                />
                                <AboutSection sectionTitle='Our Promise'
                                    sectionDescription="We promise to provide you with the best possible service. 
                                    That's why we offer free shipping on all orders over $50 and a 30-day return policy. 
                                    If you're not satisfied with your purchase, we'll refund your money or exchange it for another item. 
                                    No questions asked!"
                                />
                                <AboutSection sectionTitle='Expertise and Experience'
                                    sectionDescription="With years of experience in the e-commerce industry, 
                                    our team brings a wealth of knowledge and expertise to the table.
                                    We stay up-to-date with the latest trends, customer preferences, and technological 
                                    advancements to provide you with a seamless shopping experience."
                                />
                                <AboutSection sectionTitle='Trust and Reliability'
                                    sectionDescription="We understand that trust is essential when shopping online. 
                                    That's why we take every precaution to ensure that your personal information is 
                                    safe and secure. We also offer a 30-day return policy, so if you're not satisfied 
                                    with your purchase, we'll refund your money or exchange it for another item. No questions asked!"
                                />
                                <AboutSection sectionTitle='Social Responsibility'
                                    sectionDescription="We believe in giving back to society. 
                                    That's why we actively support and partner with charitable organizations and initiatives. 
                                    By shopping with us, you contribute to making a positive impact on various causes and communities."
                                />
                                <AboutSection sectionTitle='Customer Satisfaction'
                                    sectionDescription="You, our customers, are at the heart of everything we do. 
                                    We value your feedback, suggestions, and concerns. 
                                    We actively listen to your needs and strive to exceed your expectations. 
                                    Your satisfaction is our top priority, and we are committed to delivering exceptional service at every step."
                                />         
                        </article>
                    </div>
                </main>

                <aside aria-label="Related articles" className="py-24 bg-gray-50 ">
                    <div className="px-4 mx-auto max-w-screen-xl">
                        <h2 className="mb-8 text-2xl font-bold text-gray-900 ">Related articles</h2>
                        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                                <RelatedArticle articleTitle='Our first office' 
                                    articleDescription='Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.'
                                    articleLink='#'
                                />
                                <RelatedArticle articleTitle='Our first office' 
                                    articleDescription='Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.'
                                    articleLink='#'
                                />
                                <RelatedArticle articleTitle='Our first office'
                                    articleDescription='Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.'
                                    articleLink='#'
                                />
                                <RelatedArticle articleTitle='Our first office'
                                    articleDescription='Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.'
                                    articleLink='#'
                                />

                            
                        </div>
                    </div>
                </aside>

                <section className="bg-white ">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <div className="mx-auto max-w-screen-md sm:text-center">
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl ">Sign up for our newsletter</h2>
                            <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl ">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
                            <form action="#">
                                <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                                    <div className="relative w-full">
                                        <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                        </div>
                                        <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500   " placeholder="Enter your email" type="email" id="email" required=""/>
                                    </div>
                                    <div>
                                        <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-blue-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 ">Subscribe</button>
                                    </div>
                                </div>
                                <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">We care about the protection of your data. <a href="#" className="font-medium text-primary-600  hover:underline">Read our Privacy Policy</a>.</div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>

        </div>
        <Footer />
    </div>
  )
}

export default About
