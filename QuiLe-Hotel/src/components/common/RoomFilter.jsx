import React, { useState } from "react"
import PropTypes from "prop-types"


const RoomFilter = ({ data, setFilteredData }) => {
	const [filter, setFilter] = useState("")

	console.log("Room data:", data)
	const handleSelectChange = (e) => {
		const selectedType = e.target.value
		setFilter(selectedType)

		const filteredRooms = data.filter((room) =>
			room.roomType.toLowerCase().includes(selectedType.toLowerCase())
		)
		setFilteredData(filteredRooms)
	}

	const clearFilter = () => {
		setFilter("")
		setFilteredData(data)
	}

	const roomTypes = ["", ...new Set(data.map((room) => room.roomType))]

	return (
		<div className="input-group mb-3">
			<span className="input-group-text" id="room-type-filter">
				Lọc phòng
			</span>
			<select
				className="form-select"
				aria-label="romm type filter"
				value={filter}
				onChange={handleSelectChange}>
				<option value="">Chọn loại phòng....</option>
				{roomTypes.map((type, index) => (
					<option key={index} value={String(type)}>
						{String(type)}
					</option>
				))}
			</select>
			<button className="btn btn-hotel" type="button" onClick={clearFilter}>
				Xóa lọc
			</button>
		</div>
	)
}

RoomFilter.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			roomType: PropTypes.string,
		})
	).isRequired,
	setFilteredData: PropTypes.func.isRequired,
};

export default RoomFilter