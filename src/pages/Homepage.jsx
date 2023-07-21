import "./Homepage.css"
import Header from '../components/homepage/Header'
import Balance from "../components/homepage/Balance"
import Graph from "../components/homepage/Graph"
import Buy from "../components/homepage/Buy"
import Footer from "../components/homepage/Footer"
import { useState } from "react"

const Homepage = () => {

    const [num, setNum] = useState(4)

    return (
        <div className="homepageDiv">
            <Header />
            <div className="overflowDiv">
                <Balance setNum={setNum} />
                <Graph num={num} />
                <Buy />
            </div>
            <Footer />
            <div id="blurDiv" className="blurDiv">

            </div>
        </div>
    )
}

export default Homepage