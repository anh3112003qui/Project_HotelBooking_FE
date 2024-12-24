import axios from "axios"

export const api = axios.create({
	baseURL:"http://localhost:9192"
})

export async function addRoom(photo, roomType, roomPrice){
	const formData = new FormData()
	formData.append("photo", photo)
	formData.append("roomType", roomType)
	formData.append("roomPrice", roomPrice)

	const response = await api.post("/rooms/add/new-room", formData, {
		headers: {
			"Content-Type": "multipart/form-data",
			Accept: "application/json", // Hoặc loại khác mà server yêu cầu
		},
	})
	if (response.status ==201){
		return true
	}else{
		return false
	}
}

/* This function gets all room types from thee database */
export async function getRoomTypes() {
    try {
        const response = await api.get("/rooms/room/types");
        console.log("Room types from API:", response.data); // Log để kiểm tra
        return response.data;
    } catch (error) {
        console.error("Error fetching room types:", error);
        throw new Error("Error fetching room types");
    }
}
