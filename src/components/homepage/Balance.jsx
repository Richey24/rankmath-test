import "./Balance.css"
import bitcoinImage from "../../img/Bitcoin.png"
import downImage from "../../img/down.png"
import { useState } from "react"

const Balance = ({ setNum }) => {
    const [active, setActive] = useState("week")

    const toggleFx = () => {
        document.getElementById("bitcoinMainDiv").classList.toggle("showFx")
    }

    const switchSort = (val, num) => {
        setActive(val)
        setNum(num)
    }

    return (
        <div>
            <div id="bitcoinMainDiv" className="bitcoinMainDiv">
                <div className="bitcoinImageDiv">
                    <div><img src={bitcoinImage} alt="" /> Bitcoin</div>
                    <p>BTC</p>
                </div>
                <h1 className="btcAmt">3.529020 BTC</h1>
                <div className="dollarAmt">
                    <h4>$19,152 USD</h4>
                    <div>-2.32%</div>
                </div>
                <div onClick={toggleFx} className="downImageDiv">
                    <img className="downImage" src={downImage} alt="" />
                </div>
                <div className="fxButton">
                    <button>Buy</button>
                    <button>Sell</button>
                </div>
            </div>
            <div className="sortDiv">
                <p onClick={() => switchSort("day", 2)} className={active === "day" ? "activeSort" : ""}>Day</p>
                <p onClick={() => switchSort("week", 4)} className={active === "week" ? "activeSort" : ""}>Week</p>
                <p onClick={() => switchSort("month", 6)} className={active === "month" ? "activeSort" : ""}>Month</p>
                <p onClick={() => switchSort("year", 8)} className={active === "year" ? "activeSort" : ""}>Year</p>
            </div>
        </div>
    )
}

export default Balance