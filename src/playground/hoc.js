import React from 'react'
import ReactDom from 'react-dom';

const info = (props) => (
	<div>
		<h1>Info</h1>
		<p>The info is: {props.info}</p>
	</div>
);

const withAdminWarning = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAdmin && <p>This is private info. Please don't share!</p>}
			<WrappedComponent {...props} />
		</div>
	);
};

const requireAuthentication = (WrappedComponent) => {
	return ( props ) => (
		<div>
			{props.isAuthenticated ? ( 
				<WrappedComponent {...props} /> 
			):( 
				<p>Please login to view the info.</p> 
			)}
		</div>
	);
};

const AdminInfo = withAdminWarning(info);
const AuthInfo = requireAuthentication(info);

ReactDom.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'));
ReactDom.render(<AuthInfo isAuthenticated={false} info="There are the details" />, document.getElementById('app'));