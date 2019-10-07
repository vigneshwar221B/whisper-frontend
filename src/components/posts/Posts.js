import React, {useContext} from 'react'
import Post from './Post'
import postContext from '../../context/Posts/postContext'

const Posts = () => {
	const postcontext = useContext(postContext)
	return (	
		<Post data={postcontext.Allposts}/>	
	)
}

export default Posts
