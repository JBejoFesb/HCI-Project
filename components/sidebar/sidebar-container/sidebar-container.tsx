import React from "react";

export interface ISidebarContainer {

}

const SidebarContainer: React.FC<ISidebarContainer> = ({}) => {
    return (
        <div className=" flex flex-col mx-auto bg-red-600 w-96 h-fit">
            TESTING SIDEBAR
        </div>
    );
}

export default SidebarContainer;