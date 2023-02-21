import Head from "next/head";
import React from 'react';

export interface IPageHead {
    title: string;
};

const PageHead: React.FC<IPageHead> = ({ title }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
    );
}

export default PageHead;