import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Header from "./Header";
import {
  FaClock,
  FaCocktail,
  FaParking,
  FaSnowflake,
  FaTshirt,
  FaUtensils,
  FaWifi,
} from "react-icons/fa";

const HotelService = () => {
  return (
    <>
      <div className="mb-2">
        <Header title={"Our Services"} />

        <Row className="mt-4 text-center">
          <h4>
            Phục vụ tại <span className="hotel-color">Qui Le </span>Hotel
          </h4>
          <div className="d-flex justify-content-center align-items-center">
            <FaClock className="mr-2" />
            <span>Mở cửa 24h</span>
          </div>
        </Row>
        <hr />

        <Row xs={1} md={2} lg={3} className="g-4 mt-2">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaWifi /> WiFi
                </Card.Title>
                <Card.Text>
                  Kết nối internet tốc độ cao mọi lúc mọi nơi.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaUtensils /> Bữa sáng
                </Card.Title>
                <Card.Text>Bắt đầu ngày mới với tiệc buffet ăn sáng.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaTshirt /> Giặt giũ
                </Card.Title>
                <Card.Text>
                  Giữ quần áo bạn luôn sạch thơm bằng dịch vụ của chúng tôi.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaCocktail /> Mini-bar
                </Card.Title>
                <Card.Text>
                  Thưởng thức đồ ăn và thức uống tuyệt vời tại quầy bar khách
                  sạn.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaParking /> Đỗ xe
                </Card.Title>
                <Card.Text>
                  Đỗ xe của bạn tiện lợi tại bãi đỗ xe ngay cạnh khách sạn.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaSnowflake /> Không khí mát mẻ
                </Card.Title>
                <Card.Text>
                  Cảm giác mát mẻ và thoải mái mọi lúc với hệ thống điều hòa
                  hiện đại
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <hr />
    </>
  );
};

export default HotelService;
