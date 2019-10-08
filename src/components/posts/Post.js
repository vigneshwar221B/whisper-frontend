import React, {useContext, useEffect} from 'react'
import authContext from '../../context/Auth/authContext'

const Post = props => {

	const { loadUser } = useContext(authContext)
	
	useEffect(() => {
		console.log('loaded');
		loadUser()
		// eslint-disable-next-line
	}, [])
	return (
		<>
			{props.data.map(e => (
				<div className='container' key={e._id}>
					<div className='card-body'>
						<div className='card mycard black z-depth-4'>
							<div className='card-content white-text'>
								<span className='card-title'>{e.name}</span>
								<p>{e.desc}</p>
								<p className="right">by {e.by}</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	)
}

export default Post
