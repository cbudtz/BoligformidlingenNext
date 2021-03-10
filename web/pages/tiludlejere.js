import Head from 'next/head'
import {fetchAPI} from "../lib/api";
import React from "react";
import {Row, Col, Jumbotron, Container} from "react-bootstrap";
import TopBar from "../components/TopBar";
import ReactMarkdown from "react-markdown";
import {getStrapiMedia} from "../lib/media";
import Footer from "../components/Footer";
import MarkDown from "../components/MarkDown";

function Tiludlejere({properties, pagematerials,pagemeta}) {
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
                            <MarkDown>
                                {tiludlejere?.text}
                            </MarkDown>
                        </Col>
                    </Row>
                    <Row style={{padding: 20}}/>
                    <Row>
                        {tiludlejere2?.images.map((image, key)=>
                            (<Col key={key} sm={4} style={{textAlign:"center"}}>
                                <img style={{maxWidth:150,maxHeight:150, borderRadius:"50%"}} src={getStrapiMedia(image)}/>
                                <h5><p>{tiludlejere2?.text.split(",")[key]}</p></h5>
                            </Col>)

                        )}
                    </Row>
                    <hr/>
                    <Row><Col><h3 style={{textAlign:"center"}}>Har du eller kender du nogen med et godt hjem til vores gode udvalgte lejere?</h3></Col></Row>
                    <Row>
                        <Col md={4}><h6><b>Gratis og uforpligtende besigtelse og vurdering</b></h6></Col>
                        <Col md={4}>
                            <img style={{maxWidth:"100%"}} src={getStrapiMedia(tiludlejere3?.images[0].formats.small)}/>
                            <h6 style={{textAlign:"center",marginTop:15}}><b>Arne Backlund & Sara Heiberg</b></h6>
                            <h6><i style={{textAlign:"center"}}>- Skal vi også udleje dit hjem?</i></h6>
                        </Col>
                        <Col md={4}><h6><b>Udlejet eller gratis. Lige nu - frit tilsyn i udlejningsperioden</b></h6></Col>
                    </Row>
                    <Row><Col><hr/></Col></Row>
                    <Row>
                        <Col>
                            { tiludlejere4 &&
                                <MarkDown>
                                    {tiludlejere4?.text}
                                </MarkDown>
                            }
                        </Col>
                    </Row>
                    <Row><Col><hr/></Col></Row>
                    <Row>
                        <img style={{maxWidth:"100%"}} src={getStrapiMedia(tiludlejere4?.images[0])}/>
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