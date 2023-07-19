import "./Buy.css"
import blueDollar from "../../img/blue-dollar.png"
import pinkDollar from "../../img/green-dollar.png"

const Buy = () => {
    return (
        <div className="buyMainDiv">
            <div>
                <img src={blueDollar} alt="blue dollar" />
                Buy BTC
            </div>
            <div>
                <img src={pinkDollar} alt="pink dollar" />
                Sell BTC
            </div>
        </div>
    )
}

export default Buy