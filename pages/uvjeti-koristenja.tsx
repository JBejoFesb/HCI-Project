import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Head from "next/head";
import SidebarContainer from "../components/sidebar/sidebar-container/sidebar-container";
import Link from "next/link";

export interface ITermsOfUse {

}

const TermsOfUse: React.FC<ITermsOfUse> = ({}) => {
    return (
        <>
        <Head>
            <title>HCL Uvjeti korištenja</title>
        </Head>
        <Header />
        <div className=' pt-16 pb-20 flex flex-col items-center bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900'>
            <div className=' flex flex-row justify-between gap-10 pl-5 pr-5 pt-10'>
                <div className=' flex flex-col bg-dirty-white rounded-[32px] max-w-[800px] text-dark-text pt-5 pr-5 pl-5 pb-5 gap-8'>
                    <h1 className=" font-bold text-3xl leading-6">UVJETI KORIŠTENJA</h1>
                    <hr className=" border-[1px] border-black"></hr>
                    <p className=" text-xl text-dark-text leading-7">
                        <b>Dobrodošli na stranice HCL.hr portala!</b>
                    </p>
                    <p className=" text-xl text-dark-text leading-7">
                        Altha d.o.o. (dalje u tekstu samo ‘HCL’) kao nakladnik HCL portala na web adresi www.hcl.hr vam omogućuje 
                        korištenje HCL portala te svih njegovih dijelova i poddomena (minecraft.hcl.hr, www.hcl.hr/forum/, itd.) 
                        isključivo u skladu s ovim Uvjetima korištenja. Smatra se da su korisnici kontinuiranim korištenjem HCL portala ili 
                        bilo kojeg njegovog dijela u svakom trenutku upoznati s ovim Uvjetima korištenja te da su ih prihvatili i razumjeli u cijelosti.
                    </p>
                    <div className=" flex flex-col gap-3">
                        <h2 className=" font-bold text-2xl pl-2 border-l-4 border-main-orange">SADRŽAJ HCL PORTALA</h2>
                        <p className=" text-xl text-dark-text leading-7">
                            HCL svojim posjetiteljima u dobroj namjeri osigurava korištenje svih sadržaja HCL portala. 
                            Svi posjetitelji imaju pravo koristiti sadržaje HCL portala ukoliko ne krše ovdje predstavljene 
                            Uvjete korištenja. Sadržaji HCL portala sastoje se od vlastitih autorskih sadržaja, sadržaja partnera i oglašivača, 
                            sadržaja kreiranih od strane posjetitelja te linkova na vanjske stranice. HCL portal sve autorske sadržaje objavljuje u 
                            dobroj namjeri s općenitim ciljem informiranja i zabave. Sve sadržaje HCL portala koristite na vlastitu odgovornost i HCL se 
                            ne može smatrati odgovornim za bilo kakvu štetu nastalu korištenjem autorskog ili korisničkog sadržaja, odnosno usluga, servisa i 
                            mogućnosti HCL portala. Korištenje usluga i registracije na HCL portal odobrava se punoljetnim osobama. Uporaba i korištenje 
                            od strane maloljetnika dozvoljena je samo uz nadzor roditelja i/ili skrbnika te su isti dužni o tome voditi računa, a HCL ne 
                            odgovara za eventualne posljedice takvog korištenja. HCL zadržava pravo promjene te privremenog ili trajnog ukidanja bilo kojeg 
                            sadržaja ili usluge na HCL portalu bez prethodne najave.
                        </p>
                    </div>
                    <div className=" flex flex-col gap-3">
                        <h2 className=" font-bold text-2xl pl-2 border-l-4 border-main-orange">AUTORSKA PRAVA</h2>
                        <p className=" text-xl text-dark-text leading-7">
                        HCL polaže autorska prava na sve vlastite autorske sadržaje (tekstualne, vizualne, video i audio materijale, baze podataka i programerski kod) 
                        objavljene na HCL portalu. Neovlašteno kopiranje ili korištenje bilo kojeg dijela portala smatra se kršenjem autorskih prava HCL-a i 
                        podložno je tužbi. Neovlašteno kopiranje i korištenje bilo kojeg dijela portala bez dozvole vlasnika autorskih prava (HCL, partneri, korisnici…) 
                        smatra se kršenjem autorskih prava i podložno je tužbi. Tiskani i elektronički mediji smiju prenositi autorska djela s HCL portala isključivo
                        uz <Link href='/kontakt' className=" text-main-orange hover:underline font-semibold">prethodno dopuštenje HCL-a</Link>.
                        Ukoliko smatrate da je HCL povrijedio Vaša autorska prava možete nas kontaktirati na e-mail <Link href='mailto:info@hcl.hr' className=" text-main-orange hover:underline font-semibold">info@hcl.hr</Link>, slučaj 
                        će biti odmah razmotren, a sporni sadržaji bit će uklonjeni odmah po eventualnom ustanovljavanju istinitosti sadržaja žalbe.
                        </p>
                    </div>
                    <div className=" flex flex-col gap-3">
                        <h2 className=" font-bold text-2xl pl-2 border-l-4 border-main-orange">AUTORSKA PRAVA</h2>
                        <p className=" text-xl text-dark-text leading-7">
                            Prilikom otvaranja korisničkog računa, odnosno registracijom na HCL portal, korisnici moraju proći kroz postupak registracije, 
                            unijeti podatke nužne za sustav registriranja koji uključuju e-mail, korisničko ime i zaporku, te prihvatiti ove Uvjete korištenja 
                            kojima ujedno prihvaćaju i <Link href="https://www.hcl.hr/forum/popis-pravila" className=" text-main-orange hover:underline font-semibold">Pravila ponašanja korisnika na HCL portalu</Link> kao službeni dodatak ovim Uvjetima korištenja. Korisnici su dužni
                            unijeti istinite podatke te su slobodni izabrati i upisati korisničko ime koje žele ako je ono slobodno (nije zauzeto od strane drugog korisnika), 
                            no HCL zadržava pravo onemogućavanja pristupa (odnosno ‘bana’) korisniku koji izabere korisničko ime koje je očito uvredljivo, neistinito ili na 
                            neki način varljivo (primjerice, iznimno slično nekom drugom korisniku).
                        </p>
                        <p className=" text-xl text-dark-text leading-7">
                            HCL može registriranim korisnicima povremeno poslati obavijesti vezane uz funkcionalnost i sadržaj HCL portala, a korisnički račun na 
                            HCL portalu omogućuje korisnicima da kroz integrirani sustav obavijesti HCL portala prate kada su dobili privatnu poruku od drugog korisnika 
                            ili dobili odgovor na raspravu u kojoj su sudjelovali. Nakon registracije s nužnim podacima (koji uključuju e-mail adresu, korisničko ime i zaporku), 
                            registrirani korisnici imaju mogućnost uređivanja svog profila na HCL portalu s dodatnim informacijama o sebi kako bi se bolje približili ostatku 
                            zajednice korisnika na HCL portalu. HCL ne obrađuje te dodatne podatke već oni služe samo za lakše i kvalitetnije komuniciranje između korisnika na 
                            HCL portalu. HCL ne zahtjeva da korisnici ispune ta dodatna polja u profilu, ona nisu potrebna za funkcionalnost sustava komentara na HCL portalu. 
                            Korisnici ta dodatna polja mogu ispuniti isključivo na vlastitu odgovornost i pridržavajući se pritom ovih Uvjeta korištenja. Svi registrirani korisnici 
                            mogu sami urediti i ukloniti određene podatke s vlastitog profila, a u slučaju da žele izbrisati ili značajnije promijeniti svoj korisnički račun mogu 
                            kontaktirati administratora na <Link href="mailto:info@hcl.hr" className=" text-main-orange hover:underline font-semibold">info@hcl.hr</Link>.
                        </p>
                        <h3 className=" font-bold text-xl text-dark-text">KORIŠTENJE HCL FORUMA I KOMENTARA NA PORTALU</h3>
                        <p className=" text-xl text-dark-text leading-7">
                            HCL Forum te mogućnost komentiranja članaka na HCL portalu je besplatna usluga koja omogućuje komunikaciju između 
                            registriranih korisnika HCL-a i regulirana je <b>ovim Uvjetima korištenja</b>, našom Politikom privatnosti te Pravilima ponašanja korisnika. 
                            Svi registrirani korisnici su obvezni pročitati i razumjeti ove uvjete korištenja te pravila ponašanja prilikom komentiranja na HCL portalu i 
                            HCL forumu te se ponašati u skladu s istima. Isto vrijedi i za mogućnost korisničkog ocjenjivanja igara gdje nije dopušteno namjerno davati 
                            nerealne ocjene s ciljem snižavanja ili povećanja prosječne ocjene na štetu svih korisnika koji dolaze na HCL vidjeti realne korisničke ocjene 
                            videoigara. HCL zadržava pravo da bez prethodnog upozorenja privremeno ili trajno onemogući pristup korisničkom računu korisnika za kojeg HCL 
                            ustanovi da krši pravila ponašanja, odnosno ove Uvjete korištenja.
                        </p>
                        <p className=" text-xl text-dark-text leading-7">
                            HCL nije ni na koji način odgovoran za sadržaje koje objavljuju posjetitelji kroz sustav komentara HCL portala ili korištenjem HCL 
                            foruma. Za sve objavljene sadržaje pod pojedinim korisničkim imenom odgovoran je isključivo sâm korisnik. HCL je dužan po utvrđivanju 
                            opravdanosti eventualne prijave u razumnom roku ukloniti sadržaje korisnika koji nisu u skladu s važećim zakonima ili Uvjetima korištenja 
                            HCL portala. Korisnik je dužan odmah prijaviti HCL-u neovlašteno korištenje njegovog korisničkog računa. HCL se ne može držati odgovornim za 
                            neovlašteno korištenje korisničkih računa korisnika, niti eventualnu štetu nastalu na taj način. Svaki korisnički račun zahtjeva inicijalu 
                            aktivaciju putem e-maila, a HCL zadržava pravo brisanja korisničkog računa koji nije aktiviran 365 dana ili više.
                        </p>
                    </div>
                    <div className=" flex flex-col gap-3">
                        <h2 className=" font-bold text-2xl pl-2 border-l-4 border-main-orange">LINKOVI NA VANJSKE STRANICE</h2>
                        <p className=" text-xl text-dark-text leading-7">
                            HCL na svojim stranicama sadržava linkove na web stranice izvan vlastitog portala. HCL takve 
                            linkove objavljuje u dobroj namjeri i ne može se smatrati odgovornim za sadržaje izvan portala.
                        </p>
                    </div>
                    <div className=" flex flex-col gap-3">
                        <h2 className=" font-bold text-2xl pl-2 border-l-4 border-main-orange">PODACI KORISNIKA</h2>
                        <p className=" text-xl text-dark-text leading-7">
                            HCL se obvezuje učiniti sve u svojoj mogućnosti da zaštiti podatke korisnika HCL portala. HCL se obvezuje da 
                            će u dobroj namjeri koristiti osobne podatke dobivene od korisnika tijekom korištenja HCL portala te da ih neće 
                            distribuirati ni na koji način trećim stranama, osim uz izričitu dozvolu korisnika. HCL može u skladu sa zakonom prikupljati 
                            određene podatke o korisnicima dobivene tijekom korištenja portala ili podatke unesene u postupku registracije. Ove podatke HCL primarno 
                            koristi kako bi dobio jasniju sliku o posjećenosti HCL portala, odnosno korisnicima koji koriste HCL portal te na taj način poboljšao 
                            portal i njegove sadržaje, uključujući sustav oglašavanja, dodatno usmjerio te prilagodio publici koja ga posjećuje. HCL se obavezuje da 
                            će čuvati privatnost korisnika portala, osim u slučaju teškog kršenja Uvjeta korištenja HCL portala, odnosno nezakonitih aktivnosti pojedinih korisnika. 
                        </p>
                        <p className=" text-xl text-dark-text leading-7">
                            Za više detalja o principima, metodama i tehnologijama koje HCL koristi prilikom prikupljanja i obrade podataka o svojim korisnicima 
                            provjerite stranicu Politika privatnosti koja je važan dio ovih Uvjeta korištenja.
                        </p>
                    </div>
                    <div className=" flex flex-col gap-3">
                        <h2 className=" font-bold text-2xl pl-2 border-l-4 border-main-orange">MODIFICIRANJE I PROMJENE UVJETA KORIŠTENJA</h2>
                        <p className=" text-xl text-dark-text leading-7">
                            HCL zadržava pravo da bez najave povremeno promijeni ili modificira ove Uvjete korištenja i Pravila ponašanja. 
                            O važnim promjenama i dopunama HCL može obavijestiti korisnike putem e-maila ili objavljivanjem na portalu. Korištenjem bilo 
                            kojeg sadržaja na HCL portalu smatra se da ste upoznati s najnovijim Uvjetima korištenja, Pravilima ponašanja te Politikom privatnosti.
                        </p>
                    </div>
                </div>
                <SidebarContainer data={[]} widgets={true}/>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default TermsOfUse;