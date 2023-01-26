import { BLOCKS, MARKS, INLINES, Document } from '@contentful/rich-text-types';
import { render } from 'react-dom';
import LiteYoutubeEmbed from 'react-lite-youtube-embed';

const renderOptions: any = (links: any, postTitle: string) => {

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

            [BLOCKS.QUOTE]: (node: any, children: any) => (children != '') ? <p className='text-6xl font-bold italic flex flex-row gap-4'>&rdquo;<p className='font-normal text-base'>{children}</p></p> : '',
            

            [INLINES.HYPERLINK]: ( node: any , children: string ) => {
                return <a href={node.data.uri} className=" text-main-orange hover:underline font-semibold">{children}</a>;
            },
    
            [BLOCKS.EMBEDDED_ENTRY]: (node: any, children: any) => {
                const entry = entryMap.get(node.data.target.sys.id);

                if (entry.__typename === "VideoEmbed") {
                    return <LiteYoutubeEmbed id={entry.embedId} title={postTitle} />
                    ;
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