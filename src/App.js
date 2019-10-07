import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

import Navbar from './components/main/NavBar'
import Main from './components/main/Main'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Myposts from './components/posts/Myposts'
import Posts from './components/posts/Posts'
import Addpost from './components/posts/AddPost'

function App() {
	useEffect(() => {
		console.log('hi');
		M.AutoInit()
	}, [])

	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Main} />
					<Route path="/login" exact component={Login}/>
					<Route path="/register" exact component={Register} />
					<Route path="/home" exact component={Posts} />
					<Route path="/myposts" exact component={Myposts} />
					<Route path="/addpost" exact component={Addpost} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
