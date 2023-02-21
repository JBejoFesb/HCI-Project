import React from "react";
import SidebarContainer from "../components/sidebar/sidebar-container/sidebar-container";
import Link from "next/link";
import Layout from "../layouts/Layout";

export interface IContact {

}

const Contact: React.FC<IContact> = ({}) => {
    return (
        <Layout title='HCL Kontakt'>
        <div className=' pt-16 pb-20 flex flex-col items-center bg-slate-900 min-h-[77vh]'>
            <div className=' flex flex-row justify-between gap-10 pl-5 pr-5 pt-10'>
                <div className=' flex flex-col max-w-[750px] text-dark-text pt-5 pr-5 pl-5 pb-5 gap-8'>
                    <h1>KONTAKT</h1>
                    <hr></hr>
                    <p>Bilo da ste naš vjerni čitatelj s vrećom pohvala, zainteresirani oglašivač ili 
                        jednostavno čovjek s idejom za suradnju s našim krasnim gaming portalom, očekujemo sve vaše e-poruke s veseljem.
                    </p>
                    <p>Želite vidjeti svoje članke na HCL-u? Za sve takve i slične upite kontaktirajte 
                        našeg glavnog urednika, Igora Belana, na e-mail adresu <Link href='mailto:igor@hcl.hr' className=" text-main-orange hover:underline font-semibold">igor@hcl.hr</Link>.
                    </p>
                    <p>PR objave i dojave novinarskoj ekipi HCL-a šaljite na <Link href='mailto:info@hcl.hr' className=" text-main-orange hover:underline font-semibold">info@hcl.hr</Link>, a za upite o 
                        oglašavanju na HCL-u pročitajte osnovne informacije <Link href='/oglasavanje' className=" text-main-orange hover:underline font-semibold">ovdje</Link> i 
                        kontaktirajte nas putem adrese marketing@hcl.hr.
                    </p>
                </div>
                <SidebarContainer data={[]} widgets={true}/>
            </div>
        </div>
        </Layout>
    );
}

export default Contact;