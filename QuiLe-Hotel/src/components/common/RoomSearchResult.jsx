import React, { useState } from "react"
import RoomCard from "../room/RoomCard"
import { Button, Row } from "react-bootstrap"
import RoomPaginator from "./RoomPaginator"
import PropTypes from "prop-types";


const RoomSearchResults = ({ results, onClearSearch }) => {
	const [currentPage, setCurrentPage] = useState(1)
	const resultsPerPage = 3
	const totalResults = results.length
	const totalPages = Math.ceil(totalResults / resultsPerPage)

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber)
	}

	const startIndex = (currentPage - 1) * resultsPerPage
	const endIndex = startIndex + resultsPerPage
	const paginatedResults = results.slice(startIndex, endIndex)

	return (
		<>
			{results.length > 0 ? (
				<>
					<h5 className="text-center mt-5">Kết quả tìm kiếm</h5>
					<Row>
						{paginatedResults.map((room) => (
							<RoomCard key={room.id} room={room} />
						))}
					</Row>
					<Row>
						{totalResults > resultsPerPage && (
							<RoomPaginator
								currentPage={currentPage}
								totalPages={totalPages}
								onPageChange={handlePageChange}
							/>
						)}
						<Button variant="secondary" onClick={onClearSearch}>
							Xóa kết quả
						</Button>
					</Row>
				</>
			) : (
				<p></p>
			)}
		</>
	)
}

RoomSearchResults.propTypes = {
	results: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			photo: PropTypes.string.isRequired,
			roomType: PropTypes.string.isRequired,
			roomPrice: PropTypes.number.isRequired,
		})
	).isRequired,
	onClearSearch: PropTypes.func.isRequired,
};

export default RoomSearchResults