import "./Service.scss";
import Star from "./../../assets/service/star.svg";
import leftArrow from "./../../assets/service/left_arrow.svg";
import rightArrow from "./../../assets/service/right_arrow.svg";
import userProfilePhoto from "./../../assets/service/user_profile_photo.webp";
import servicePic_01 from "./../../assets/service/servicePic_01.png";
import servicePic_02 from "./../../assets/service/servicePic_02.png";
import servicePic_03 from "./../../assets/service/servicePic_03.png";
import servicePic_04 from "./../../assets/service/servicePic_04.png";
import servicePic_05 from "./../../assets/service/servicePic_05.png";

const Service = () => {
  return (
    <div className="Service">
      <div className="Service_navbar">{/* import it here */}</div>
      <div className="Service_body">
        <div className="Left_side">
          <div className="Overview">
            <div className="Info_box">
              <div className="catagory">Life Coaching</div>
              <div className="title">
                I will be your life coach and accountability coach
              </div>
              <div className="profile_Info">
                <img src={userProfilePhoto} alt="" />
                <div className="username">pedro10</div>
                <div className="level">
                  Level <span className="seller_level">2</span> Seller |
                </div>
                <div className="rating">
                  <div className="stars">
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                  </div>
                  <span className="avg_rating">5</span>
                  <span className="num_of_orders">({"104"})</span>
                </div>
                <div className="orders_in_Queue">
                  <span className="nbr_of_OrdersInQueue">{"8"}</span> Orders in
                  Queue
                </div>
              </div>
            </div>
            <div className="Slider">
              <div className="left_arrow">
                <img src={leftArrow} alt="" />
              </div>
              <div className="service_image">
                <img src={servicePic_01} alt="" />
              </div>
              <div className="right_arrow">
                <img src={rightArrow} alt="" />
              </div>
            </div>
            <div className="Highlights">
              <img src={servicePic_01} alt="" />
              <img src={servicePic_02} alt="" />
              <img src={servicePic_03} alt="" />
              <img src={servicePic_04} alt="" />
              <img src={servicePic_05} alt="" />
            </div>
            <div className="Review_slider"></div>
          </div>
          <div className="Description"></div>
          <div className="About_the_seller"></div>
          <div className="Compare_packages"></div>
          <div className="Recommendations"></div>
          <div className="FAQ"></div>
          <div className="Reviews"></div>
        </div>
        <div className="Right_side">
          <div className="Plans_Wrapper"></div>
          <div className="Contact_seller_btn">
            <button>Contact Seller</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
