import "./Featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/526000/526877-dublin.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>123 Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://s7d2.scene7.com/is/image/TWCNews/020522-texas-austin-city-river-getty_02062022" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Austin</h1>
                <h2>250 Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://incadventures.com/wp-content/uploads/2020/09/Reno-in-Snow-1400x1000.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Reno</h1>
                <h2>457 Properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured