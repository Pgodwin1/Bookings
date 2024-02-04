import "./SearchItem.css"

const SearchItem = () => {
  return (
    <div className="SearchItem">
        <img src="" alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className="siDistance">500m from Center</span>
            <span className="siTaxiOp">Free Airport Taxi</span>
            <span className="siSubtitle">Studio Apartment with Air Conditioning</span>
            <span className="siFeatures">Entire Studio * 1 bathroom * 21m™ 1 full bed</span>
            <span className="siCancelOp">Free Cancellation</span>
            <span className="siCancelSubtitle">You can cancel later, so lock n this great price today!</span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
             <div className="siDetailText">
                <span className="siPrice">$500</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="siCheckButton">See Availability</button>
             </div>
        </div>
    </div>
  )
}

export default SearchItem