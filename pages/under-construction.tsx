import React from "react"
import SidebarContainer from "../components/sidebar/sidebar-container/sidebar-container";
import Layout from "../layouts/Layout";

export interface IUnderConstruction {

}

const UnderConstruction: React.FC<IUnderConstruction> = ({}) => {
    return (
        <Layout title='HCL UNDER CONSTRUCTION'>
        <div className=' pt-16 pb-20 flex flex-col items-center bg-slate-900 min-h-[77vh]'>
            <div className=' flex flex-row justify-between gap-10 pl-5 pr-5 pt-10'>
                <div className=' flex flex-col max-w-[800px] text-dark-text pt-5 pr-5 pl-5 pb-5 gap-8'>
                    <p>!UNDER CONSTRUCTION!</p>
                </div>
                <SidebarContainer data={[]} widgets={true}/>
            </div>
        </div>
        </Layout>
    );
}

export default UnderConstruction;