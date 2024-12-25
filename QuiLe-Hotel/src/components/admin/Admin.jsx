import React from "react"
import { Link } from "react-router-dom"

const Admin = () => {
	return (
		<section className="container mt-5">
			<h2>Chào mừng tới Admin Panel</h2>
			<hr />
			<Link to={"/existing-rooms"}>Quản lí phòng</Link> <br />
			<Link to={"/existing-bookings"}>Quản lí đặt phòng</Link>
		</section>
	)
}

export default Admin