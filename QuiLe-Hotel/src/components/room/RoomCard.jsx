import React, { useContext } from "react"
import PropTypes from "prop-types";
import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const RoomCard = ({ room }) => {
	return (
		<Col key={room.id} className="mb-4" xs={12}>
			<Card>
				<Card.Body className="d-flex flex-wrap align-items-center">
					<div className="flex-shrrink-0 mr-3 mb-3 mb-md-0">
						<Link to={`/book-room/${room.id}`}>
							<Card.Img
								variant="top"
								src={`data:image/png;base64, ${room.photo}`}
								alt="Room Photo"
								style={{ width: "100%", maxWidth: "200px", height: "auto" }}
							/>
						</Link>
					</div>
					<div className="flex-grow-1 ml-3 px-5">
						<Card.Title className="hotel-color">{room.roomType}</Card.Title>
						<Card.Title className="room-price">{room.roomPrice} VNĐ/Ngày</Card.Title>
						<Card.Text>Nhấp vào để biết thêm thông tin</Card.Text>
					</div>
					<div className="flex-shrink-0 mt-3">
						<Link to={`/book-room/${room.id}`} className="btn btn-hotel btn-sm">
							Đặt Ngay
						</Link>
					</div>
				</Card.Body>
			</Card>
		</Col>
	)
}

RoomCard.propTypes = {
	room: PropTypes.shape({
		id: PropTypes.number.isRequired,
		photo: PropTypes.string.isRequired,
		roomType: PropTypes.string.isRequired,
		roomPrice: PropTypes.number.isRequired, // Change to number if it's a number
	}).isRequired,
};

export default RoomCard