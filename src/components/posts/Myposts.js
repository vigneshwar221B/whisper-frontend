import React, { useContext, useEffect, useState } from 'react'
import Post from './Post'
import authContext from '../../context/Auth/authContext'
import axios from 'axios'

const Myposts = () => {
	const { loadUser } = useContext(authContext)
	const [allposts, setallposts] = useState([])

	useEffect(() => {
		//console.log('loaded')
		loadUser()
		axios
			.get('http://localhost:8080/api/myposts')
			.then(res => setallposts(res.data))
			.catch(err => console.log(err))
		// eslint-disable-next-line
	}, [])

	return (
		<div>
			<blockquote><h4>my posts:</h4></blockquote>
			<Post data={allposts} />
		</div>
	)
}

export default Myposts
