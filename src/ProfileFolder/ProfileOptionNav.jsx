import React from 'react'

const ProfileOptionNav = () => {
    return (
        <div className='Navigation hidden m-4 mb-2 md-block'>
            <label for="Navigation" className="block mb-2 font-medium">Navigation</label>
            <select id="Navigation" className="block w-[400px] ml-7 bg-[#F7F7F7] border border-gray-300 text-md rounded-lg p-2">
                <option value="Summary" selected>Summary</option>
                <option value="Answers">Answers</option>
                <option value="Questions">Questions</option>
                <option value="Tags">Tags</option>
                <option value="Articles">Articles</option>
                <option value="Badges">Badges</option>
                <option value="Bookmarkes">Bookmarkes</option>
                <option value="Following">Following</option>
                <option value="Bounties">Bounties</option>
                <option value="Reputation">Reputation</option>
                <option value="AllActions">All Actions</option>
                <option value="Responses">Responses</option>
                <option value="Votes">Votes</option>
            </select>
        </div>

    )
}

export default ProfileOptionNav