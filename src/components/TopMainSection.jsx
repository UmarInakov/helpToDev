import React from 'react'

const TopMainSection = () => {
    return (
        <div className='flex mt-10 justify-between bg-white h-[155px]'>

            {/* Top Questions */}
            <div className='pt-7 pl-7 pr-0'>
                <h1 className='text-2xl whitespace-nowrap'>All Questions</h1>
                <p className='text-sm font-medium pt-[50px]'>2203123 questions</p>
            </div>

            {/* Ask Questions */}
            <div className='pt-3 text-end leading-[80px]'>
                <a href="#" className="p-2 mr-4 text-md font-medium rounded-lg border border-gray-400 bg-[#F7F7F7] hover:bg-[#e2dcdc]">
                    Ask Question
                </a>
                <div className="rounded-md shadow-sm flex pt-3">
                    <a href="#" className="p-[9px] text-xs font-medium rounded-l-lg border border-gray-300 bg-[#F7F7F7] hover:bg-[#e2dcdc]">
                        Newest
                    </a>
                    <a href="#" className="p-[9px] text-xs font-medium text-gray-900 border-t border-b border-gray-300 bg-[#F7F7F7] hover:bg-[#e2dcdc]">
                        Active
                    </a>
                    <a href="#" className="hidden md:block p-[9px] text-xs font-medium border border-r rounded-r-lg lg:rounded-none lg:border-r-0 bg-[#F7F7F7] border-gray-300 hover:bg-[#e2dcdc]">
                        Bountied
                    </a>
                    <a href="#" className="hidden lg:block p-[9px] text-xs font-medium rounded-r-lg border border-gray-300 bg-[#F7F7F7] hover:bg-[#e2dcdc]">
                        Unanswered
                    </a>
                    <a href="#" className="block md:hidden p-[9px] text-xs font-medium text-gray-900 rounded-r-md border border-gray-300 bg-[#F7F7F7] hover:bg-[#e2dcdc]">
                        More
                    </a>

                    {/* Filter button */}
                    <a href="#" className="ml-8 mr-4 p-[9px] text-xs font-medium rounded border border-gray-300  bg-[#F7F7F7] hover:bg-[#e2dcdc]">
                        Filter
                    </a>
                </div>

            </div>
        </div>
    )
}

export default TopMainSection