import React from "react";
import CurrentNewsContainer from "../parts/current-news-container/current-news-container";

export interface ISidebarContainer {

}

const SidebarContainer: React.FC<ISidebarContainer> = ({}) => {
    return (
        <div className=" flex flex-col mx-auto w-96 h-fit">
            <CurrentNewsContainer data={[]} />
        </div>
    );
}

export default SidebarContainer;