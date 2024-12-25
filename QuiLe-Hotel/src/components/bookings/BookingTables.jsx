import { parseISO } from "date-fns"
import React, { useState, useEffect } from "react"
import DateSlider from "../common/DateSlider"
import PropTypes from "prop-types";


const BookingsTable = ({ bookingInfo, handleBookingCancellation }) => {
	const [filteredBookings, setFilteredBookings] = useState(bookingInfo)

	const filterBooknigs = (startDate, endDate) => {
		let filtered = bookingInfo
		if (startDate && endDate) {
			filtered = bookingInfo.filter((booking) => {
				const bookingStarDate = parseISO(booking.checkInDate)
				const bookingEndDate = parseISO(booking.checkOutDate)
				return (
					bookingStarDate >= startDate && bookingEndDate <= endDate && bookingEndDate > startDate
				)
			})
		}
		setFilteredBookings(filtered)
	}

	useEffect(() => {
		setFilteredBookings(bookingInfo)
	}, [bookingInfo])

	return (
		<section className="p-4">
			<DateSlider onDateChange={filterBooknigs} onFilterChange={filterBooknigs} />
			<table className="table table-bordered table-hover shadow">
				<thead>
					<tr>
						<th>S/N</th>
						<th>Booking ID</th>
						<th>Room ID</th>
						<th>Loại phòng</th>
						<th>Ngày nhận</th>
						<th>Ngày trả</th>
						<th>Tên khách</th>
						<th>Email khách</th>
						<th>Số người lớn</th>
						<th>Số trẻ em</th>
						<th>Tổng khách</th>
						<th>Mã xác nhận</th>
						<th colSpan={2}>Hành động</th>
					</tr>
				</thead>
				<tbody className="text-center">
					{filteredBookings.map((booking, index) => (
						<tr key={booking.id}>
							<td>{index + 1}</td>
							<td>{booking.id}</td>
							<td>{booking.room.id}</td>
							<td>{booking.room.roomType}</td>
							<td>{booking.checkInDate}</td>
							<td>{booking.checkOutDate}</td>
							<td>{booking.guestName}</td>
							<td>{booking.guestEmail}</td>
							<td>{booking.numOfAdults}</td>
							<td>{booking.numOfChildren}</td>
							<td>{booking.totalNumOfGuests}</td>
							<td>{booking.bookingConfirmationCode}</td>
							<td>
								<button
									className="btn btn-danger btn-sm"
									onClick={() => handleBookingCancellation(booking.id)}>
									Hủy
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{filterBooknigs.length === 0 && <p> Không tìm thấy đặt chỗ nào cho các ngày đã chọn</p>}
		</section>
	)
}


BookingsTable.propTypes = {
	bookingInfo: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			room: PropTypes.shape({
				id: PropTypes.string.isRequired,
				roomType: PropTypes.string.isRequired,
			}).isRequired,
			checkInDate: PropTypes.instanceOf(Date).isRequired, 
			checkOutDate:PropTypes.instanceOf(Date).isRequired, 
			guestName: PropTypes.string.isRequired,
			guestEmail: PropTypes.string.isRequired,
			numOfAdults: PropTypes.number.isRequired,
			numOfChildren: PropTypes.number.isRequired,
			totalNumOfGuests: PropTypes.number.isRequired,
			bookingConfirmationCode: PropTypes.string.isRequired,
		})
	).isRequired,
	handleBookingCancellation: PropTypes.func.isRequired,
};
export default BookingsTable