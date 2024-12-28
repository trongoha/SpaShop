import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import "./ServicePost.scss";
import { Link, useParams } from "react-router-dom";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

import { getServiceById , getAllService, createService,deleteService, updateService} from "../../api/ServiceApi"; // Import API mới

import { FacebookShareButton } from "react-share";
import { FacebookOutlined } from "@mui/icons-material";

const ServicePost = () => {
  const params = useParams();
  const [service, setService] = useState(null);
  const { id } = params; // sử dụng id thay vì slug

  // let imageUrl = !serviceType || isEmptyOrSpaces(serviceType.imageUrl)
  // ? process.env.PUBLIC_URL + "/images/imagedefault.jpg"
  // : `https://localhost:7024/${serviceType.imageUrl}`;

  const getImage = (path) => {
    console.log(path);
    if (!path) {
      // set default image
      return `https://placehold.co/200x200?text=Image-not-found`;
    }

    return `http://localhost:8080/v1/${path}`;
    // return `http://localhost:8080/${path}`;
  };

  useEffect(() => {
    document.title = "Chi tiết dịch vụ";
    if (id) {
      // Gọi API mới với id
      getServiceById(id)
        .then((data) => {
          if (data) {
            setService(data); // Cập nhật dữ liệu dịch vụ
            window.scrollTo(0, 0);
          } else {
            setService(null);
          }
        })
        .catch((error) => {
          console.error("Lỗi khi tải dịch vụ:", error);
          setService(null);
        });
    }
  }, [id]);

  if (service) {
    return (
      <>
        <Header />
        <div className="container">
          <h1 className="text-success text-center mt-5">Chi tiết dịch vụ</h1>
          <div className="container">
            <div className="row container-post-row">
              <h2 className="text-danger col">{service.name}</h2>
            </div>
            <div className="text-center mt-3 mb-3">
              <Image
                className="image-width"
                src={getImage(service.imageUrl)} // Hiển thị ảnh từ API mới
              />
            </div>
            <h5 className="text-success">{service.shortDescription || ""}</h5>
            <p>{service.description || "Không có mô tả"}</p>
            <div>
              <FacebookShareButton
                url={`http://localhost:8080/service/${service.id}`}
                quote={service.name}
                hashtag="#spa"
              >
                <div className="text-primary">
                  Chia sẻ ngay <FacebookOutlined size={32} round />
                </div>
              </FacebookShareButton>
            </div>
            <div className="text-end">
              <Link to={`/service/booking`}>
                <div className="btn btn-success">Book now</div>
              </Link>
            </div>
            <div className="text-center mt-5">
              <Link
                className="text-success text-decoration-none"
                to={`/service`}
              >
                Xem thêm các dịch vụ khác
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  } else {
    return <div>Không tìm thấy dịch vụ!</div>;
  }
};

export default ServicePost;
