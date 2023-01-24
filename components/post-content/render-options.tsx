import { BLOCKS, MARKS, INLINES, Document } from '@contentful/rich-text-types';
import YoutubeEmbed from "../youtube-embed/youtube-embed";

const renderOptions: any = (links: any) => {

    // asset map
    const assetMap = new Map();
    for (const asset of links.assets.block) {
        assetMap.set(asset.sys.id, asset);
    }

    // entry map - no inline entries
    const entryMap = new Map();
    for (const entry of links.entries.block) {
        entryMap.set(entry.sys.id, entry);
    }

    return {
        renderNode: {
            // clear empty p at the end of text
            [BLOCKS.LIST_ITEM]: (node: any, children: any) => {
                return <li>{children[0].props.children}</li>;
            },
            [BLOCKS.PARAGRAPH]: (node: any, children: any) => (children != '') ? <p>{children}</p> : '',

            [INLINES.HYPERLINK]: ( node: any , children: string ) => {
                return <a href={node.data.uri} className=" text-main-orange hover:underline font-semibold">{children}</a>;
            },
    
            [BLOCKS.EMBEDDED_ENTRY]: (node: any, children: any) => {
                const entry = entryMap.get(node.data.target.sys.id);

                if (entry.__typename === "VideoEmbed") {
                    return <YoutubeEmbed embedId={entry.embedId} />;
                }
                
            },

            [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => {
                const asset = assetMap.get(node.data.target.sys.id);

                return (<img
                    className=" w-full max-w-none rounded-xl"
                    src={asset.url}
                    height={asset.height}
                    width={asset.width}
                    alt={asset.title}
                    />)
            }
        },
    };
}

export default renderOptions;