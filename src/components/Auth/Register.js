import React from 'react'

const Register = () => {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col m3'></div>
				<div className='col m6'>
					<h2 className='center-align'>register</h2>
					<div className='row'>
						<form className='col s12'>
							<div className='row'>
								<div className='input-field col s12'>
									<input id='name' type='text'></input>
									<label htmlFor='name'>Username</label>
								</div>
							</div>
							<div className='row'>
								<div className='input-field col s12'>
									<input id='email' type='email'></input>
									<label htmlFor='email'>Email</label>
								</div>
							</div>
							<div className='row'>
								<div className='input-field col s12'>
									<input id='pass' type='password' className='validate' />
									<label htmlFor='pass'>Password</label>
								</div>
							</div>
							<div className='row'>
								<div className='input-field col s12'>
									<input
										id='confirmpass'
										type='password'
										className='validate'
									/>
									<label htmlFor='confirmpass'>confirmPassword</label>
								</div>
							</div>

							<div className='row'>
								<div className='col m12'>
									<p className='right-align'>
										<button
											className='btn btn-large waves-effect waves-light black'
											type='button'
											name='action'
										>
											Register
										</button>
									</p>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div className='col m3'></div>
			</div>
		</div>
	)
}

export default Register
