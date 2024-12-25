import React, { useState, useEffect } from "react"
import moment from "moment"
import Button from "react-bootstrap/Button"
import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types";


const BookingSummary = ({ booking, payment, isFormValid, onConfirm }) => {
	const checkInDate = moment(booking.checkInDate)
	const checkOutDate = moment(booking.checkOutDate)
	const numberOfDays = checkOutDate.diff(checkInDate, "days")
	const [isBookingConfirmed, setIsBookingConfirmed] = useState(false)
	const [isProcessingPayment, setIsProcessingPayment] = useState(false)
	const navigate = useNavigate()

	const handleConfirmBooking = () => {
		setIsProcessingPayment(true)
		setTimeout(() => {
			setIsProcessingPayment(false)
			setIsBookingConfirmed(true)
			onConfirm()
		}, 3000)
	}

	useEffect(() => {
		if (isBookingConfirmed) {
			navigate("/booking-success")
		}
	}, [isBookingConfirmed, navigate])

	return (
		<div className="row">
			<div className="col-md-6"></div>
			<div className="card card-body mt-5">
				<h4 className="card-title hotel-color">Phiếu đặt phòng</h4>
				<p>
					Họ tên: <strong>{booking.guestFullName}</strong>
				</p>
				<p>
					Email: <strong>{booking.guestEmail}</strong>
				</p>
				<p>
					Ngày nhận phòng: <strong>{moment(booking.checkInDate).format("MMM Do YYYY")}</strong>
				</p>
				<p>
					Ngày trả phòng: <strong>{moment(booking.checkOutDate).format("MMM Do YYYY")}</strong>
				</p>
				<p>
					Số ngày đặt phòng: <strong>{numberOfDays}</strong>
				</p>

				<div>
					<h5 className="hotel-color">Số lượng khách</h5>
					<strong>
						Người lớn: {booking.numOfAdults}
					</strong>
					<strong>
						<p>Trẻ em : {booking.numOfChildren}</p>
					</strong>
				</div>

				{payment > 0 ? (
					<>
						<p>
							Tổng chi phí: <strong>{payment} VNĐ</strong>
						</p>

						{isFormValid && !isBookingConfirmed ? (
							<Button variant="success" onClick={handleConfirmBooking}>
								{isProcessingPayment ? (
									<>
										<span
											className="spinner-border spinner-border-sm mr-2"
											role="status"
											aria-hidden="true"></span>
										Đặt chỗ đã được xác nhận, đang chuyển hướng đến thanh toán...
									</>
								) : (
									"Xác nhận đặt chỗ & chuyển sang thanh toán"
								)}
							</Button>
						) : isBookingConfirmed ? (
							<div className="d-flex justify-content-center align-items-center">
								<div className="spinner-border text-primary" role="status">
									<span className="sr-only">Loading...</span>
								</div>
							</div>
						) : null}
					</>
				) : (
					<p className="text-danger">Ngày check-out phải sau ngày check-in.</p>
				)}
			</div>
		</div>
	)
}

BookingSummary.propTypes = {
	booking: PropTypes.shape({
		guestFullName: PropTypes.string.isRequired,
		guestEmail: PropTypes.string.isRequired,
		checkInDate: PropTypes.instanceOf(Date).isRequired, 
		checkOutDate: PropTypes.instanceOf(Date).isRequired, 
		numOfAdults: PropTypes.number.isRequired,
		numOfChildren: PropTypes.number.isRequired,
	}).isRequired,
	payment: PropTypes.number.isRequired,
	isFormValid: PropTypes.bool.isRequired,
	onConfirm: PropTypes.func.isRequired,
};

export default BookingSummary