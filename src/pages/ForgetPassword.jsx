import {Link} from 'react-router-dom'

const ForgetPassword = () => {

  return (
    <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
        <div className="w-full mx-auto max-w-sm flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1" >
        <div className="p-5 bg-white md:flex-1">
            <h3 className="my-4 text-2xl font-semibold text-gray-700">Forgot your password?</h3>
            <form action="#" className="flex flex-col space-y-5">
            <div className="flex items-center justify-between">
                <p  className="text-sm  text-gray-500 mb-4">Don't fret! Just type in your email and we will send you a code to reset your password!</p>
            </div>
            <div className="flex flex-col space-y-1">
                <label htmlFor="email" className="text-sm font-semibold text-gray-500">Email address</label>
                <input type="email"  id="email" autoFocus className="input-primary-blue" />
            </div>
            <div>
                <button
                type="submit"
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                >
                Reset Password
                </button>
            </div>
            <div className="flex flex-col space-y-5">
                <div className="flex flex-col space-y-1">
                <div className="flex items-center place-content-center">
                    <p  className="text-sm font-semibold text-gray-500">Remember Password?  </p>
                    <Link to="/login" className="text-sm text-blue-600 hover:underline focus:text-blue-800"> Login</Link>
                </div>
                </div>
            </div>
            </form>
        </div>
        </div>
    </div>
  )
}

export default ForgetPassword
