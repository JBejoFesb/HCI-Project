import React from "react";
import style from "./footer.module.css";
import Link from 'next/link';
import HCLlogo from "../../public/images/icons/HCLtransparent.png";
import Youtube from "../../public/images/icons/youtube-svgrepo-com.svg";
import Discord from "../../public/images/icons/discord-icon-svgrepo-com.svg";
import Steam from "../../public/images/icons/steam-svgrepo-com.svg";
import Facebook from "../../public/images/icons/facebook-svgrepo-com.svg";
import Twitter from "../../public/images/icons/twitter-svgrepo-com.svg";
import Image from "next/image";

const Footer = () => {
    return(
        <div className={style.footer}>
            <div className={style.footer_links}>
                <Link className={style.flogo} href="/"><Image src={HCLlogo.src} alt="HCL logo" fill/></Link>
                <div className={style.socials}>
                    <Link className={style.fsvg} href="https://www.youtube.com/user/HCLGamingPortal"><Image  src={Youtube.src} alt="youtube" fill/></Link>
                    <Link className={style.fsvg} href="https://discord.gg/Pgxr7urhWb"><Image src={Discord.src} alt="discord" fill/></Link>
                    <Link className={style.fsvg} href="https://steamcommunity.com/groups/hcl"><Image src={Steam.src} alt="steam" fill/></Link>
                    <Link className={style.fsvg} href="https://www.facebook.com/HCLgaming"><Image src={Facebook.src} alt="facebook" fill/></Link>
                    <Link className={style.fsvg} href="https://twitter.com/hclhr/"><Image  src={Twitter.src} alt="twitter" fill/></Link>
                </div>
                <ul className={style.finfo}>
                    <li><Link href="/kontakt">Kontakt</Link></li>
                    <li><Link href="/impressum/">Impressum</Link></li>
                    <li><Link href="/oglasavanje/">Oglašavanje</Link></li>
                    <li><Link href="/under-construction/">Esport i eventi</Link></li>
                    <li><Link href="/uvjeti-koristenja/">Uvjeti korištenja</Link></li>
                </ul>
            </div>
            <div className={style.p}>Hvala što koristite kolačiće za bolje iskustvo na HCL-u. Koje kolačiće HCL koristi i kako ih ugasiti?</div>
            <div className={style.p2}>© 2005 - 2023 HCL.hr - Sva prava pridržana.</div>
        </div>
    );
}

export default Footer;