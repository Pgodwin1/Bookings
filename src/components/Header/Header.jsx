import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateRange } from 'react-date-range';
import "./Header.css"
import { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {format} from 'date-fns';
import { useNavigate } from 'react-router-dom';


const Header = ({type}) => {
    const [openDate, setOpenDate] = useState(false)
    const [destination, setDestination] = useState("")
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
 
      const [openOptions, setOpenOptions] = useState(false)
      const [options, setOptions] = useState({
        adult:1,
        children:0,
        rooms:1
      })

      const navigate = useNavigate()
        const handleOptions = (name, operation) => {
            setOptions(prev=>{return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            }
        })
    }

    const handleSearch = () => {
      navigate("/list", { state: {destination, date, options }})
    }
    return (
        <div className='header'>
            <div className={type === "list" ? "headerContainer listmode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Fligths</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxi</span>
                    </div>
                </div>
                { type !== "list" ? 
                    <>
                    <h1 className="headerTitle">A lifetime of discounts? it's Genius.</h1>
                <p className="headerDesc">Get rewarded for your travels unlock instant savings of 10% or more with a free shawnbookings account</p>
                <button className="headerBtn">Sign Up / Register</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className='headerIcon' />
                        <input type="text" placeholder='Where are you going?' className='headerSearchInput' 
                        onChange={e=>setDestination(e.target.value)}/>
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' id='icon' />
                        <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, "dd/mm/yyyy")} to ${format(date[0].endDate, "dd/mm/yyyy")}`}</span>
                       { openDate ? <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className='date'
                            minDate={new Date()}
                        /> : ""}
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                        <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult ~ ${options.children} children ~ ${options.rooms} room`}</span>
                        {openOptions ? <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adult</span>
                                <div className="optionCounter">
                                    <button disabled={options.adult <= 1} className="optionCounterButton" onClick={() => handleOptions("adult", "d")}>-</button>
                                    <span className="optionCounterNumber">{options.adult}</span>
                                    <button className="optionCounterButton" onClick={() => handleOptions("adult", "i")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <div className="optionCounter">
                                    <button disabled={options.children <= 0} className="optionCounterButton" onClick={() => handleOptions("children", "d")}>-</button>
                                    <span className="optionCounterNumber">{options.children}</span>
                                    <button className="optionCounterButton" onClick={() => handleOptions("children", "i")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Rooms</span>
                                <div className="optionCounter">
                                    <button disabled={options.rooms <= 1} className="optionCounterButton" onClick={() => handleOptions("rooms", "d")}>-</button>
                                    <span className="optionCounterNumber">{options.rooms}</span>
                                    <button className="optionCounterButton" onClick={() => handleOptions("rooms", "i")}>+</button>
                                </div>
                            </div>
                        </div> : ""}
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn" onClick={handleSearch}>Search</button>
                    </div>
                </div>
                </> : ""}
            </div>
        </div>
    )
}

export default Header;