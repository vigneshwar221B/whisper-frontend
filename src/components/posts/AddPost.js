import React, { useState } from 'react'
import axios from 'axios'

const AddPost = props => {
	const [post, setpost] = useState({
		name: '',
		desc: '',
		by: ''
	})

	const onchange = e => {
		e.preventDefault()
		setpost({
			...post,
			[e.target.name]: e.target.value
		})
	}

	const onsubmit = e => {
		e.preventDefault()
		console.log('form submitted')
		//post to the server
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		}

		axios
			.post('http://localhost:8080/api/addpost', post, config)
			.then(() => {
				props.history.push('/myposts')
			})
			.catch(err => console.log(err))
	}

	return (
		<div className='container'>
			<div className='row'>
				<div className='col m10 offset-m1 s12'>
					<h2 className='center-align'>create new post</h2>
					<div className='row'>
						<form className='col s12' onSubmit={onsubmit}>
							<div className='row'>
								<div className='input-field col s12'>
									<textarea
										id='by'
										className='materialize-textarea'
										name='by'
										value={post.by}
										onChange={onchange}
									></textarea>
									<label htmlFor='by'>Nickname</label>
								</div>
							</div>
							<div className='row'>
								<div className='input-field col s12'>
									<textarea
										id='name'
										className='materialize-textarea'
										name='name'
										value={post.name}
										onChange={onchange}
									></textarea>
									<label htmlFor='name'>name</label>
								</div>
							</div>

							<div className='row'>
								<div className='input-field col s12'>
									<textarea
										id='message'
										className='materialize-textarea'
										name='desc'
										value={post.desc}
										onChange={onchange}
									></textarea>
									<label htmlFor='message'>Message</label>
								</div>
							</div>

							<div className='row'>
								<div className='col m12'>
									<p className='right-align'>
										<button
											className='btn btn-large waves-effect waves-light black'
											name='action'
										>
											POST
										</button>
									</p>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AddPost
