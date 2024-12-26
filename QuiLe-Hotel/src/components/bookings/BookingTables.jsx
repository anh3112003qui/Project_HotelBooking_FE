import React, { useState, useEffect } from "react"
import DateSlider from "../common/DateSlider"

const BookingsTable = ({ bookingInfo, handleBookingCancellation }) => {
	const [filteredBookings, setFilteredBookings] = useState(bookingInfo);
  
	const convertArrayToDate = (dateArray) => {
	  // Convert [2024, 12, 25] thành Date object
	  if (!Array.isArray(dateArray) || dateArray.length !== 3) return null;
	  return new Date(dateArray[0], dateArray[1] - 1, dateArray[2]); // Trừ 1 vì tháng trong JS bắt đầu từ 0
	};
  
	const filterBookings = (startDate, endDate) => {
		let filtered = bookingInfo
		if (startDate && endDate) {
			filtered = bookingInfo.filter((booking) => {
				const bookingStartDate = convertArrayToDate(booking.checkInDate)
				const bookingEndDate = convertArrayToDate(booking.checkOutDate)
				return (
					(bookingStartDate >= startDate && bookingStartDate <= endDate) ||
					(bookingEndDate >= startDate && bookingEndDate <= endDate) ||
					(bookingStartDate <= startDate && bookingEndDate >= endDate)
				  );
			})
		}
		setFilteredBookings(filtered)
	}

	useEffect(() => {
		setFilteredBookings(bookingInfo)
	}, [bookingInfo])

	return (
		<section className="p-4">
			<DateSlider onDateChange={filterBookings} onFilterChange={filterBookings} />
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
				{filteredBookings.length > 0 ? (
            filteredBookings.map((booking, index) => (
										<tr key={booking.id}>
							<td>{index + 1}</td>
							<td>{booking.id}</td>
							<td>{booking.room.id}</td>
							<td>{booking.room.roomType}</td>
							<td>{booking.checkInDate.join('-')}</td>
							<td>{booking.checkOutDate.join('-')}</td>
							<td>{booking.guestName}</td>
							<td>{booking.guestEmail}</td>
							<td>{booking.numOfAdults}</td>
							<td>{booking.numOfChildren}</td>
							<td>{booking.totalNumOfGuest}</td>
							<td>{booking.bookingConfirmationCode}</td>
							<td>
								<button
									className="btn btn-danger btn-sm"
									onClick={() => handleBookingCancellation(booking.id)}>
									Hủy
								</button>
							</td>
						</tr>
					))
				) : (
					<tr>
					<td colSpan="13" className="text-center">
					  Không tìm thấy đặt chỗ nào cho các ngày đã chọn
					</td>
				  </tr>
				)}
			  </tbody>
			</table>
		  </section>
		);
	  };


export default BookingsTable