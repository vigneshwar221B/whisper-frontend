import React from 'react'

const AddPost = () => {
	return (
		<div class='container'>
			<div class='row'>
				<div class='col m10 offset-m1 s12'>
					<h2 class='center-align'>create new post</h2>
					<div class='row'>
                        <form class='col s12'>
                            
                            <div class='row'>
                                <div class='input-field col s12'>
                                    <textarea
                                        id='nickname'
                                        class='materialize-textarea'
                                    ></textarea>
                                    <label for='nickname'>Nickname</label>
                                </div>
                            </div>
                            
                            <div class='row'>
                                <div class='input-field col s12'>
                                    <textarea
                                        id='message'
                                        class='materialize-textarea'
                                    ></textarea>
                                    <label for='message'>Message</label>
                                </div>
                            </div>
                            
							
							<div class='row'>
								<div class='col m12'>
									<p class='right-align'>
										<button
											class='btn btn-large waves-effect waves-light black'
											type='button'
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
