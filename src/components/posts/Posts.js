import React, { useEffect, useState } from 'react'
import Post from './Post'
import axios from 'axios'

const Posts = () => {
	const [posts, setposts] = useState([])
	useEffect(() => {
		axios.get('http://localhost:8080/api/getall')
			.then(res => setposts(res.data))
			.catch(err => console.log("errrr"+err))
	}, [])
	
	return <Post data={posts} />
}

export default Posts
