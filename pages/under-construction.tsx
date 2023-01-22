import Head from "next/head";
import React from "react"
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import SidebarContainer from "../components/sidebar/sidebar-container/sidebar-container";
import sidebarCards from "../static-data/sidebar-cards.json";

export interface IUnderConstruction {

}

const UnderConstruction: React.FC<IUnderConstruction> = ({}) => {
    return (
        <>
        <Head>
            <title>HCL UNDER CONSTRUCTION</title>
        </Head>
        <Header />
            <div className=' pt-16 pb-20 flex flex-col items-center bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900'>
                <div className=' flex flex-row justify-between gap-10 pl-5 pr-5 pt-10'>
                    <div className=' flex flex-col bg-dirty-white rounded-[30px] max-w-[800px] text-dark-text pt-5 pr-5 pl-5 pb-5 gap-8'>
                        <p>UNDER CONSTRUCTION</p>
                    </div>
                    <SidebarContainer data={sidebarCards.cards} widgets={false}/>
                </div>
            </div>
        <Footer />
        </>
    );
}

export default UnderConstruction;