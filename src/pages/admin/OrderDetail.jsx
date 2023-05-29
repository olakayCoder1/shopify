import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Pagination, Modal , Button , Spinner } from 'flowbite-react'
// import SideBar from '../../components/admin/SideBar'
import SideBar from '../../components/admin/sidebar/SideBar'
import Header from '../../components/admin/Header'
import {BsCalendar2Event,BsBasket} from 'react-icons/bs'
import {BiRefresh} from 'react-icons/bi'
import {MdOutlineProductionQuantityLimits} from 'react-icons/md' 
import {HiOutlineUsers} from 'react-icons/hi'
import BreakDownCard from '../../components/admin/BreakDownCard'



const OrderDetail = () => {

  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  const onClick = () => { setShow(!show) }
  const onClose = () => { setShow(false) }
  const fetchData = () => {}
  return (
    <>
    <section>
    <div  className="py-10 mt-5 px-4">
      <h1 className="text-2xl md:text-3xl text-left md:text-center">
              Order Details
      </h1> 
      <div className="mt-10">
        <section className="relative">
          <div className="container relative mx-auto md:w-8/12">
            <div className="bg-slate-50 md:p-5">
                <div className="space-y-6 bg-white rounded-lg  sm:p-8 border-0 border-slate-100 -neutral-100"> 
                    <div  mode="aggressive" autoComplete="off" className="Form__wrapper StepThreeWizardForm">
                      <form  className="">
                        <div className="my-5">
                            <h4 className="my-5 mx-4 py-4 border-b-2 border-slate-300">
                                01 -  Invoice header
                            </h4>                 
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              
                                      <div className="w-full p-4 space-y-4 text-gray-500">
                                        <h2 className="max-w-full">Invoice date</h2> 
                                        <div className="max-w-full">
                                          <div className="relative">
                                            <div className="vd-wrapper">
                                              <div className="vd-activator">
                                                <label  for="Invoice Date" className="w-full">
                                                  <div  className="">
                                                    <span > </span>
                                                  </div> 
                                                  <input   autoComplete="off" name="Invoice Date"  placeholder="Invoice Date" type="text" className="FormInput__field rounded-md border-2 border-gray-300 flex-1 appearance-none w-full py-3 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent [object Object] 0" /> 
                                                  <div  className="w-full relative"></div>
                                                </label>
                                              </div>
                                              <div className="vd-menu" role="menu"></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div> 
                                    <div className="w-full p-4 space-y-4 text-gray-500">
                                      <h2 className="max-w-full">Due date</h2> 
                                      <div className="max-w-full">
                                        <div className="relative">
                                          <div className="vd-wrapper">
                                            <div className="vd-activator">
                                              <label  for="Due Date" className="w-full">
                                                <div  className="">
                                                  <span > </span>
                                                </div> 
                                                <input  autoComplete="off" name="Due Date"  placeholder="Due Date" type="text" className="FormInput__field rounded-md border-2 border-gray-300 flex-1 appearance-none w-full py-3 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent    0" /> 
                                                <div  className="w-full relative"></div>
                                              </label>
                                            </div>
                                            <div className="vd-menu" role="menu"></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                            </div>
                        </div> 
                        <div className="my-10">
                          <h4 className="my-5 mx-4 py-4 border-b-2 border-slate-300">
                            04 - Products / Service details

                            <span className="font-bold text-base ml-1 italic text-red-400"> * </span>
                          </h4> 
                          <div className="w-full">
                            <div className="my-5">
                              <div className="table w-full">
                                <div className="table__container relative overflow-x-auto">
                                  <table className="table-auto w-full overflow-x-clip">
                                    
                                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-[#F8FAFC]">Name
                                      <tr>
                                        <th class="p-4 whitespace-nowrap text-[#334155] text-[14px] capitalize text-left w-[260px]">
                                          <span class="font-semibold text-left">
                                            Item
                                          </span>
                                        </th>
                                        <th class="p-4 whitespace-nowrap text-[#334155] text-[14px] capitalize text-left w-[90px]">
                                          <span class="font-semibold text-left">
                                            Quantity
                                          </span>
                                        </th>
                                        <th class="p-4 whitespace-nowrap text-[#334155] text-[14px] capitalize text-left w-[150px]">
                                          <span class="font-semibold text-left">
                                            Price
                                          </span>
                                        </th>
                                        <th class="p-4 whitespace-nowrap text-[#334155] text-[14px] capitalize text-left w-[150px]">
                                          <span class="font-semibold text-left">
                                            Amount
                                          </span>
                                        </th>
                                        <th class="p-4 whitespace-nowrap text-[#334155] text-[14px] capitalize text-left w-[15px]">
                                          <span class="font-semibold text-left"></span>
                                        </th>
                                      </tr>
                                    </thead> 
                                    <tbody className="text-sm">

                                   

                                    </tbody>
                                  </table>
                                </div>
                              </div> 
                              <div className="my-5 mx-3">
                                <button  type="button" id="addnewitem" className="py-3 flex items-center justify-center bg-white border-2 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg w-fit px-10">
                                    Add new Item
                                </button>
                              </div>
                              </div>
                          </div> 
                          <div className="my-12">
                            <div className="py-2 ml-auto mt-5 w-full sm:w-4/6 lg:w-2/4">
                              <div className="flex justify-between py-6">
                                <div className="text-gray-800 text-left flex-1 text-[18px]">
                                    Sub Total
                                </div> 
                                <div className="text-left w-40">
                                  <div className="flex justify-between items-center">
                                    <div>
                                      <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.977 20.948a1.031 1.031 0 102.062 0H7.977zm1.03-13.896l.827-.617a1.031 1.031 0 00-1.857.617h1.03zm10.39 13.896l-.825.617a1.031 1.031 0 001.857-.617h-1.032zM20.43 7.052a1.031 1.031 0 10-2.063 0h2.063zm-10.39 13.896V7.052H7.977v13.896h2.062zM8.182 7.67l10.39 13.895 1.651-1.235L9.833 6.435 8.183 7.67zm12.247 13.278V7.052h-2.063v13.896h2.063z" fill="#000"></path>
                                        <path d="M5.773 14.269h16.453" stroke="#000" stroke-width="2.063" stroke-linecap="round" stroke-linejoin="round"></path>
                                      </svg>
                                    </div> 
                                    <div>
                                      <p className="text-[18px] text-slate-900">
                                          &nbsp;9304040440
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div> 
                              <div className="flex justify-between py-6 align-center">
                                <div className="text-gray-800 text-left flex-1 text-[18px]">
                                    TAX (percent)
                                </div> 
                                <div className="text-left w-40">
                                  <label  for="TAX" className="w-full">
                                    <div  className="">
                                      <span > </span>
                                    </div> 
                                    <input  autoComplete="off" name="TAX" placeholder="0.00" type="text" className="FormInput__field bg-white border text-[12px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-3 py-3 px-4 [object Object] 0" /> 
                                    <div  className="w-full relative"></div>
                                  </label>
                                </div>
                              </div>  
                              <div className="flex justify-between py-6">
                                <div className="text-gray-800 text-left flex-1 text-[18px]">
                                    Discount
                                  </div> 
                                  <div className="text-left w-40">
                                    <label  for="Discount" className="FormDigitsInput w-100 relative">
                                      <div  className="">
                                        <span > </span>
                                      </div> 
                                      <div  className="relative">
                                        <div  className="absolute inset-y-0 top-[-4px] left-0 items-center pl-3 pointer-events-none flex">
                                          <svg  width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.46 4.537v.994H.318v-.994H10.46zm0 2.148v.994H.318v-.994H10.46zM9.426.818V11H8.233L2.685 3.006h-.1V11H1.352V.818h1.193l5.569 8.014h.1V.818h1.212z" fill="#6B7280"></path>
                                          </svg>
                                        </div> 
                                        <input  id="Discount" autoComplete="off" name="Discount" placeholder="0.00" type="text" className="FormDigitsInput__field bg-white border text-[12px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-10 p-3 [object Object] 0" /> 
                                        <div  className="absolute inset-y-0 top-[-4px] right-0 items-center pr-3 pointer-events-none flex">
                                          <svg  width="31" height="12" viewBox="0 0 31 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.064 11L1.702 2.908V11H.33V1.074h1.834L7.12 8.69V1.074h1.372V11H7.064zm11.57 0l-.126-1.4a3.07 3.07 0 01-.448.588 3.38 3.38 0 01-.686.518c-.261.15-.564.27-.91.364a4.24 4.24 0 01-1.134.14 4.96 4.96 0 01-1.806-.336 4.505 4.505 0 01-1.54-.994 4.893 4.893 0 01-1.078-1.624c-.261-.644-.392-1.386-.392-2.226 0-.84.14-1.582.42-2.226.28-.644.649-1.18 1.106-1.61a4.77 4.77 0 011.582-.994 5.034 5.034 0 011.806-.336c.541 0 1.046.075 1.512.224.476.14.9.34 1.274.602.383.261.71.579.98.952.28.364.49.77.63 1.218l-1.246.532c-.224-.719-.611-1.274-1.162-1.666-.55-.401-1.213-.602-1.988-.602-.448 0-.882.08-1.302.238-.42.159-.793.401-1.12.728a3.751 3.751 0 00-.798 1.232c-.196.485-.294 1.055-.294 1.708 0 .663.094 1.241.28 1.736.196.485.453.891.77 1.218.327.327.695.574 1.106.742.42.159.854.238 1.302.238.55 0 1.018-.084 1.4-.252.383-.177.696-.397.938-.658a2.55 2.55 0 00.532-.84c.112-.308.177-.588.196-.84h-3.444V6.142h4.746V11h-1.106zm10.073 0l-5.362-8.092V11h-1.372V1.074h1.834l4.956 7.616V1.074h1.372V11h-1.428z" fill="#6B7280"></path>
                                          </svg>
                                        </div>
                                      </div> 
                                      <div  className="w-full relative"></div>
                                    </label>
                                  </div>
                                </div> 
                                <div className="border-t pt-10 pb-5">
                                  <div className="flex justify-between">
                                    <div className="text-xl text-black text-left flex-1 font-semibold">
                                      Balance amount
                                    </div> 
                                    <div className="text-right w-40">
                                      <div className="flex justify-between items-center">
                                        <div>
                                          <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.977 20.948a1.031 1.031 0 102.062 0H7.977zm1.03-13.896l.827-.617a1.031 1.031 0 00-1.857.617h1.03zm10.39 13.896l-.825.617a1.031 1.031 0 001.857-.617h-1.032zM20.43 7.052a1.031 1.031 0 10-2.063 0h2.063zm-10.39 13.896V7.052H7.977v13.896h2.062zM8.182 7.67l10.39 13.895 1.651-1.235L9.833 6.435 8.183 7.67zm12.247 13.278V7.052h-2.063v13.896h2.063z" fill="#000"></path><path d="M5.773 14.269h16.453" stroke="#000" stroke-width="2.063" stroke-linecap="round" stroke-linejoin="round"></path>
                                          </svg>
                                        </div> 
                                        <div>
                                          <p className="text-[18px] text-slate-900">
                                            &nbsp;26,930,586.00
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="my-5">
                          <h4 className="my-5 mx-4 py-4 border-b-2 border-slate-300">
                          05 - Optional fields
                          </h4> 
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="w-full p-4 space-y-4 text-gray-500">
                              <h2 className="max-w-full">Note</h2> 
                              <div className="max-w-full">
                                <div className="relative">
                                  <label  for="Note" className="FormTextArea w-100">
                                    <div  className="FormTextArea__label">
                                      <span > </span>
                                    </div> 
                                    <textarea  autoComplete="off" 
                                    
                                    type="text" name="Note" placeholder="Leave a note" className="FormTextArea__field rounded-md border border-gray-300 flex-1 appearance-none w-full py-3 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent [object Object] 0"></textarea> 
                                  </label>
                                </div>
                              
                              </div>
                            </div> 
                            <div className="w-full p-4 space-y-4 text-gray-500">
                              <h2 className="max-w-full">Terms &amp; Condition</h2> 
                              <div className="max-w-full">
                                <div className="relative">
                                  <label  for="Terms &amp; Condition" className="FormTextArea w-100">
                                    <div  className="FormTextArea__label"><span > </span></div> 
                                    <textarea  
                                    autoComplete="off" type="text" name="Terms &amp; Condition" placeholder="Terms &amp; Condition" className="FormTextArea__field rounded-md border border-gray-300 flex-1 appearance-none w-full py-3 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent [object Object] 0"></textarea> 
                                  </label>
                                </div>
                              </div>
                            </div> 
                            <div className="w-full p-4 space-y-4 text-gray-500">
                              <h2 className="max-w-full">Authorized signatory</h2> 
                              <div className="max-w-full">
                                <div className="relative">
                                  <div className="filepond--wrapper">
                                    <div className="filepond--root filepond--hopper">
                                      <input className="filepond--browser" type="file" id="filepond--browser-w5h4f0wvw" name="authorizedSignatory" aria-controls="filepond--assistant-w5h4f0wvw" aria-labelledby="filepond--drop-label-w5h4f0wvw" accept="image/jpeg,image/png" />
                                      <a className="filepond--credits" aria-hidden="true" href="https://pqina.nl/" target="_blank" rel="noopener noreferrer" >Powered by PQINA</a>
                                      <div className="filepond--drop-label" >
                                        <label for="filepond--browser-w5h4f0wvw" id="filepond--drop-label-w5h4f0wvw" aria-hidden="true">Drag &amp; Drop your files or <span className="filepond--label-action" tabindex="0">Browse</span>
                                        </label>
                                      </div>
                                      <div className="filepond--list-scroller" >
                                        <ul className="filepond--list" role="list"></ul>
                                      </div>
                                      <div className="filepond--panel filepond--panel-root" data-scalable="true">
                                        <div className="filepond--panel-top filepond--panel-root"></div>
                                        <div className="filepond--panel-center filepond--panel-root" ></div>
                                        <div className="filepond--panel-bottom filepond--panel-root" ></div>
                                      </div>
                                      <span className="filepond--assistant" id="filepond--assistant-w5h4f0wvw" role="status" aria-live="polite" aria-relevant="additions"></span>
                                      <div className="filepond--drip"></div>
                                      <fieldset className="filepond--data"></fieldset>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> 
                        <div className="flex justify-between flex-wrap mt-15 md:mt-10">
                          <div className="w-full px-4 pb-4 text-gray-500 md:w-1/6">
                            <button  type="button" className="py-3 flex items-center justify-center px-3 bg-white border-2 w-full focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                              <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 inline">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.70711 9.70711C5.31658 10.0976 4.68342 10.0976 4.2929 9.70711L0.292894 5.70711C-0.0976312 5.31658 -0.0976312 4.68342 0.292894 4.29289L4.29289 0.292894C4.68342 -0.0976312 5.31658 -0.0976312 5.70711 0.292894C6.09763 0.683417 6.09763 1.31658 5.70711 1.70711L3.41421 4L15 4C15.5523 4 16 4.44771 16 5C16 5.55228 15.5523 6 15 6L3.41421 6L5.70711 8.29289C6.09763 8.68342 6.09763 9.31658 5.70711 9.70711Z" fill="#6B7280"></path>
                              </svg>

                              Back
                            </button>
                          </div> 
                          <div className="w-full px-4 pb-4 text-gray-500 md:w-1/5">
                            <button id="finalinvoice" type="submit" className="py-3 px-3 bg-primary w-full hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg disabled:cursor-not-allowed disabled:bg-slate-500" disabled="disabled">
                              Generate Invoice
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
            </div>
          </div>
        </section>
      </div>
    </div>
</section>

    </>
  )
}

export default OrderDetail
