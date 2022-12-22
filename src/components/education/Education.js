import React from "react";
import "./education.css";
import COTTON from "../../assets/cotton.jpg";
import SSVN from "../../assets/ssvn.jpg";
import { Pagination } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";


export default function Education() {
    SwiperCore.use([Autoplay])
  return (
    <section id="educations">
      <h2>My Education</h2>
      <Swiper pagination={true} modules={[Pagination]} loop={true} autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }} className="container education_container">
        <SwiperSlide className="education">
          <div className="education_avatar">
            <img src={SSVN} alt="cotton" />
          </div>
          <h4 className="education _name">Matriculation(2019)</h4>
          <small className="education_details">
          Sankardev Sishu Vidya Niketan, Ambari
          </small>
        </SwiperSlide>
        <SwiperSlide className="education">
          <div className="education_avatar">
            <img src={COTTON} alt="cotton" />
          </div>
          <h4 className="education _name">Higher Secondary(2021)</h4>
          <small className="education_details">
            Cotton University, PanBazaar, Assam
          </small>
        </SwiperSlide>
        <SwiperSlide className="education">
          <div className="education_avatar">
            <img src={COTTON} alt="cotton" />
          </div>
          <h4 className="education _name">BCA (2021-2024)</h4>
          <small className="education_details">
            Cotton University, PanBazaar, Assam
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
