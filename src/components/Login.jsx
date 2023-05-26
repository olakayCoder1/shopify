import {Button, Spinner} from 'flowbite-react'

const Login = () => {
  return (
    <>
      <div className="flex flex-row gap-3">
        <Button>
            <Spinner aria-label="Spinner button example" />
            <span className="pl-3">
            Loading...
            </span>
        </Button>
        <Button color="gray">
            <Spinner aria-label="Alternate spinner button example" />
            <span className="pl-3">
            Loading...
            </span>
        </Button>
        </div>
    </>
  )
}

export default Login
