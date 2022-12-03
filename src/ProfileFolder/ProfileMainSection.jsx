import React from 'react'

const ProfileMainSection = () => {
    return (
        <div className='flex'>
            <div className='flex m-4'>
                <div className='border-2 mt-12 rounded-lg bg-[#e2dcdc] w-[140px] h-[140px]'></div>
                <div className='mt-[140px] ml-3'>
                    <h1 className='text-xl'>UserName</h1>
                    <h1 className='text-xs'>Last seen this week</h1>
                </div>
            </div>
            <div className='flex flex-col right-6 top-[70px] absolute items-end'>
                <div className='mb-4'>
                    <a href="#" className="py-1 px-3 mr-2 rounded-lg border border-gray-400 bg-[#F7F7F7] hover:bg-[#e2dcdc]">Profile</a>
                    <a href="#" className="py-1 px-3 mr-2 rounded-lg border border-gray-400 bg-[#F7F7F7] hover:bg-[#e2dcdc]">Saves</a>
                    <a href="#" className="py-1 px-3 mr-2 rounded-lg border border-gray-400 bg-[#F7F7F7] hover:bg-[#e2dcdc]">Settings</a>
                </div>

                <div>
                    <a href="#" className="py-1 px-3 mr-2 rounded-lg border border-gray-400 bg-[#F7F7F7] hover:bg-[#e2dcdc]">Activity</a>
                    <a href="#" className="py-1 px-3 mr-2 rounded-lg border border-gray-400 bg-[#F7F7F7] hover:bg-[#e2dcdc]">Edit Profile</a>
                </div>
            </div>
        </div>
    )
}

export default ProfileMainSection