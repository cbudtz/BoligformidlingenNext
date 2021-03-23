import Head from 'next/head'
import {fetchAPI} from "../lib/api";
import React from "react";
import {Row, Col, Jumbotron, Container} from "react-bootstrap";
import TopBar from "../components/TopBar";
import {getStrapiMedia} from "../lib/media";
import ReactMarkdown from "react-markdown";
import Footer from "../components/Footer";
import Jumbo from "../components/Jumbo";
import PageContent from "../components/PageContent";

function About({properties, pagematerials, pagemeta, pagecontent}) {

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
            <Footer/>
        </>
    )
}

export async function getServerSideProps(context){
    let propertytask = fetchAPI("properties");
    let pagemetatask = fetchAPI("pagemetas?key=about");
    let aubouttask = fetchAPI("aboutus");
    let properties=  await propertytask;
    let pagemetas = await pagemetatask;

    return {props:{properties:properties, pagemeta: pagemetas && pagemetas[0], pagecontent:await aubouttask}}
}

export default About;