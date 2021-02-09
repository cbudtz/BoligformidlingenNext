import Head from 'next/head'
import {fetchAPI} from "../lib/api";
import React from "react";
import {Row, Col, Jumbotron, Container} from "react-bootstrap";
import TopBar from "../components/TopBar";
import {getStrapiMedia} from "../lib/media";
import ReactMarkdown from "react-markdown";
import Footer from "../components/Footer";

function About({properties, pagematerials}) {
    const pagematerial = pagematerials.find((mat)=>mat.key==="about")
    const pagematerial2 = pagematerials.find((mat)=>mat.key==="about2")
    const arne = pagematerials.find((mat)=>mat.key==="arne")
    const sara = pagematerials.find((mat)=>mat.key==="sara")
    return (
        <>
            <Head>
                <title>Boligformidlingen</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"/>
                <link rel="stylesheet" href={"/fonts/font-awesome.min.css"}/>
                <script src={"https://www.googletagmanager.com/gtag/js?id=UA-137703064-1"}/>
                <script src={"/linkedin.js"}/>
                <script src={"/fbpix.js"}/>
                <script src={"/googleAnalytics.js"}/>

            </Head>
            <main>
                <TopBar properties={properties}/>
                <Container fluid>
                    <Jumbotron fluid style={{
                        minHeight: 600,
                        backgroundImage: "url('" + getStrapiMedia(pagematerial?.images[0]) +   "')",
                        backgroundRepeat: "space",
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                    }}/>
                </Container>
                <Container>
                    <Row><Col>
                        <ReactMarkdown>
                            {pagematerial?.text}
                        </ReactMarkdown>

                        {pagematerial2?.images.map(img=><img key={img.url} height={65} src={getStrapiMedia(img)} alt={img.url}/>
                        )}
                        <ReactMarkdown>
                            {pagematerial2?.text}
                        </ReactMarkdown>
                    </Col></Row>
                    <Row>
                    <Col md={6}>
                        {<img style={{maxWidth:"200px"}} alt={"arne"} src={getStrapiMedia(arne?.images[0])}/>}
                        <ReactMarkdown>

                        {arne?.text}
                        </ReactMarkdown>
                    </Col>
                        <Col md={6}>
                            {<img style={{maxWidth:"200px"}} src={getStrapiMedia(sara?.images[0])} alt={"sara"}/>}
                            <ReactMarkdown>
                                {sara?.text}
                            </ReactMarkdown>

                    </Col>
                    </Row>
                </Container>
            </main>
            <Footer/>
        </>
    )
}

export async function getServerSideProps(context){
    let propertytask = fetchAPI("properties");
    let pagetask = fetchAPI("pagematerials");
    let properties=  await propertytask;
    let pagematerials = await pagetask;

    return {props:{properties:properties, pagematerials:pagematerials}}
}

export default About;