import Head from 'next/head'
import {fetchAPI} from "../lib/api";

import TopBar from "../components/TopBar";
import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import MainJumbo from "../components/MainJumbo";
import ReactMarkdown from 'react-markdown';
import {getStrapiMedia} from "../lib/media";
import Footer from "../components/Footer";


function Index({properties,pagematerials,pagemeta}) {
    const verdensmal = pagematerials.find((mat)=>mat.key==="verdensmal");
    const index= pagemeta;

    return (
        <div>
            <Head>
                <title>{index?.title}</title>
                <meta name={"description"} content={index?.description}/>
                <meta name={"keywords"} content={index?.keywords}/>
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
                <MainJumbo>
                    <h3>Gratis og uforpligtende vurdering</h3>
                    <p>Vi giver vores professionelle vurdering af, hvor meget du kan forvente at udleje dit hjem for.</p>
                    <p>Hos Boligformidlingen kender vi lejerne og ved, hvad der tæller. Book tid i dag - det er gratis og helt
                        uforpligtende.</p>
                    <h3><a href={"/contact"}>Book Tid</a></h3>
                </MainJumbo>
                <Container>
                    <hr/>
                    <Row>
                        <Col md={6} lg={4}>
                            <img width={"100%"} alt="Verdensmål" src={getStrapiMedia(verdensmal.images[0].formats.small)}/>
                        </Col>
                        <Col md={6}>
                            <ReactMarkdown children={verdensmal.text}/>
                        </Col>
                        <Col md={6} lg={4}>
                            {verdensmal.images[1] &&
                            <img width={"66%"} src={getStrapiMedia(verdensmal.images[1].formats.small)}/>
                            }
                            {verdensmal.images[2] &&
                            <img width={"33%"} src={getStrapiMedia(verdensmal.images[2].formats.small)}/>
                            }
                        </Col>
                    </Row>
                </Container>
                <hr/>
                <Container>
                    <Row>
                        {properties.map(property=> { if (property.visible) return (
                                <Col md={4} key={property.id}>
                                    <h3>{property.Title}</h3>
                                    <div>
                                        <img style={{width: "100%", height: "100%"}}
                                             src={getStrapiMedia(property.thumbnail.formats.small)} alt={property.Title}/>
                                    </div>
                                    <div style={{marginTop: 24, marginBottom: 24}}>
                                        {property.showsubpage ?
                                            property.rented ?
                                                <a href={"/home/" + property.id + "/" + property.Title.replace(/\s/g, '')} className={"ringbutton"}>Rented</a>
                                                :
                                                <a href={"/home/" + property.id + "/" + property.Title.replace(/\s/g, '')} className={"ringbutton"}>More Info</a>
                                            :
                                            <a href={"/contact/"} className="ringbutton">Contact us</a>
                                        }
                                    </div>
                                </Col>)
                            }
                        )}

                    </Row>
                </Container>
                <Footer pagematerials={pagematerials}/>
            </main>


        </div>
    )
}

export async function getServerSideProps(){
    let propertytask = fetchAPI("properties?_sort=order:ASC");
    let pagetask = fetchAPI("pagematerials");
    let pagemetatask = fetchAPI("pagemetas?key=index");
    let properties=  await propertytask;
    let pagematerials = await pagetask;
    let pagemeta = await pagemetatask;

    return {props:{properties:properties, pagematerials:pagematerials, pagemeta:pagemeta[0]}}
}

export default Index;