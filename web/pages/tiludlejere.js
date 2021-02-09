import Head from 'next/head'
import {fetchAPI} from "../lib/api";
import React from "react";
import {Row, Col, Jumbotron, Container} from "react-bootstrap";
import TopBar from "../components/TopBar";
import ReactMarkdown from "react-markdown";
import {getStrapiMedia} from "../lib/media";

function Tiludlejere({properties, pagematerials}) {
    const tiludlejere = pagematerials.find((mat)=>mat.key==="tiludlejere");
    return (
        <div>
            <Head>
                <title>Boligformidlingen - Til udlejere</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"/>
                <script src={"https://www.googletagmanager.com/gtag/js?id=UA-137703064-1"}/>
                <script src={"/linkedin.js"}/>
                <script src={"/fbpix.js"}/>
                <script src={"/googleAnalytics.js"}/>
            </Head>

            <main>
                <TopBar properties={properties}/>
                <Container>
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
                        <Col>
                            <ReactMarkdown>
                                {tiludlejere.text}
                            </ReactMarkdown>
                        </Col>
                    </Row>
                </Container>
            </main>

        </div>
    )
}

export async function getServerSideProps(context){
    let propertytask = fetchAPI("properties");
    let pagetask = fetchAPI("pagematerials");
    let properties=  await propertytask;
    let pagematerials = await pagetask;

    return {props:{properties:properties, pagematerials:pagematerials}}
}

export default Tiludlejere;