import React from 'react'
import LeftBar from './LeftBar'
import RightCards from './RightCards'
import TopMainSection from './TopMainSection'
import QuestionBox from './QuestionBox'

const Front = () => {
    return (
        <div className="flex">
            <LeftBar />
            <div className="flex-initial w-[1000px]">
                <TopMainSection />
                <QuestionBox />
            </div>
            <RightCards />
        </div>
    )
}

export default Front