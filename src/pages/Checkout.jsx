import {useState, useEffect} from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer";
import { nigeriaStates } from "../stores/states";
import {motion }from 'framer-motion';
import { usePaystackPayment  } from 'react-paystack';
import { TbCurrencyNaira } from "react-icons/tb";
import { Button, Modal } from 'flowbite-react';

const Checkout = () => {

    const k = 'https://mdbcdn.b-cdn.net/img/new/slides/146.webp'

    const [paymentMethod, setPaymentMethod ] = useState('direct');
    const [showOrderPlacingProgress, setShowOrderPlacingProgress ] = useState(false);
    const [ paymentData , setPaymentData ] = useState({
        reference: (new Date()).getTime().toString(),
        email: "user@example.com",
        amount: 20000,
        publicKey: 'pk_test_a063883b704ef22e87130f02b158dc735c360f1b',
    })

    const handlePaystackSuccessAction = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);
        simulateAPICall();
    };

    const handlePaystackCloseAction = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
    };



    function simulateAPICall() {
        console.log("API call started");
        setShowOrderPlacingProgress(true)
        // Simulate API call with a 2-second delay
        setTimeout(function() {
            setShowOrderPlacingProgress(false)
          // Perform further actions or handle the API response here
        }, 2000);
      }
      
    

    

    const initializePayment = usePaystackPayment(paymentData);
    
  return (
    <div>
        <Header />
        <div>
            <section className="bg-white grid  md:grid-cols-3  max-w-7xl mx-auto">
                <div className=" md:col-span-2 py-16 md:px-4 mx-8">
                    <h2 className="heading">Billing Details</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center   sm:text-xl"></p>
               
                    <form action="#" className=''>
                        <div class="grid gap-4 mb-4 md:grid-rows-2 ">
                            <div>
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium ">First Name *</label>
                                <input type="text" id="first_name" className="input-primary-blue w-full" placeholder="" required />
                            </div>
                            <div>
                                <label htmlFor="last_name" className="block mb-2 text-sm font-medium ">Last Name *</label>
                                <input type="text" id="last_name" className="input-primary-blue w-full" placeholder="" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium ">Email *</label>
                                <input type="email" id="email" className="input-primary-blue w-full" placeholder="" required />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium ">Phone *</label>
                                <input type="number" id="phone" className="input-primary-blue w-full" placeholder="" required />
                            </div>
                            <div className='md:col-span-2'>
                                <label htmlFor="address" className="block mb-2 text-sm font-medium ">Address *</label>
                                <input type="text" id="address" className="input-primary-blue w-full" placeholder="" required />
                            </div>
                            <div>
                                <label for="category" class="block mb-2 text-sm font-medium text-gray-900 ">State *</label>
                                <select id="category" class="input-primary-blue w-full" name='state'>
                                    <option disabled selected="">Select a state</option> 
                                    {nigeriaStates.map((state , index ) => {
                                        return <option key={index} value={state.name}>{state.name}</option>
                                    })}
                                </select>
                            </div>
                            <div>
                                <label for="category" class="block mb-2 text-sm font-medium text-gray-900 ">City *</label>
                                <select id="category" class="input-primary-blue w-full" name='city'>
                                    <option disabled selected="">Select a state</option>
                                    {nigeriaStates.map((state , index ) => {
                                        return <option key={index} value={state.name}>{state.name}</option>
                                    })}
                                </select>
                            </div>
                            <div className="md:col-span-2">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium ">Order notes (optional)</label>
                                <textarea id="message" rows="6" className="input-primary-blue w-full    " placeholder="Notes about your order, eg. special notes for delivery"></textarea>
                            </div>
                        </div>
                       
                    </form>
                </div>
                <div className="py-16 px-4 mx-auto max-w-screen-md bg-gray-50">
                    <h2 className="heading">Payment Methods</h2>
                    <p className="mb-8 font-light text-center text-gray-500  sm:text-xl"></p>
                    
                    <div className="grid grid-cols-2 place-content-center justify-center space-x-4 mb-8">
                        <div onClick={()=> setPaymentMethod('direct')} className={`${paymentMethod === 'direct' ? " text-blue-600 border-blue-600 ":""} text-base text-center border-b-2 cursor-pointer`}>
                            <h3 className=''>Direct Payment</h3>
                        </div>
                        <div onClick={()=> setPaymentMethod('card')} className={`${paymentMethod === 'card' ? " text-blue-600 border-blue-600 ":""} text-base text-center border-b-2 cursor-pointer`}> 
                            <h3 className=''>Other Payment</h3>
                        </div>
                        
                    </div>
                    <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly py-2">
                    <h3 className=' font-bold'>Order Detail</h3>
                        <div className="w-full flex items-center justify-between">
                            <p className="text-gray-700 text-base font-normal">Total Items</p>
                            <p className="text-gray-700 text-lg">5</p>
                        </div>
                        <div className="w-full flex items-center justify-between">
                            <p className="text-gray-700 text-base font-normal">Delivery</p>
                            <p className="flex items-center text-gray-700 text-lg">
                            <TbCurrencyNaira />
                            465.0</p>
                        </div>

                        <div className="w-full border-b border-gray-600 my-2"></div>

                        <div className="w-full flex items-center justify-between">
                            <p className="text-gray-700 text-xl font-semibold">Total</p>
                            <p className=" flex items-center text-gray-700 text-xl font-semibold">
                                <TbCurrencyNaira className=" w-6 h-6"/>
                                872822
                            </p>
                        </div>
                    </div>
                    {paymentMethod === 'direct' ? (
                        <div className=' flex flex-col gap-4'>
                            <p>Make your payment directly into our bank account. 
                                Please use your Order ID as the payment reference. 
                                Your order won’t be shipped until the funds have cleared in our account.
                                
                            </p>
                            <h3 className=' font-bold text-center'>Our Account Detail</h3>
                            <p>Bank Name: <span className=' font-bold'>Access Bank</span></p>
                            <p>Account Name: <span className=' font-bold'>Oluwaseun Oyelaja</span></p>
                            <p>Account Number: <span className=' font-bold'>0812345678</span></p>


                            <p>Upload the payment receipt</p>
                            <input type="file" name="file" id="file" class="inputfile" />

                            <motion.button onClick={simulateAPICall}  className="btn-red my-8 " >
                                Place Order
                            </motion.button>
                        </div>

                    ) : (
                        <div className=' flex flex-col space-y-2'>
                            <p>We are glad that you have chosen to make a payment with us! 
                                To ensure a secure and seamless transaction, we have partnered with Paystack, 
                                a trusted and reliable payment gateway. Rest assured that your payment will be processed 
                                securely through Paystack's encrypted platform.
                                <br />
                                <span className=' font-bold'>Note</span> : If payment is successful your order will authomatically place
                            </p>
                            

                            <motion.button onClick={() => { initializePayment(handlePaystackSuccessAction, handlePaystackCloseAction)  }} className="btn-red my-8 " >
                                Make Payment
                            </motion.button>
                        </div>

                    )}
{/*                     
                    <form action="#">
                        <div class="grid gap-4 mb-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium ">First Name *</label>
                                <input type="text" id="first_name" className="input-primary-blue w-full" placeholder="" required />
                            </div>
                            <div>
                                <label htmlFor="last_name" className="block mb-2 text-sm font-medium ">Last Name *</label>
                                <input type="text" id="last_name" className="input-primary-blue w-full" placeholder="" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium ">Email *</label>
                                <input type="email" id="email" className="input-primary-blue w-full" placeholder="" required />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium ">Phone *</label>
                                <input type="number" id="phone" className="input-primary-blue w-full" placeholder="" required />
                            </div>
                            <div className=' col-span-2'>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium ">Address *</label>
                                <input type="email" id="email" className="input-primary-blue w-full" placeholder="" required />
                            </div>
                            <div>
                                <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State *</label>
                                <select id="category" class="input-primary-blue w-full" name='state'>
                                    <option disabled selected="">Select a state</option> 
                                    {nigeriaStates.map((state , index ) => {
                                        return <option key={index} value={state.name}>{state.name}</option>
                                    })}
                                </select>
                            </div>
                            <div>
                                <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City *</label>
                                <select id="category" class="input-primary-blue w-full" name='city'>
                                    <option disabled selected="">Select a state</option>
                                    {nigeriaStates.map((state , index ) => {
                                        return <option key={index} value={state.name}>{state.name}</option>
                                    })}
                                </select>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium ">Order notes (optional)</label>
                                <textarea id="message" rows="6" className="input-primary-blue w-full    " placeholder="Notes about your order, eg. special notes for delivery"></textarea>
                            </div>
                        </div>
                        <div class="flex items-center space-x-4">
                            <button type="submit" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                Update product
                            </button>
                            <button type="button" class="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                                <svg class="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                                Delete
                            </button>
                        </div>
                    </form> */}
                </div>
            </section>
            
            <Modal show={showOrderPlacingProgress} size="md" popup >
                <Modal.Body>
                <div className="text-center">
                    
                    <div className=' flex justify-center items-center my-6'>
                        <div role="status" >
                            <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>

                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Processing your order
                    </h3>
                    <div className="flex justify-center gap-4">
                    
                    </div>
                </div>
                </Modal.Body>
            </Modal>
        </div>
        <Footer />
    </div>
  );
};

export default Checkout;
