import React from 'react'

const LeftBar = () => {
    return (
        <div className='hidden md:block w-[166px] bg-[#F7F7F7] border-r-[1px] shadow-md'>
            <div className="sticky left-0 top-14 bottom-0 flex-none text-center w-[165px]">
                <div>
                    <h1 className='text-xl mt-2 font-bold'>Home</h1>
                    <div className='mt-4'>
                        <h1 className='text-md font-bold'>Public</h1>
                        <ul className='mt-2 leading-7 text-[13px]'>
                            <li><a href="#">Questions</a></li>
                            <li><a href="#">Tags</a></li>
                            <li><a href="#">Users</a></li>
                        </ul>
                    </div>
                    <div className='mt-5'>
                        <h1 className='text-ml font-bold'>Collectives</h1>
                        <ul className='mt-2 leading-7 text-[13px]'>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Companies</a></li>
                        </ul>
                    </div>
                    <div className='mt-5'>
                        <h1 className='text-md font-bold'>Find a Job</h1>
                        <ul className='mt-2 leading-7 text-[13px]'>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Companies</a></li>
                        </ul>
                    </div>
                    <div className='mt-5'>
                        <h1 className='text-md font-bold'>Teams</h1>
                        <ul className='mt-2 leading-7 text-[13px]'>
                            <li><a href="#">Create Free Team</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftBar