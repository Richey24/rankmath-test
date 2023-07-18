import "./Footer.css"
import walletImage from "../../img/wallet.png"
import compassImage from "../../img/compass.png"
import notificationImage from "../../img/notification.png"
import settingsImage from "../../img/settings.png"
import { useState } from "react"

const Footer = () => {

    const [active, setActive] = useState("wallet")

    return (
        <div className="mainFooter">
            <img onClick={() => setActive("wallet")} className={active === "wallet" ? "activeIcon" : ""} src={walletImage} alt="wallet" />
            <img onClick={() => setActive("compass")} className={active === "compass" ? "activeIcon" : ""} src={compassImage} alt="compass" />
            <img onClick={() => setActive("notification")} className={active === "notification" ? "activeIcon" : ""} src={notificationImage} alt="notification" />
            <img onClick={() => setActive("settings")} className={active === "settings" ? "activeIcon" : ""} src={settingsImage} alt="settings" />
        </div>
    )
}

export default Footer