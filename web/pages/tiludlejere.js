import Head from 'next/head'
import {fetchAPI} from "../lib/api";
import React from "react";
import {Row, Col, Jumbotron, Container} from "react-bootstrap";
import TopBar from "../components/TopBar";
import ReactMarkdown from "react-markdown";
import {getStrapiMedia} from "../lib/media";
import Footer from "../components/Footer";
import MarkDown from "../components/MarkDown";
import PageContent from "../components/PageContent";

function Tiludlejere({properties, pagematerials,pagemeta,pagecontent}) {
    const tiludlejere = pagematerials?.find((mat)=>mat.key==="tiludlejere");
    const tiludlejere2 = pagematerials?.find((mat)=>mat.key==="tiludlejere2");
    const tiludlejere3 = pagematerials?.find((mat)=>mat.key==="tiludlejere3");
    const tiludlejere4 = pagematerials?.find((mat)=>mat.key==="tiludlejere4");

    return (
        <div>
            <Head>
                <title>{pagemeta?.title}</title>
                <meta name={"description"} content={pagemeta?.description}/>
                <meta name={"keywords"} content={pagemeta?.keywords} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"/>
                <link rel="stylesheet" href={"/fonts/font-awesome.min.css"}/>
                <script src={"https://www.googletagmanager.com/gtag/js?id=UA-137703064-1"}/>
                <script src={"/linkedin.js"}/>
                <script src={"/fbpix.js"}/>
                <script src={"/googleAnalytics.js"}/>
            </Head>

            <main>
                <TopBar properties={properties}/>
                <PageContent contents={pagecontent?.content}/>

            </main>
            <Footer/>

        </div>
    )
}

export async function getServerSideProps(context){
    let propertytask = fetchAPI("properties");
    let pagetask = fetchAPI("pagematerials");
    let pagemetatask = fetchAPI("pagemetas");
    let tiludlejeretask = fetchAPI("tiludlejere");
    let properties=  await propertytask;
    let pagematerials = await pagetask;
    let pagemetas = await pagemetatask;
    let pagecontent = await tiludlejeretask;


    return {props:{properties:properties, pagematerials:pagematerials,pagemetas:pagemetas,pagecontent:pagecontent}}
}

export default Tiludlejere;