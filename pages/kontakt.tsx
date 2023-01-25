import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Head from "next/head";
import SidebarContainer from "../components/sidebar/sidebar-container/sidebar-container";
import Link from "next/link";

export interface IContact {

}

const Contact: React.FC<IContact> = ({}) => {
    return (
        <>
        <Head>
            <title>HCL Kontakt</title>
        </Head>
        <Header />
        <div className=' pt-16 pb-20 flex flex-col items-center bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 min-h-[77vh]'>
            <div className=' flex flex-row justify-between gap-10 pl-5 pr-5 pt-10'>
                <div className=' flex flex-col bg-dirty-white rounded-[30px] max-w-[800px] text-dark-text pt-5 pr-5 pl-5 pb-5 gap-8'>
                    <h1 className=" font-bold text-3xl leading-6">KONTAKT</h1>
                    <hr className=" border-[1px] border-black"></hr>
                    <p className=" text-xl text-dark-text leading-7">Bilo da ste naš vjerni čitatelj s vrećom pohvala, zainteresirani oglašivač ili 
                        jednostavno čovjek s idejom za suradnju s našim krasnim gaming portalom, očekujemo sve vaše e-poruke s veseljem.
                    </p>
                    <p className=" text-xl text-dark-text leading-7">Želite vidjeti svoje članke na HCL-u? Za sve takve i slične upite kontaktirajte 
                        našeg glavnog urednika, Igora Belana, na e-mail adresu igor@hcl.hr.
                    </p>
                    <p className=" text-xl text-dark-text leading-7">PR objave i dojave novinarskoj ekipi HCL-a šaljite na info@hcl.hr, a za upite o 
                        oglašavanju na HCL-u pročitajte osnovne informacije <Link href='/oglasavanje' className=" text-main-orange hover:underline font-semibold">ovdje</Link> i 
                        kontaktirajte nas putem adrese marketing@hcl.hr.
                    </p>
                </div>
                <SidebarContainer data={[]} widgets={true}/>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Contact;