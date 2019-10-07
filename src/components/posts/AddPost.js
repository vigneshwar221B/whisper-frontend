import React, { useState, useContext } from 'react'
import postContext from '../../context/Posts/postContext'

const AddPost = props => {

	const [post, setpost] = useState({
		nickname: '',
		desc: ''
	})
	const postcontext = useContext(postContext)

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

		postcontext.addFunc(post)
		props.history.push('/myposts')
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
										id='nickname'
										className='materialize-textarea'
										name='nickname'
										value={post.nickname}
										onChange={onchange}
									></textarea>
									<label htmlFor='nickname'>Nickname</label>
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
