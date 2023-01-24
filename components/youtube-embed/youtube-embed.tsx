import React from "react";

export interface IYoutubeEmbed {
    embedId: string | null,
}

const YoutubeEmbed: React.FC<IYoutubeEmbed> = ({ embedId }) => {
    return (
        <>
        {
            (embedId != null) && <div className="video-responsive">
                <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
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
