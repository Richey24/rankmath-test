import "./Homepage.css"
import Header from '../components/homepage/Header'
import Balance from "../components/homepage/Balance"
import Graph from "../components/homepage/Graph"
import Buy from "../components/homepage/Buy"
import Footer from "../components/homepage/Footer"

const Homepage = () => {
    return (
        <div className="homepageDiv">
            <Header />
            <div className="overflowDiv">
                <Balance />
                <Graph />
                <Buy />
            </div>
            <Footer />
        </div>
    )
}

export default Homepage