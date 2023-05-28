import {Link} from 'react-router-dom'

const Login = () => {

  return (
    <>
        <section className="h-screen">
            <div className="h-full">
            <div
            className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div
                className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample image" />
            </div>

            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                <form className='flex flex-col space-y-4'>
                <p className="mb-0 mr-4 text-lg">Sign in </p>
                
                <div class="space-y-4 text-gray-500 ">
                    <div class="w-full max-w-[350px]">
                        <div class="relative">
                            <label  for="Invoice Date" class="w-full">
                                <input   autocomplete="off"   
                                    placeholder="Email" type="email" 
                                    class=" rounded-md border-2 border-gray-300 flex-1 appearance-none 
                                        w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 
                                        shadow-sm text-normal focus:outline-none focus:ring-2 
                                        focus:ring-primary focus:border-transparent [object Object] 0" /> 
                                <div  class="w-full relative"></div>
                            </label>
                        </div>
                    </div>
                </div> 
                <div class="space-y-4 text-gray-500 ">
                    <div class="w-full max-w-[350px]">
                        <div class="relative">
                            <label  for="Invoice Date" class="w-full">
                                <input   autocomplete="off"   
                                    placeholder="Password" type="password" 
                                    class=" rounded-md border-2 border-gray-300 flex-1 appearance-none w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-normal focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent [object Object] 0" /> 
                                <div  class="w-full relative"></div>
                            </label>
                        </div>
                    </div>
                </div> 

                <div className="mb-6 flex items-center justify-between">
                    <div className="mb-[0.125rem] block min-h-[1.5rem] ">
                        <Link to="/forget-password">Forgot password?</Link>
                    </div>

                    
                    
                </div>

                <div className="text-center lg:text-left">
                    <button
                    type="button"
                    className="inline-block rounded bg-blue-700 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-blue-600  "
                    >
                    Login
                    </button>

                    <p className="mb-0 mt-2 pt-1 text-sm font-medium">
                    Don't have an account?
                    <a
                        href="#!"
                        className="text-blue-600 underline ml-2 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                        >Register</a
                    >
                    </p>
                </div>




                
                </form>
            </div>
            </div>
            </div>
        </section> 
    </>
  )
}

export default Login
