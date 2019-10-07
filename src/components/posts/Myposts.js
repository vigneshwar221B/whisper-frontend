import React, {useContext} from 'react'
import Post from './Post'
import postContext from '../../context/Posts/postContext'

const Myposts = () => {
    const mypostsContext = useContext(postContext)

    return (
        <div>
            my posts:
            <Post data={mypostsContext.state}/>
        </div>
    )
}

export default Myposts
