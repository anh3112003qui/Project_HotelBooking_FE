import React, { useState } from 'react'
import { addRoom } from '../utils/ApiFunctions'
import RoomTypeSelector from '../common/RoomTypeSelector'
import { Link } from "react-router-dom"


const AddRoom = () => {
	const[newRoom, setNewRoom] = useState({
		photo : null,
		roomType: "",
		roomPrice : ""
	})

	const[imagePreview, setImagePreview] = useState("")
	const[successMessage, setSuccessMessage] = useState("")
	const[errorMessage, setErrorMessage] = useState("")

	const handleRoomInputChange = (e) =>{
		const name = e.target.name
		let value = e.target.value
		if (name == "roomPrice"){
			if (!isNaN(value)){
				value = parseInt(value)
			} else {
				value = ""
			}
		}
		setNewRoom({...newRoom, [name]: value})
	}

	const handleImageChange = (e) =>{
		const selectedImage = e.target.files[0]
		setNewRoom({...newRoom, photo: selectedImage})
		setImagePreview(URL.createObjectURL(selectedImage))
	}

	const handleSubmit = async(e) =>{
		e.preventDefault()
		try{
			const success = await addRoom(newRoom.photo, newRoom.roomType, newRoom.roomPrice)
			if(success !== undefined){
				setSuccessMessage("Một phòng mới đã được thêm thành công.")
				setNewRoom({photo: null, roomType:"", roomPrice: ""})
				setImagePreview("")
				setErrorMessage("")
			}else{
				setErrorMessage("Lỗi khi thêm phòng")
			}
		}catch(error){
			setErrorMessage(error.message)
		}
		setTimeout(() => {
			setSuccessMessage("")
			setErrorMessage("")
		}, 3000)
	}
	return (
		<>
		<section className="container, mt-5 mb-5">
			<div className="row justify-content-center">
				<div className='col-md-8 col-lg-6'>
					<h2 className='mt-5 mb-2'>
						Thêm 1 phòng mới
					</h2>
					{successMessage && (
							<div className="alert alert-success fade show"> {successMessage}</div>
						)}

						{errorMessage && <div className="alert alert-danger fade show"> {errorMessage}</div>}
					<form onSubmit={handleSubmit}>
						<div className="mb-3">
							<label htmlFor="roomType" className='form-label'>
								Loại phòng
							</label>
							<div>
									<RoomTypeSelector
										handleRoomInputChange={handleRoomInputChange}
										newRoom={newRoom}
									/>
								</div>
						</div>

						<div className="mb-3">
							<label htmlFor="roomPrice" className='form-label'>
								Giá phòng
							</label>
							<input
									required
									type="number"
									className="form-control"
									id="roomPrice"
									name="roomPrice"
									value={newRoom.roomPrice}
									onChange={handleRoomInputChange}
								/>
						</div>

						<div className='mb-3'>
							<label htmlFor='photo' className='form-label'>
								Ảnh phòng
							</label>
							<input
									required
									name="photo"
									id="photo"
									type="file"
									className="form-control"
									onChange={handleImageChange}
								/>
							{imagePreview && (
									<img
										src={imagePreview}
										alt="Preview  room photo"
										style={{ maxWidth: "400px", maxHeight: "400px" }}
										className="mb-3"></img>
								)}
						</div>
						<div className="d-grid gap-2 d-md-flex mt-2">
						<Link to={"/existing-rooms"} className="btn btn-outline-info">
									Quay lại danh sách phòng
								</Link>
								<button type="submit" className="btn btn-outline-primary ml-5">
									Save
								</button>
						</div>
					</form>
				</div>
			</div>
		</section>
		</>

	)
}

export default AddRoom