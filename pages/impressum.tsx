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
        <div className=' pt-16 pb-20 flex flex-col items-center bg-slate-900'>
            <div className=' flex flex-row justify-between gap-10 pl-5 pr-5 pt-10'>
                <div className=' flex flex-col max-w-[750px] pt-5 pr-5 pl-5 pb-5 gap-8'>
                    <h1>IMPRESSUM</h1>
                    <hr></hr>
                    <p><b>HCL.hr gaming portal</b> najveći je, najvažniji i najrelevantniji gaming portal u regiji. Naši autori svakodnevno 
                        vam donose svježe sadržaje iz industrije videoigara, tehnologije i svijeta zabave. Informiramo vas kroz 
                        originalne recenzije, iznosimo stavove u kolumnama i educiramo mlađe naraštaje igrača o povijesti videoigara.
                    </p>
                    <p >Cilj je naše gamerske misije slaviti videoigre i prenositi svoju ljubav prema igranju na sve generacije 
                        igrača i onih koji će to tek postati, neovisno o platformama i žanrovskim preferencijama. Nastojimo to činiti uz 
                        kvalitetne i unikatne sadržaje u pisanom i video obliku, ostvarujući pritom dvosmjernu komunikaciju sa svojim posjetiteljima, 
                        čitateljima i gledateljima kako bi HCL.hr ostao najveće okupljalište ljubitelja videoigara i popularne kulture.
                    </p>
                    <div className=" flex flex-col gap-2">
                        <h2>UREDNIŠTVO</h2>
                            <p ><b>Glavni urednik:</b> Igor Belan{'\n'}</p>
                            <p ><b>Izvršni urednik:</b> Zoran Žalac</p>
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
                        <h2>ESPORT I EVENTI</h2>
                        <p>Miroslav Pervan</p>
                        <p>Ivor Ivošević</p>
                        <p>Filip Marić</p>
                        <p>Matija Čukelj</p>
                        <p>Dona Šeruga</p>
                        <p>Za više informacija o našim uslugama organizacija esport i 
                                 gaming evenata posjetite našu <Link href="/organizacija-esport-natjecanja-gaming-eventi/" className=" text-main-orange hover:underline font-semibold">esport & event stranicu</Link>.
                        </p>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <h2 >MARKETING I OGLAŠAVANJE</h2>
                        <p >Za više informacija o mogućnostima oglašavanja na HCL portalu provjerite <Link href="/oglasavanje" className=" text-main-orange hover:underline font-semibold">stranicu za oglašavanje</Link>.</p>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <h2 >MASKOTA PORTALA</h2>
                        <div className=" mx-auto text-center">
                            <p>Legendarni dabar Đuka</p>
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