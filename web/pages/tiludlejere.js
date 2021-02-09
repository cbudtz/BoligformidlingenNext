import Head from 'next/head'
import {fetchAPI} from "../lib/api";
import React from "react";
import {Row, Col, Jumbotron, Container} from "react-bootstrap";
import TopBar from "../components/TopBar";
import ReactMarkdown from "react-markdown";
import {getStrapiMedia} from "../lib/media";
import Footer from "../components/Footer";

function Tiludlejere({properties, pagematerials,pagemeta}) {
    const tiludlejere = pagematerials.find((mat)=>mat.key==="tiludlejere");
    const tiludlejere2 = pagematerials.find((mat)=>mat.key==="tiludlejere2");
    const tiludlejere3 = pagematerials.find((mat)=>mat.key==="tiludlejere3");
    const tiludlejere4 = pagematerials.find((mat)=>mat.key==="tiludlejere4");

    return (
        <div>
            <Head>
                <title>{pagemeta?.title}</title>
                <meta name={"description"} content={pagemeta?.description}/>
                <meta name={"keywords"} content={pagemeta?.keywords} />
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
                <Container fluid>
                    <Jumbotron fluid style={{
                        minHeight: 600,
                        backgroundImage: "url('" + getStrapiMedia(tiludlejere?.images[0]) + "')",
                        backgroundRepeat: "space",
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                    }}/>

                </Container>
                <Container>
                    <Row>
                        <Col style={{textAlign:"center"}}>
                            <ReactMarkdown>
                                {tiludlejere.text}
                            </ReactMarkdown>
                        </Col>
                    </Row>
                    <Row>
                        {tiludlejere2?.images.map((image, key)=>
                            (<Col key={key} sm={4} style={{textAlign:"center"}}>
                                <img style={{maxWidth:150,maxHeight:150, borderRadius:"50%"}} src={getStrapiMedia(image)}/>
                                <p><h4>{tiludlejere2?.text.split(",")[key]}</h4></p>
                            </Col>)

                        )}
                    </Row>
                    <hr/>
                    <Row>
                        <Col md={8}>
                            <ReactMarkdown>
                                {tiludlejere3?.text}
                            </ReactMarkdown>
                        </Col>
                        <Col md={4}>
                            <img src={getStrapiMedia(tiludlejere3?.images[0].formats.small)}/>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ReactMarkdown>
                                {tiludlejere4?.text}
                            </ReactMarkdown>
                        </Col>
                    </Row>
                    <Row>
                        <img src={getStrapiMedia(tiludlejere4?.images[0])}/>
                    </Row>
                </Container>
            </main>
            <Footer/>

        </div>
    )
}

export async function getServerSideProps(context){
    let propertytask = fetchAPI("properties");
    let pagetask = fetchAPI("pagematerials");
    let pagemetatask = fetchAPI("pagemetas");
    let properties=  await propertytask;
    let pagematerials = await pagetask;
    let pagemetas = await pagemetatask;


    return {props:{properties:properties, pagematerials:pagematerials,pagemetas:pagemetas}}
}

export default Tiludlejere;