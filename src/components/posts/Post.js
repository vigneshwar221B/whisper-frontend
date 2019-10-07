import React from 'react'

const Post = props => {
	return (
		<>
			{props.data.map(e => (
				<div className='container'>
					<div className='card-body'>
						<div className='card mycard black z-depth-4'>
							<div className='card-content white-text'>
								<span className='card-title'>{e.nickname}</span>
								<p>{e.desc}</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	)
}

export default Post
