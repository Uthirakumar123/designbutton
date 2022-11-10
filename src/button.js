



function Button() {

    return (
        <div>
            <div className="flex justify-center border-2 mt-5 mx-40">
                <button className="rounded-md bg-[#0d6efd] px-4 h-9 m-2 focus:ring-4 focus:outline-none focus:ring-[#0d6efd]/50 hover:bg-[#0d6efd]/90">Primary</button>
                <button className="rounded-md bg-[#6c757d] px-4 h-9 m-2 focus:ring-4 focus:outline-none focus:ring-[#6c757d]/50 hover:bg-[#6c757d]/90">Secondary</button>
                <button className="rounded-md bg-[#198754] px-4 h-9 m-2 focus:ring-4 focus:outline-none focus:ring-[#198754]/50 hover:bg-[#198754]/90">Success</button>
                <button className="rounded-md bg-[#dc3545] px-4 h-9 m-2 focus:ring-4 focus:outline-none focus:ring-[#dc3545]/50 hover:bg-[#dc3545]/90">Danger</button>
                <button className="rounded-md bg-[#ffc107] px-4 h-9 m-2 focus:ring-4 focus:outline-none focus:ring-[#ffc107]/50 hover:bg-[#ffc107]/90">Warning</button>
                <button className="rounded-md bg-[#0dcaf0] px-4 h-9 m-2 focus:ring-4 focus:outline-none focus:ring-[#0dcaf0]/50 hover:bg-[#0dcaf0]/90">Info</button>


            </div>
            <div className="flex justify-center border-2 m-5 mx-40 ">
                <button className="m-2 px-4 h-9 border border-[#0d6efd] text-[#0d6efd]  rounded-md focus:ring-4 focus:ring-[#0d6efd]/50">Primary</button>
                <button className="m-2 px-4 h-9 border border-[#6c757d] text-[#6c757ds] rounded-md focus:ring-4 focus:ring-[#6c757d]/50">Secondary</button>
                <button className="m-2 px-4 h-9 border border-[#198754] text-[#198754] rounded-md focus:ring-4 focus:ring-[#198754]/50">Success</button>
                <button className="m-2 px-4 h-9 border border-[#dc3545] text-[#dc3545] rounded-md focus:ring-4 focus:ring-[#dc3545]/50">Danger</button>
                <button className="m-2 px-4 h-9 border border-[#ffc107] text-[#ffc107] rounded-md focus:ring-4 focus:ring-[#ffc107]/50">Warning</button>
                <button className="m-2 px-4 h-9 border border-[#0dcaf0] text-[#0dcaf0] rounded-md focus:ring-4 focus:ring-[#0dcaf0]/50">Info</button>

            </div>
            <div className="flex justify-center border-2 m-5 mx-40 ">
                <button className="p-3 m-3  rounded-md bg-[#0d6efd] focus:ring-4 focus:outline-none "> Largbutton</button>
                <button className="px-2 h-7 m-2 mt-6 rounded bg-[#0d6efd] focus:ring-4 focus:outline-none">smallbutton</button>
            </div>
            <div className="border-2 mx-40" >

                <div className=" flex justify-center">
                    <button className="rounded-md bg-[#0d6efd] px-80 h-9 m-2 text-white focus:ring-4 focus:outline-none focus:ring-[#0d6efd]/50 hover:bg-[#0d6efd]/90">Primary</button>
                </div>
                <div className=" flex justify-center">
                    <button className="rounded-md bg-[#0d6efd] px-40 h-9 m-2 text-white focus:ring-4 focus:outline-none focus:ring-[#0d6efd]/50 hover:bg-[#0d6efd]/90">Primary</button>
                </div>
                <div className=" flex justify-center">
                    <button type="button" class="text-white bg-blue-400 dark:bg-blue-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center" disabled>Disabled button</button>
                </div>
            </div>

        </div>

    );

}

export default Button;