import { Spinner } from 'flowbite-react'

const LoadingInApp = ({customStyle }) => {
  return (
    <div className='w-full flex justify-center place-content-center py-12'>
        <Spinner  aria-label="Info spinner example"  color="info" className={`h-6 w-6 ${customStyle}`} />
    </div>
  )
}

export default LoadingInApp
