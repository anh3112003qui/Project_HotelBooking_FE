import React, { useState, useEffect } from "react"
import MainHeader from "../layout/MainHeader"
import HotelService from "../common/HotelService"
import Parallax from "../common/Parallax"
import RoomCarousel from "../common/RoomCarousel"
import RoomSearch from "../common/RoomSearch"
import { useLocation } from "react-router-dom"

const Home = () => {
    const location = useLocation()
    const [showMessage, setShowMessage] = useState(false)
    const message = location.state?.message
    const currentUser = localStorage.getItem("userId")

    useEffect(() => {
        if (message) {
            setShowMessage(true)
            const timer = setTimeout(() => {
                setShowMessage(false)
            }, 5000) // 5 giây

            return () => clearTimeout(timer) // Dọn dẹp bộ đếm thời gian
        }
    }, [message])

    return (
        <section>
            {showMessage && <p className="text-warning px-5">{message}</p>}
            {currentUser && (
                <h6 className="text-success text-center"> Bạn đã đăng nhập với tài khoản {currentUser}</h6>
            )}
            <MainHeader />
            <div className="container">
                <RoomSearch />
                <RoomCarousel />
                <Parallax />
                <RoomCarousel />
                <HotelService />
                <Parallax />
                <RoomCarousel />
            </div>
        </section>
    )
}

export default Home