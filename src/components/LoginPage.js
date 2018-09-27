import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'


export const LoginPage = ({ startLogin }) =>  (
		<section className="box-layout">
			<div className="box-loyout__box">
				<h1 className="box-layout__title">Boilerplate</h1>
				<p>Tag line for app</p>
				<button  
					className="button" 
					onClick={startLogin}
					>Login with Google
				</button>
			</div>			
		</section>
	)


const mapDispatchToProps = (dispatch) => ({
	startLogin: () => dispatch(startLogin())
})   
export default connect(undefined, mapDispatchToProps)(LoginPage)   