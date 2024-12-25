import React from "react"
import PropTypes from "prop-types";

const Header = ({ title }) => {
	return (
		<header className="header">
			<div className="overlay"></div>
			<div className="container">
				<h1 className="header-title text-center">{title}</h1>
			</div>
		</header>
	)
}

Header.propTypes = {
	title: PropTypes.string.isRequired, // Validate that title is a required string
};
export default Header