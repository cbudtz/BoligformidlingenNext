import Head from 'next/head'
import {fetchAPI} from "../lib/api";
import React from "react";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import PageContent from "../components/PageContent";

function About({properties, footer, pagemeta, pagecontent}) {

    return (
        <>
            <Head>
                <title>{pagemeta?.title}</title>
                <meta name={"description"} content={pagemeta?.description}/>
                <meta name={"keywords"} content={pagemeta?.keywords} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"/>
                <link rel="stylesheet" href={"/fonts/font-awesome.min.css"}/>
                <script src={"https://www.googletagmanager.com/gtag/js?id=UA-137703064-1"}/>
                <script src={"/linkedin.js"}/>
                <script src={"/fbpix.js"}/>
                <script src={"/googleAnalytics.js"}/>

            </Head>
            <main>
                <TopBar properties={properties}/>
                <PageContent contents={pagecontent.content}/>

            </main>
            <Footer footer={footer}/>
        </>
    )
}

export async function getServerSideProps(context){
    let propertytask = fetchAPI("properties");
    let pagemetatask = fetchAPI("pagemetas?key=about");
    let footerTask = fetchAPI("footer")
    let aubouttask = fetchAPI("aboutus");
    let properties=  await propertytask;
    let pagemetas = await pagemetatask;

    return {props:{properties:properties, pagemeta: pagemetas && pagemetas[0], pagecontent:await aubouttask, footer: await footerTask}}
}

export default About;