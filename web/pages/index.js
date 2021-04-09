import Head from 'next/head'
import {fetchAPI} from "../lib/api";

import TopBar from "../components/TopBar";
import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import MainJumbo from "../components/MainJumbo";
import ReactMarkdown from 'react-markdown';
import {getStrapiMedia} from "../lib/media";
import Footer from "../components/Footer";
import PageContent from "../components/PageContent";
import CookieHandler from "../components/CookieHandler";


function Index({properties,pagematerials,pagemeta, pagecontent, footer}) {
    const index= pagemeta;

    function formatTitle(Title) {
        const titleArray = Title.split(",")
        return <span>
            {titleArray[0]}{titleArray[1] && ","} <br/>
            {titleArray[1]}
        </span>
    }

    return (
        <div>

            <Head>
                <title>{index?.title}</title>
                <meta name={"description"} content={index?.description}/>
                <meta name={"keywords"} content={index?.keywords}/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"/>
                <link rel="stylesheet" href={"/fonts/font-awesome.min.css"}/>
                <script src={"https://www.googletagmanager.com/gtag/js?id=UA-137703064-1"}/>
                <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="cc09b387-dd74-42a2-90ad-ddef37e1e59b" data-blockingmode="auto" type="text/javascript"></script>
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
                <PageContent contents={pagecontent.pagecontent}/>

                <hr/>
                <Container>
                    <Row>
                        {properties?.map(property=> { if (property.visible) return (
                                <Col lg={4} md={6} sm={12} key={property.id}>
                                    <h3 style={{minHeight:60}}>{formatTitle(property.Title)}</h3>
                                    <div style={{width:"100", paddingBottom:"66%",margin:"1em auto",overflow:"hidden",position:"relative"}}>
                                        <img style={{width: "100%", position:"absolute"}}
                                             src={property.thumbnail && (property.thumbnail.formats.small? getStrapiMedia(property.thumbnail.formats.small):getStrapiMedia(property.thumbnail))} alt={property.Title}/>
                                    </div>
                                    <div style={{marginTop: 24, marginBottom: 24}}>
                                        {property.showsubpage ?
                                            property.rented ?
                                                <a href={"/home/" + property.id + "/" + property.Title.replace(/\s/g, '')} className={"ringbutton"}>Rented</a>
                                                :
                                                <a href={"/home/" + property.id + "/" + property.Title.replace(/\s/g, '')} className={"ringbutton"}>More Info</a>
                                            :
                                            property.rented ?
                                                <span className="ringbutton" >Rented</span>
                                                :
                                                <a href={"/contact/"} className="ringbutton">Contact us</a>
                                        }
                                    </div>
                                </Col>)
                            }
                        )}

                    </Row>
                </Container>
                <CookieHandler/>
                <Footer footer={footer} pagematerials={pagematerials}/>
                <div id={"cookiemonster"}>
                    <script id="CookieDeclaration" src="https://consent.cookiebot.com/cc09b387-dd74-42a2-90ad-ddef37e1e59b/cd.js" type="text/javascript" async/>
                </div>
            </main>


        </div>
    )
}

export async function getStaticProps(){
    let propertytask = fetchAPI("properties?_sort=order:ASC");
    let pagetask = fetchAPI("pagematerials");
    let pagecontenttask = fetchAPI("frontpage");
    let pagemetatask = fetchAPI("pagemetas?key=index");
    let footertask = fetchAPI("footer")
    let properties=  await propertytask;
    let pagematerials = await pagetask;
    let pagemeta = await pagemetatask;

    return {props:{properties:properties, pagematerials:pagematerials, pagemeta: pagemeta && pagemeta[0], pagecontent:await pagecontenttask, footer: await footertask},revalidate:10}
}

export default Index;