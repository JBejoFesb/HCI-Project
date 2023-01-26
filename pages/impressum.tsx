import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Head from "next/head";
import SidebarContainer from "../components/sidebar/sidebar-container/sidebar-container";
import Link from "next/link";
import Image from "next/image";

export interface IImpressum {

}

const Impressum: React.FC<IImpressum> = ({}) => {
    return (
        <>
        <Head>
            <title>HCL Impressum</title>
        </Head>
        <Header />
        <div className=' pt-16 pb-20 flex flex-col items-center bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900'>
            <div className=' flex flex-row justify-between gap-10 pl-5 pr-5 pt-10'>
                <div className=' flex flex-col bg-dirty-white rounded-[32px] max-w-[800px] text-dark-text pt-5 pr-5 pl-5 pb-5 gap-8'>
                    <h1 className=" font-bold text-3xl leading-6">IMPRESSUM</h1>
                    <hr className=" border-[1px] border-dark-text"></hr>
                    <p className=" text-xl text-dark-text leading-7"><b>HCL.hr gaming portal</b> najveći je, najvažniji i najrelevantniji gaming portal u regiji. Naši autori svakodnevno 
                        vam donose svježe sadržaje iz industrije videoigara, tehnologije i svijeta zabave. Informiramo vas kroz 
                        originalne recenzije, iznosimo stavove u kolumnama i educiramo mlađe naraštaje igrača o povijesti videoigara.
                    </p>
                    <p className=" text-xl text-dark-text leading-7">Cilj je naše gamerske misije slaviti videoigre i prenositi svoju ljubav prema igranju na sve generacije 
                        igrača i onih koji će to tek postati, neovisno o platformama i žanrovskim preferencijama. Nastojimo to činiti uz 
                        kvalitetne i unikatne sadržaje u pisanom i video obliku, ostvarujući pritom dvosmjernu komunikaciju sa svojim posjetiteljima, 
                        čitateljima i gledateljima kako bi HCL.hr ostao najveće okupljalište ljubitelja videoigara i popularne kulture.
                    </p>
                    <div className=" flex flex-col gap-2">
                        <h2 className=" font-bold text-2xl pl-2 border-l-4 border-main-orange">UREDNIŠTVO</h2>
                        <p className=" text-xl text-dark-text"><b>Glavni urednik:</b> Igor Belan{'\n'}</p>
                        <p className=" text-xl text-dark-text"><b>Izvršni urednik:</b> Zoran Žalac</p>
                    </div>
                    <div>
                        <h2>SURADNICI</h2>
                        <p>Stjepan Fikter</p>
                        <p>Žarko Ćurić</p>
                        <p>Hrvoje Smoljić</p>
                        <p>Ivan Brekalo</p>
                        <p>Filip Zorić</p>
                        <p>Lovro Maroševac</p>
                        <p>Iva Osrečak</p>
                        <p>Dominik Vadas</p>
                        <p>Matej Brus</p>
                        <p>Josip Klanfar</p>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <h2 className=" font-bold text-2xl pl-2 border-l-4 border-main-orange">ESPORT I EVENTI</h2>
                        <p className=" text-lg text-dark-text">Miroslav Pervan</p>
                        <p className=" text-lg text-dark-text">Ivor Ivošević</p>
                        <p className=" text-lg text-dark-text">Filip Marić</p>
                        <p className=" text-lg text-dark-text">Matija Čukelj</p>
                        <p className=" text-lg text-dark-text">Dona Šeruga</p>
                        <p className=" text-lg text-dark-text">Za više informacija o našim uslugama organizacija esport i 
                                 gaming evenata posjetite našu <Link href="/organizacija-esport-natjecanja-gaming-eventi/">esport & event stranicu</Link>.
                        </p>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <h2 className=" font-bold text-2xl pl-2 border-l-4 border-main-orange">MARKETING I OGLAŠAVANJE</h2>
                        <p className=" text-lg text-dark-text">Za više informacija o mogućnostima oglašavanja na HCL portalu provjerite <Link href="/oglasavanje" className=" text-main-orange hover:underline font-semibold">stranicu za oglašavanje</Link>.</p>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <h2 className=" font-bold text-2xl pl-2 border-l-4 border-main-orange">MASKOTA PORTALA</h2>
                        <div className=" mx-auto">
                            <p className=" text-center font-semibold text-lg text-dark-text pb-2">Legendarni dabar Đuka</p>
                            <Image src="/images/dabar-front-total-final-merged-mali2.png" alt="dabar" width="400" height="400" />
                        </div>
                    </div>
                </div>
                <SidebarContainer data={[]} widgets={true}/>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Impressum;