import { useEffect, useState } from "react";
import SideBar from '../../components/admin/SideBar'
import Header from '../../components/admin/Header'



const CreateItem = () => {

    const [files, setFiles] = useState(false)
    const [previews, setPreviews] = useState(false)

    // rendering previews
    useEffect(() => {
        if (!files) return;
        let tmp = [];
        for (let i = 0; i < files.length; i++) {
        tmp.push(URL.createObjectURL(files[i]));
        }
        const objectUrls = tmp;
        setPreviews(objectUrls);

        // free memory
        for (let i = 0; i < objectUrls.length; i++) {
        return () => {
            URL.revokeObjectURL(objectUrls[i]);
        };
        }
        console.log(files)
    }, [files]);


  return (
    <div className=' flex bg-white'>
      <SideBar />
      <div className='w-full md:w-[80%]'>
        <Header pageName='Add Product' />
        <div className=' p-4'>  
            <h2 className='mb-5 text-3xl font-semibold'>Add new product</h2>
            {/* form section start */}
            
            <form>
                <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                        <input type="text" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
                    </div>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Price</label>
                        <input type="number" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
                    </div>
                </div>
                <div class="grid md:grid-cols-2 md:gap-6">
                    <div className="mb-6">
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select product status</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>Available</option>
                        <option>Out of stock</option>
                    </select>
                    </div>
                    <div className="mb-6">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload Images</label>
                        <input accept='image/jpeg, image/jpg, image/png' multiple
                            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"  
                            type="file" 
                            required
                            onChange={(e)=>{
                                if(e.target.files && e.target.files.length > 0){
                                            setFiles(e.target.files)
                                            // setPreviews(URL.createObjectURL(e.target.files[0]))
                                        }} 
                                }/>
                    </div>
                    

                    
                    

                    

                </div>
            
            

                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create product</button>
            </form>

            {/* Image preview start */}
            <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
            <div class="-m-1 flex flex-wrap md:-m-2">
            {previews &&
                previews?.map((pic, index) => {
                return (
                    <div key={index} class="flex w-1/3 flex-wrap">
                        <div class="w-full p-1 md:p-2">
                            <img
                            alt="gallery"
                            class="block h-full w-full rounded-lg object-cover object-center"
                            src={pic} />
                        </div>
                    </div>
                );
                })}
            </div>
            </div>
            {/* Image preview end */}
            

        
        </div>

      </div>
    </div>
  )
}

export default CreateItem
