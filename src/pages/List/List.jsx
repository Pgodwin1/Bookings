import "./List.css"
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'

const List = () => {
  return (
    <div>
        <Navbar/>
        <Header type="list" />
        <div className="listContainer">
          <div className="listWrapper">
            <div className="listSearch">
              <h1 className="lsTitle">Search</h1>
            </div>
            <div className="listResult"></div>
          </div>
        </div>
    </div>
  )
}

export default List