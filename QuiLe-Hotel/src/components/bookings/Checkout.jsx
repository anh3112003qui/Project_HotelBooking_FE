import React, { useEffect, useState } from "react"
import BookingForm from "./BookingForm"
import {
	FaUtensils,
	FaWifi,
	FaTv,
	FaWineGlassAlt,
	FaParking,
	FaCar,
	FaTshirt
} from "react-icons/fa"

import { useParams } from "react-router-dom"
import { getRoomById } from "../utils/ApiFunctions"
import RoomCarousel from "../common/RoomCarousel"

const Checkout = () => {
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [roomInfo, setRoomInfo] = useState({
		photo: "",
		roomType: "",
		roomPrice: ""
	})

	const { roomId } = useParams()

	useEffect(() => {
		setTimeout(() => {
			getRoomById(roomId)
				.then((response) => {
					setRoomInfo(response)
					setIsLoading(false)
				})
				.catch((error) => {
					setError(error)
					setIsLoading(false)
				})
		}, 1000)
	}, [roomId])

	return (
		<div>
			<section className="container">
				<div className="row">
					<div className="col-md-4 mt-5 mb-5">
						{isLoading ? (
							<p>Loading room information...</p>
						) : error ? (
							<p>{error}</p>
						) : (
							<div className="room-info">
								<img
									src={`data:image/png;base64,${roomInfo.photo}`}
									alt="Room photo"
									style={{ width: "100%", height: "200px" }}
								/>
								<table className="table table-bordered">
									<tbody>
										<tr>
											<th>Loại phòng:</th>
											<td>{roomInfo.roomType}</td>
										</tr>
										<tr>
											<th>Giá mỗi ngày:</th>
											<td>{roomInfo.roomPrice} VNĐ</td>
										</tr>
										<tr>
											<th>Dịch vụ phòng:</th>
											<td>
												<ul className="list-unstyled">
													<li>
														<FaWifi /> Wifi
													</li>
													<li>
														<FaTv /> Netfilx Premium
													</li>
													<li>
														<FaUtensils /> Bữa sáng
													</li>
													<li>
														<FaWineGlassAlt /> Quầy bar mini
													</li>
													<li>
														<FaCar /> Đưa đón
													</li>
													<li>
														<FaParking /> Đậu xe free
													</li>
													<li>
														<FaTshirt /> Giặt sấy
													</li>
												</ul>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						)}
					</div>
					<div className="col-md-8">
						<BookingForm />
					</div>
				</div>
			</section>
			<div className="container">
				<RoomCarousel />
			</div>
		</div>
	)
}
export default Checkout