import {Link} from 'react-router-dom'

const Register = () => {

  return (
    <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
        <div className="w-full mx-auto max-w-sm flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1" >
            <div className="p-5 bg-white md:flex-1">
                <h3 className="my-4 text-2xl font-semibold text-gray-700">Account Register</h3>
                <form action="#" className="flex flex-col space-y-5">
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="names" className="text-sm font-semibold text-gray-500">Name</label>
                        <input type="text"  id="names" autoFocus className="input-primary-blue" placeholder='John Doe' />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="email" className="text-sm font-semibold text-gray-500">Email address</label>
                        <input type="email"  id="email"  className="input-primary-blue" placeholder='example@exampl.com'/>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <div className="flex items-center justify-between">
                        <label htmlFor="password" className="text-sm font-semibold text-gray-500">Password</label>
                        </div>
                        <input type="password" id="password" autoComplete='off' className="input-primary-blue" placeholder='********'  />
                    </div>
                <div className="flex items-center space-x-2">
                    <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                    />
                    <label htmlFor="remember" className="text-sm font-semibold text-gray-500">Read Term and Condition</label>
                </div>
                <div>
                    <button
                    type="submit"
                    className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                    >
                    Register
                    </button>
                </div>
                <div className="flex flex-col space-y-5">
                    <span className="flex items-center justify-center space-x-2">
                    <span className="h-px bg-gray-400 w-14"></span>
                    <span className="font-normal text-gray-500">or register with</span>
                    <span className="h-px bg-gray-400 w-14"></span>
                    </span>
                    <div className="flex flex-col space-y-4">
                    
                    <a
                        href="#"
                        className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none"
                    >
                        <span>
                        <svg className="text-blue-500 group-hover:text-white" width="20" height="20" fill="currentColor">
                            <path
                            d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                            ></path>
                        </svg>
                        </span>
                        <span className="text-sm font-medium text-blue-500 group-hover:text-white">Twitter</span>
                    </a>
                    <div className="flex flex-col space-y-1">
                    <div className="flex items-center place-content-center">
                        <p  className="text-sm font-semibold text-gray-500">Already have an account?  </p>
                        <Link to="/login" className="text-sm text-blue-600 hover:underline focus:text-blue-800"> Login</Link>
                    </div>
                    </div>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register
