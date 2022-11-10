function Cards(){

return(
<div>

    {/* card */}
    <div className="border flex justify-center ">
                <div className="w-80 mb-3 mt-5 rounded-lg border dark:bg-gray-800 dark:border-gray-700 flex justify-center ">


                    <div className="  rounded-md border border-gray-200  dark:bg-gray-800 dark:border-gray-700">
                        <a>
                            <img className="rounded-t-md" src="https://as1.ftcdn.net/v2/jpg/04/36/76/88/1000_F_436768858_PBXeKsSw1sPC9JEgPQm0kwTS7T3n4cgJ.jpg" alt="" />
                        </a>
                        <div className="">

                            <h5 className="mb-2 ml-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>


                            <p className="mb-1 ml-2 font-normal text-gray-700 dark:text-gray-400 ">Here are the biggest .</p>
                            <hr className="my-5 mb-1 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                            <p className="ml-2" > 2021</p>
                            <hr className="my-5 mb-1 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                            <p className="ml-2" > 2021</p>
                            <hr className="my-5 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                            <a href="#" class="inline-flex items-center ml-3 mb-2 py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>

                        </div>
                    </div>
                </div>
            </div>




</div>
)

}
export default Cards;