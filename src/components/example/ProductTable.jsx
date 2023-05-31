import { Pagination , Modal , Button } from 'flowbite-react'
import ProductTableRow from './ProductTableRow'
import { useState, useEffect } from 'react'

const ProductTable = () => {

    const [show, setShow] = useState(false)
    const [showAddItem, setShowAddItem] = useState(false)
    const [productList, setProductList] = useState([1,2,3,4,2,3,4,5,6])

    // product images preview states
    const [files, setFiles] = useState(false)
    const [previews, setPreviews] = useState(false)


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


    const fetchData = () => {}
  return (
    <div className=' w-full '>
        <section className="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
            <div className="mx-auto ">
                <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                    <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
                        <div className="flex items-center flex-1 space-x-4">
                            <h5>
                                <span className="text-gray-500">All Products:</span>
                                <span className="dark:text-white">123456</span>
                            </h5>
                        </div>
                        <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
                        <form action="#" method="GET" className="md:pl-2">
                            <label for="topbar-search" className="sr-only">Search</label>
                            <div className="relative  md:w-96">
                            <div  className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"    >
                                <svg   className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20"  xmlns="http://www.w3.org/2000/svg" >
                                <path fillfule="evenodd" clipRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                ></path>
                                </svg>
                            </div>
                            <input  type="text"  name="q" id="topbar-search"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 focus:border-primary-500 block w-full pl-10 p-2  "
                                placeholder="Search"
                            />
                            </div>
                        </form>
                            <button onClick={() => setShowAddItem(true)} type="button" className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-0 focus:outline-none ">
                                Add new product
                            </button>
                            <button type="button" className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-0  ">
                                <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" strokeWidth="2" stroke="currentColor" ariaHidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                </svg>
                                Export
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        {show ? (
                            <div className="flex items-center justify-center w-full h-12 bg-green-500"></div>
                        ): (
                            <table className="w-full text-sm text-left text-gray-500 ">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 ">
                                    <tr>
                                        <th scope="col" className="p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-all" type="checkbox" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label for="checkbox-all" className="sr-only">checkbox</label>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-4 py-3 whitespace-nowrap">Product</th>
                                        <th scope="col" className="px-4 py-3 whitespace-nowrap">Category</th>
                                        <th scope="col" className="px-4 py-3 whitespace-nowrap">Stock</th>
                                        <th scope="col" className="px-4 py-3 whitespace-nowrap">Sales/Day</th>
                                        <th scope="col" className="px-4 py-3 whitespace-nowrap">Sales/Month</th>
                                        <th scope="col" className="px-4 py-3 whitespace-nowrap">Rating</th>
                                        <th scope="col" className="px-4 py-3 whitespace-nowrap">Sales</th>
                                        <th scope="col" className="px-4 py-3 whitespace-nowrap">Revenue</th>
                                        <th scope="col" className="px-4 py-3 whitespace-nowrap">Last Update</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productList.map((product, index) =>  <ProductTableRow key={index} /> )}
                                </tbody>
                            </table>
                        )}
                        

                    </div>
                    <div className='p-4'>
                        <Pagination currentPage={1} onPageChange={fetchData} totalPages={100} />
                    </div>
                </div>
            </div>
        </section>



    {/* Add product modal */}
    <Modal dismissible  show={showAddItem} onClose={()=> setShowAddItem(false)} >
    <Modal.Header>
      Add new product
    </Modal.Header>
    <Modal.Body>
    <form action="#">
        <div className="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required=""/>
            </div>
            <div>
                <label for="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
                <input type="text" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required=""/>
            </div>
            <div>
                <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required=""/>
            </div>
            <div>
                <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" >
                    <option selected="">Select category</option>
                    <option value="TV">TV/Monitors</option>
                    <option value="PC">PC</option>
                    <option value="GA">Gaming/Console</option>
                    <option value="PH">Phones</option>
                </select>
            </div>
            <div className="col-span-2 mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload Images</label>
                <input accept='image/jpeg, image/jpg, image/png' multiple
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"  
                    type="file" 
                    required
                    onChange={(e)=>{
                        if(e.target.files && e.target.files.length > 0){
                                    setFiles(e.target.files)
                                }} 
                        }/>
            </div>
            {/* Image preview start */}
            {previews && (
                <div className="col-span-2 w-full px-5 py-2 ">
                    <div className="-m-1 flex gap-2 flex-wrap md:-m-2">
                        {previews?.map((pic, index) => {
                            return (
                                <div key={index} 
                                    className="flex w-1/3 flex-wrap border max-w-[100px] max-h-[100px]">
                                    <div className="w-full h-full p-1">
                                        <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src={pic} />
                                    </div>
                                </div>
                            );
                            })
                        }
                    </div>
                </div>
            )       
            }
            {/* Image preview end */}
            <div className="sm:col-span-2">
                <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <textarea id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write product description here"></textarea>                    
            </div>
        </div>
    </form>
    </Modal.Body>
    <Modal.Footer>
      <Button 
        onClick={() => setShowAddItem(false)} >
        Add product
      </Button>
      <Button
        color="gray"
        onClick={() => setShowAddItem(false)}
      >
        Cancel
      </Button>
    </Modal.Footer>
    </Modal>
    </div>
  )
}

export default ProductTable
