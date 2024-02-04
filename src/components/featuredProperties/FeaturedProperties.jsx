import "./FeaturedProperties.css"

const FeaturedProperties = () => {
  return (
    <div className='fp'>
        <div className="fpItem">
            <img src="https://y.cdrst.com/foto/hotel-sf/50875/granderesp/aparthotel-stare-miasto-general-fdb764f.jpg" alt="" className="fpImg" />
            <span className="fpName">ApartHotel stare miasto</span>
            <span className="fpCity">Madrid</span>
            <span className="fpPrice">Starting from $120</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://media.cntraveler.com/photos/5a679c1c3f3324169656b9ad/master/w_1600%2Cc_limitThe-Ritz-Carlton%2C-San-Francisco_Courtesy_2018One-Bedroom-Suite.jpg" alt="h" className="fpImg" />
            <span className="fpName">The Ritz-carlton </span>
            <span className="fpCity">San Francisco</span>
            <span className="fpPrice">Starting from $120</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://media.cntraveler.com/photos/5f678a667193f8759c50da00/master/w_1600%2Cc_limit/totel-d'angleterre-geneva-Bellevue-Suite.jpg" alt="h" className="fpImg" />
            <span className="fpName">Hotel d'Angleterre</span>
            <span className="fpCity">Geneva</span>
            <span className="fpPrice">Starting from $120</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://media.cntraveler.com/photos/651c5897c0888feaf67ddee2/master/w_1600%2Cc_limit/Geneve.png" alt="h" className="fpImg" />
            <span className="fpName">Beau-Rivage</span>
            <span className="fpCity">Geneva</span>
            <span className="fpPrice">Starting from $120</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://media.cntraveler.com/photos/5d82914187e08700090f2d64/master/w_1600%2Cc_limit/The-Pearl-Hotel---Signature-Aerial-(2).jpg" alt="h" className="fpImg" />
            <span className="fpName">The Pearl Hotel</span>
            <span className="fpCity">Florida</span>
            <span className="fpPrice">Starting from $120</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProperties;