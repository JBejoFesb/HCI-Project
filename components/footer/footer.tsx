import React from "react";
import style from "./footer.module.css";
import Link from 'next/link';
import HCLlogo from "../../public/images/icons/HCLtransparent.png";
import Youtube from "../../public/images/icons/youtube-svgrepo-com.svg";
import Discord from "../../public/images/icons/discord-icon-svgrepo-com.svg";
import Steam from "../../public/images/icons/steam-svgrepo-com.svg";
import Facebook from "../../public/images/icons/facebook-svgrepo-com.svg";
import Twitter from "../../public/images/icons/twitter-svgrepo-com.svg";

const Footer = () => {
    return(
        <div className={style.footer}>
            <div className={style.footer_links}>
                <Link href="/"><img className={style.flogo} src={HCLlogo.src} alt="HCL logo" /></Link>
                <div className={style.socials}>
                    <Link href="https://www.youtube.com/user/HCLGamingPortal"><img className={style.fsvg} src={Youtube.src} alt="youtube" /></Link>
                    <Link href="https://discord.gg/Pgxr7urhWb"><img className={style.fsvg} src={Discord.src} alt="discord" /></Link>
                    <Link href="https://steamcommunity.com/groups/hcl"><img className={style.fsvg} src={Steam.src} alt="steam" /></Link>
                    <Link href="https://www.facebook.com/HCLgaming"><img className={style.fsvg} src={Facebook.src} alt="facebook" /></Link>
                    <Link href="https://twitter.com/hclhr/"><img className={style.fsvg} src={Twitter.src} alt="twitter" /></Link>
                </div>
                <ul className={style.finfo}>
                    <li><Link href="https://www.hcl.hr/kontakt/">Kontakt</Link></li>
                    <li><Link href="https://www.hcl.hr/impressum/">Impressum</Link></li>
                    <li><Link href="https://www.hcl.hr/oglasavanje/">Oglašavanje</Link></li>
                    <li><Link href="https://www.hcl.hr/organizacija-esport-natjecanja-gaming-eventi/">Esport i eventi</Link></li>
                    <li><Link href="https://www.hcl.hr/uvjeti-koristenja/">Uvjeti korištenja</Link></li>
                </ul>
            </div>
            <div className={style.p}>Hvala što koristite kolačiće za bolje iskustvo na HCL-u. Koje kolačiće HCL koristi i kako ih ugasiti?</div>
            <div className={style.p2}>© 2005 - 2023 HCL.hr - Sva prava pridržana.</div>
        </div>
    );
}

export default Footer;