import React, { lazy } from "react";

export interface IYoutubeEmbed {
    embedId: string | null,
}

const YoutubeEmbed: React.FC<IYoutubeEmbed> = ({ embedId }) => {
    return (
        <>
        {
            (embedId != null) && <div className="video-responsive">
                <iframe
                src={`https://www.youtube.com/embed/${embedId}`}
                width='100%'
                height='440px'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                />
                </div>
        }
        </>
    );
};
    

export default YoutubeEmbed;
