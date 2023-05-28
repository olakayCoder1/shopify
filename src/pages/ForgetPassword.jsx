import {Link} from 'react-router-dom'

const ForgetPassword = () => {

  return (
    <section className="h-screen">
        <div className="h-full">
            <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                <div  className="hidden md:block shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                    <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    className="w-full"  alt="Sample image" />
                </div>

                <div className="mb-12 md:mb-0 w-10/12 sm:w-8/12 lg:w-5/12 xl:w-5/12">
                    <form className='flex flex-col space-y-4'>
                        <p className="mb-0 mr-4 text-lg">Forget Password </p>
                        <p>Enter the email link to your account to receive instruction</p>
                        <div className="space-y-4 text-gray-500 ">
                            <div className="w-full max-w-[350px]">
                                <div className="relative">
                                    <label  htmlFor="Invoice Date" className="w-full">
                                        <input   autoComplete="off"   
                                            placeholder="Email" type="email" 
                                            className=" rounded-md border-2 border-gray-300 flex-1 appearance-none 
                                                w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 
                                                shadow-sm text-normal focus:outline-none focus:ring-2 
                                                focus:ring-primary focus:border-transparent [object Object] 0" /> 
                                        <div  className="w-full relative"></div>
                                    </label>
                                </div>
                            </div>
                        </div> 

                        <div className="text-center lg:text-left">
                            <button  type="button"
                                className="w-full md:w-fit inline-block rounded bg-blue-700 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-blue-600  "
                            >
                            Send instruction
                            </button>
                            <p className="mb-0 mt-2 pt-1 text-sm font-medium">
                                Remember Password?
                            <Link to="/login"
                                className="text-blue-600 underline ml-2 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                                >Sign in</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section> 
  )
}

export default ForgetPassword
