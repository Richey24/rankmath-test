import "./Balance.css"
import bitcoinImage from "../../img/Bitcoin.png"
import downImage from "../../img/down.png"
import { useState } from "react"

const Balance = () => {
    const [active, setActive] = useState("week")

    const toggleSortDiv = () => {
        document.getElementById("sortDiv").classList.toggle("showSortDiv")
    }

    return (
        <div>
            <div className="bitcoinMainDiv">
                <div className="bitcoinImageDiv">
                    <div><img src={bitcoinImage} alt="" /> Bitcoin</div>
                    <p>BTC</p>
                </div>
                <h1 className="btcAmt">3.529020 BTC</h1>
                <div className="dollarAmt">
                    <h4>$19,152 USD</h4>
                    <div>-2.32%</div>
                </div>
                <div className="downImageDiv">
                    <img onClick={toggleSortDiv} className="downImage" src={downImage} alt="" />
                </div>
            </div>
            <div id="sortDiv" className="sortDiv">
                <p onClick={() => setActive("day")} className={active === "day" ? "activeSort" : ""}>Day</p>
                <p onClick={() => setActive("week")} className={active === "week" ? "activeSort" : ""}>Week</p>
                <p onClick={() => setActive("month")} className={active === "month" ? "activeSort" : ""}>Month</p>
                <p onClick={() => setActive("year")} className={active === "year" ? "activeSort" : ""}>Year</p>
            </div>
        </div>
    )
}

export default Balance