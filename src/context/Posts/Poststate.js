import React, { useReducer } from 'react'
import postReducer from './postReducer'
import postContext from './postContext'

import { ADD_POST } from '../types'

const Poststate = props => {
	//TODO: do ajax request to get the ini-state
	const initialState = []
	const [state, dispatch] = useReducer(postReducer, initialState)
	
	let Allposts = [{
		desc: 'test',
		nickname:'test1'
	}]
	

	//add post
	const addFunc = val => {
		dispatch({
			type: ADD_POST,
			payload: val
		})
	}
	return (
		<postContext.Provider
			value={{
				state,
				addFunc,
				Allposts
			}}
		>
			{props.children}
		</postContext.Provider>
	)
}

export default Poststate
