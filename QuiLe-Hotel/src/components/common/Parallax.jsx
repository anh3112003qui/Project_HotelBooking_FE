import React from "react"
import { Container } from "react-bootstrap"

const Parallax = () => {
	return (
		<div className="parallax mb-5">
			<Container className="text-center px-5 py-5 justify-content-center">
				<div className="animated-texts bounceIn">
					<h1>
						Trải nghiệm sự tận tâm tốt nhất tại <span className="hotel-color">Qui Le Hotel</span>
					</h1>
					<h3>Chúng tôi cung cấp cho bạn giá cả hợp lí nhất.</h3>
				</div>
			</Container>
		</div>
	)
}

export default Parallax