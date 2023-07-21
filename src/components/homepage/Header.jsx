import "./Header.css"
import backImage from "../../img/back.png"
import editImage from "../../img/edit.png"
import infoImage from "../../img/info.png"
import shareImage from "../../img/share.png"
import removeImage from "../../img/remove.png"

const Header = () => {

    const toggleDropdown = () => {
        document.getElementById("dropDown").classList.toggle("showDiv")
        document.getElementById("threeDot").classList.toggle("threeDotRow")
        document.getElementById("blurDiv").classList.toggle("showBlur")
    }

    return (
        <div className="mainHeader">
            <img src={backImage} alt="back buttom" />
            <h4>Bitcoin Wallet</h4>
            <div>
                <div id="threeDot" onClick={toggleDropdown} className="threeDot">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div id="dropDown" className="dropDown">
                    <div>Edit <img src={editImage} alt="edit" /></div>
                    <div>Courier Info <img src={infoImage} alt="edit" /></div>
                    <div>Share <img src={shareImage} alt="edit" /></div>
                    <div>Remove <img src={removeImage} alt="edit" /></div>
                </div>
            </div>
        </div>
    )
}

export default Header