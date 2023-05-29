import { useEffect, useState } from "react";
// import SideBar from '../../components/admin/SideBar'
import SideBar from '../../components/admin/sidebar/SideBar'
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
    <div className=' p-4'>  
            {/* Kippa */}

            <div  class="py-10 mt-5 px-4">
                <h1 class="text-2xl md:text-3xl text-left md:text-center">
                        Add New Item
                </h1> 
                <div class="mt-10">
                    <form  >
                        <div class="my-5">
                            <h4 class="my-5 mx-4 py-4 border-b-2 border-slate-300">
                                01 -  Product Detail
                            </h4>                 
                            <div class="  ">
                                
                                <div class=" p-4 space-y-4 text-gray-500 ">
                                    <h2 class="max-w-full">Name</h2> 
                                    <div class="max-w-full">
                                        <div class="relative">
                                            <div>
                                                <label  for="Invoice Date" class="w-full">
                                                    <div  class="">
                                                    <span > </span>
                                                    </div> 
                                                    <input   autocomplete="off"   
                                                        placeholder="Product Name" type="text" 
                                                        class=" rounded-md border-2 border-gray-300 flex-1 appearance-none w-full py-3 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent [object Object] 0" /> 
                                                    <div  class="w-full relative"></div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                                <div class=" p-4 space-y-4 text-gray-500 ">
                                    <h2 class="max-w-full">Price</h2> 
                                    <div class="max-w-full">
                                        <div class="relative">
                                        <div class="vd-wrapper">
                                            <div class="vd-activator">
                                            <label  for="Invoice Date" class="w-full">
                                                <div  class="">
                                                <span > </span>
                                                </div> 
                                                <input   autocomplete="off"   placeholder="0.00" type="number" class="FormInput__field rounded-md border-2 border-gray-300 flex-1 appearance-none w-full py-3 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent [object Object] 0" /> 
                                                <div  class="w-full relative"></div>
                                            </label>
                                            </div>
                                            <div class="vd-menu" role="menu"></div>
                                    </div>
                                    </div>
                                    </div>
                                </div> 
                                
                                
                                {/* gdggdd */}
                                <div className="col-span-2 mb-6">
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload Images</label>
                                    <input accept='image/jpeg, image/jpg, image/png' multiple
                                        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"  
                                        type="file" 
                                        required
                                        onChange={(e)=>{
                                            if(e.target.files && e.target.files.length > 0){
                                                        setFiles(e.target.files)
                                                    }} 
                                            }/>
                                </div>

                                {/* hhdhhdhd */}
                                <div class="w-full col-span-2 p-4 space-y-4 text-gray-500">
                                    <h2 class="max-w-full">Description</h2> 
                                    <div class="max-w-full">
                                        <div class="relative">
                                        <label  for="Note" class="FormTextArea w-100">
                                            <div  class="FormTextArea__label">
                                            <span > </span>
                                            </div> 
                                            <textarea  autocomplete="off" 
                                            
                                            type="text" name="Note" placeholder="Product description" class="FormTextArea__field rounded-md border border-gray-300 flex-1 appearance-none w-full py-3 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent [object Object] 0"></textarea> 
                                        </label>
                                        </div>
                                    
                                    </div>
                                </div>

                                
                            </div>


                        </div> 
                        <div class="my-10">
                            <div class="w-full">
                            <div class="my-5">
                                
                                <div class="my-5 mx-3">
                                <button  type="button" id="addnewitem" class="py-3 flex items-center justify-center bg-white border-2 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg w-fit px-10">
                                    Add new Item
                                </button>
                                </div>
                                </div>
                            </div> 

                        </div>
                    </form>
                </div>
            </div>

            {/* Image preview start */}
            <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
                <div class="-m-1 flex flex-wrap md:-m-2">
                {previews &&
                    previews?.map((pic, index) => {
                    return (
                        <div key={index} 
                            // style={}
                            
                            class="flex w-1/3 flex-wrap border max-w-[250px] max-h-[250px]">
                            <div class="w-full h-full p-1 md:p-2">
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
  )
}

export default CreateItem
