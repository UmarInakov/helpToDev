import React from 'react'
import LeftBar from '../components/LeftBar'
import '../ProfileFolder/Profile.css'

import ProfileMainSection from './ProfileMainSection'
import ProfileOptionNav from './ProfileOptionNav'
import FirstCards from './FirstCards'
import SecondLine from './SecondLine'
import ThirdLine from './ThirdLine'
import FourthLine from './FourthLine'
import FifthLine from './FifthLine'
import SixthLine from './SixthLine'
import SeventhLine from './SeventhLine'
import ProfileNav from './ProfileNav'
import ProfileLeftBar from './ProfileLeftBar'

const Profile = () => {
    return (
        <>
            <div className='flex'>
                <ProfileLeftBar />
                <div className="overflow-x-clip flex pb-8">


                    <div>
                        {/* Profile IMG, NAME, EDIT-BUTTON*/}
                        <ProfileMainSection />

                        {/* PROFILE OPTION NAVIGATION */}
                        <ProfileOptionNav />
                        <div className='flex'>

                            {/*  PROFILE NAVIGATION */}
                            <ProfileNav />

                            <div>
                                {/* 1ST CARDS */}
                                <FirstCards />

                                {/* 2ND LINE OF CARDS */}
                                <SecondLine />

                                {/* 3RD LINE OF CARDS */}
                                <ThirdLine />

                                {/* 4TH LINE OF CARDS */}
                                <FourthLine />

                                {/* 5TH LINE */}
                                <FifthLine />
                                {/* 6TH LINE */}
                                <SixthLine />

                                {/* 7TH LINE */}
                                <SeventhLine />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile


