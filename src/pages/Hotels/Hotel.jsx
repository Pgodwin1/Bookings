import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Header from "../../components/Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import MailList from "../../components/mailList/MailLIst"
import Footer from "../../components/footer/Footer"
import "./Hotel.css"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocation } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Hotel = () => {
const [slider, setSlider] = useState(0)
const [open, setOpen] = useState(false)
  const photos = [
      { src: "https://www.richmondehotels.com.ph/wp-content/uploads/2023/07/ERH-Lobby-Main-Photo-Home-Page-scaled.jpg"
    },
      { src: "https://www.savills.co.uk/_images/adobestock-539646437.jpg"
    },
      { src: "https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/65045f093c166fdddb4a94a5_x-65045f0266217.webp"
    },
      { src: "https://images.propertypro.ng/large/affordable-and-luxurious-3-bedroom-shortlet-URFt0l1kL12U3Ere5Qo6.jpeg"
    },
      { src: "https://images.nigeriapropertycentre.com/properties/images/1218017/063d0dc6a2872e-1-bedroom-luxury-apartment-mini-flats-short-let-oniru-victoria-island-lagos.jpeg"
    },
      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbMUpVRde2s3HEd1-5D5_o2O_cLmKHCVLfum3vGTK3ew&s"
    },
      
  ];

  const handleOpen = (i) => {
      setSlider(i)
      setOpen(true)
  }

  const handleMove = (direction) => {
    let newSlider;

    if(direction === "l") {
       newSlider = slider === 0 ? 5 : slider -1
    } else{
      newSlider = slider === 5 ? 0 : slider +1
    }
    setSlider(newSlider)
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
       {open ? <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
            <div className="sliderWrapper">
              <img src={photos[slider].src} alt="" className="sliderImg" />
            </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
        </div> : ""}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocation}/>
            <span>Elton Street 123 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent Location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free aiport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i)=>(
              <div className="hotelImgWrapper">
                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
              Discover unparalleled luxury at our hotel, where sophistication meets comfort. Immerse yourself in exquisite accommodations, world-class amenities, and personalized service. Indulge in culinary delights, unwind in our spa, and experience the epitome of elegance. Whether for business or leisure, your stay promises an unforgettable blend of opulence and relaxation. Welcome to a refined escape.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>Located in the real heart of krakow, this property has an excellent location score of 9.8!</span>
              <h2>
                <b>$988</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <div className="mailist">
        <Footer />
        </div>
      </div>
    </div>
  )
}

export default Hotel