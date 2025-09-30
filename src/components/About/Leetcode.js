import React from 'react'
import LeetCodeCalendar from 'leetcode-calendar';
const Leetcode = () => {
    return (
        <div className='text-white my-8 w-100'>
            <LeetCodeCalendar
                username="gauravsm_16"
                blockSize={14}
                blockMargin={5}
                color="#a855f7"
                fontSize={14}
                blockColor="#a855f7"
            />
        </div>
    )
}

export default Leetcode
