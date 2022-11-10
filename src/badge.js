function Badge() {

    return (
        <div>
            {/* badge */}
            <div className="flex justify-center border-2  ">
                <div>
                    <h1 className="mb-2 ml-2 mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Heading one <span className="bg-gray-700 text-white  font-semibold  p-1 rounded ">default </span></h1>

                    <h1 className="mb-2 ml-2 mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Heading one <span className="bg-gray-700 text-white  font-semibold  p-1 rounded ">default </span></h1>

                    <h1 className="mb-2 ml-2 mt-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Heading one <span className="bg-gray-700 text-white  font-semibold  p-1 rounded ">default </span></h1>
                </div>
            </div>
            <div className="flex justify-center border-2  ">
                <div>
                    <button type="button" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Messages
                        <span class="inline-flex justify-center items-center ml-2 w-5 h-5 text-xs font-semibold text-white-800 bg-gray-600 rounded-md">
                            4
                        </span>
                    </button>

                    <div>

                        <button type="button" className=" relative mt-3 p-2 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            INBOX

                            <div className="inline-flex absolute -top-3 -right-3 justify-center items-center w-8 h-5 text-xs font-bold text-white bg-red-500 rounded-lg border dark:border-gray-900">99+</div>
                        </button>

                    </div>
                    <div>

                        <button type="button" className=" relative mt-3 p-2 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Profile

                            <div className="inline-flex absolute -top-1 -right-2 justify-center items-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full border dark:border-gray-900"></div>
                        </button>

                    </div>
                    <div>
                        <span className="bg-red-500 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-100">Red</span>
                        <span className="bg-[#198754] text-green-100 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Green</span>

                    </div>
                    <div>
                    <span className="bg-blue-700 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-100">Primary</span>
                    <span className="bg-gray-500 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-100">Secondry</span>


                    </div>


                </div>



            </div>
        </div>
    )

}
export default Badge;