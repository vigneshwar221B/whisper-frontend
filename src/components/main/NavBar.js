import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
	return (
		<nav>
			<div className='nav-wrapper black'>
				<ul id='nav' className='left'>
					<li>
						<Link id='logo' to='/' >
							Whisper
						</Link>
					</li>
				</ul>

				<ul id='nav' className='right'>
					<li>
						<Link to='/login'>login</Link>
					</li>
					<li>
						<Link to='/register'>register</Link>
					</li>
					<li>
						<Link to='/logout'>logout</Link>
					</li>
					<li>
						<Link to='/myposts'>my posts</Link>
					</li>
					<li>
						<Link to='/home'>home</Link>
					</li>
					<li>
						<Link to='/addpost'>Add Posts</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default NavBar
