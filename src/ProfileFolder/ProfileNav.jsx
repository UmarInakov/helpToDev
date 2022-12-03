import React, { useState, Fragment } from 'react'
import { Link } from 'react-scroll'

const ProfileNav = () => {


    // const values = [
    //     { id: 1, text: "Summary", addressPlace: "summary" },
    //     { id: 2, text: "Answers", addressPlace: "answers" },
    //     { id: 3, text: "Questions", addressPlace: "questions" },
    //     { id: 4, text: "Tags", addressPlace: "tags" },
    //     { id: 5, text: "Reputation", addressPlace: "reputation" },
    //     { id: 6, text: "Badges", addressPlace: "badges" },
    //     { id: 7, text: "Bookmarkes", addressPlace: "bookmarkes" },
    //     { id: 8, text: "Following", addressPlace: "following" },
    //     { id: 9, text: "Bounties", addressPlace: "bounties" },
    //     { id: 10, text: "Accounts", addressPlace: "accounts" },
    //     { id: 11, text: "Articles", addressPlace: "articles" },
    //     { id: 12, text: "Votes", addressPlace: "vote" }
    // ]


    return (
        <div className='hidden md:block h-screen sticky top-12 left-0 bottom-0 right-0 w-[180px]'>
            <ul className='leading-8 cursor-pointer text-sm p-8 pl-5 pt-2 sticky top-0 left-0 bottom-0 right-0'>

                {/* {
                    values.map((val) => (
                        <li onClick={() => setActiveId(val.id)}>
                            {activeId === val.id ?
                                <li className='bg-red-500'><Link to={val.addressPlace} smooth={true} duration={500}>{val.id}</Link></li>
                                : <li>{val.text}</li>}
                        </li>
                    ))
                } */}


                <li key={1}><Link to='summary' smooth={true} duration={500}>Summary</Link></li>
                <li key={2}><Link to='answers' smooth={true} duration={500}>Answers</Link></li>
                <li key={3}><Link to='questions' smooth={true} duration={500}>Questions</Link></li>
                <li key={4}><Link to='tags' smooth={true} duration={500}>Tags</Link></li>
                <li key={5}><Link to='reputation' smooth={true} duration={500}>Reputation</Link></li>
                <li key={6}><Link to='badges' smooth={true} duration={500}>Badges</Link></li>
                <li key={7}><Link to='bookmarkes' smooth={true} duration={500}>Bookmarkes</Link></li>
                <li key={8}><Link to='following' smooth={true} duration={500}>Following</Link></li>
                <li key={9}><Link to='bounties' smooth={true} duration={500}>Bounties</Link></li>
                <li key={10}><Link to='accounts' smooth={true} duration={500}>Accounts</Link></li>
                <li key={11}><Link to='articles' smooth={true} duration={500}>Articles</Link></li>
                <li key={12}><Link to='vote' smooth={true} duration={500}>Votes</Link></li>
            </ul>
        </div >
    )
}

export default ProfileNav