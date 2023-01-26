import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Head from "next/head";
import SidebarContainer from "../components/sidebar/sidebar-container/sidebar-container";
import Link from "next/link";

export interface IAdvertising {

}

const Advertising: React.FC<IAdvertising> = ({}) => {
    return (
        <>
        <Head>
            <title>HCL Oglašavanje</title>
        </Head>
        <Header />
        <div className=' pt-16 pb-20 flex flex-col items-center bg-slate-900 min-h-[77vh]'>
            <div className=' flex flex-row justify-between gap-10 pl-5 pr-5 pt-10'>
                <div className=' flex flex-col  max-w-[750px] text-dark-text pt-5 pr-5 pl-5 pb-5 gap-8'>
                    <h1>OGLAŠAVANJE</h1>
                    <hr></hr>
                    <p>
                        HCL je najkompletniji, najopširniji, 
                        najdugovječniji i daleko najposjećeniji hrvatski portal o gaming kulturi i videoigrama općenito. 
                        Od osnutka 2005. godine uredništvo portala predano radi na jačanju i širenju lokalne zajednice ljubitelja videoigara 
                        kroz kvalitetan, zabavan i svakodnevno osvježen sadržaj, HCL forum te prisutnost na društvenim mrežama.
                    </p>
                    <p>
                        Tematika sadržaja portala varira od videoigara za 
                        sve platforme do hardvera povezanog uz gaming, bilo da govorimo o dodacima za konzole ili o PC komponentama. 
                        Također pokrivamo i teme povezane uz gaming, poput filmova bliske tematike, TV serija i raznih vrsta modernih gadgeta.
                    </p>
                    <p>
                        Prema <Link href="https://www.hcl.hr/vijest/ekskluzivno-otkrivamo-prve-rezultate-istrazivanja-gamera-u-hrvatskoj-43935/" 
                        >znanstvenom istraživanju</Link> provedenom na 3247 naših korisnika u listopadu 2014. godine u suradnji s Odjelom za sociologiju Sveučilišta u Zadru, 
                        naši posjetitelji su većinom muškarci (94%) pri čemu smo gotovo podjednako zanimljivi mlađima od 18 godina i starijima od 35, 
                        no najviše je onih između 19 i 25 godina. HCL portal u prosjeku ostvaruje preko 600 000 mjesečnih posjeta 
                        (Google Analytics) od posjetitelja iz Hrvatske, Srbije te Bosne i Hercegovine.
                    </p>
                    <p>
                        Detaljnije statistike posjećenosti HCL portala možete zatražiti na e-mail <Link href="mailto:marketing@hcl.hr" >marketing@hcl.hr</Link>, a upravo tamo očekujemo da ćete uputiti i vaše upite za oglašavanje.
                    </p>
                </div>
                <SidebarContainer data={[]} widgets={true}/>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Advertising;

