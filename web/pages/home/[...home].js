import Head from 'next/head'
import {fetchAPI, getStrapiURL} from "../../lib/api";
import {getStrapiMedia} from "../../lib/media";
import TopBar from "../../components/TopBar";
import React from "react";
import {Carousel, Col, Container, Row} from "react-bootstrap";
import ReactMarkdown from "react-markdown";

function Home({property, properties}) {
    return (
        <div>
            <Head>
                <title>Boligformidlingen - {property.Title}</title>
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
                    <Row>
                        <Col md={8}>
                            <Carousel>
                                {property.images.map((image)=>

                                    <Carousel.Item key={image.id}>
                                        <img style={{width:"100%", height:"40%"}} src={getStrapiMedia(image)}
                                //              srcSet={`${getStrapiMedia(image.formats.small)} 750w,
                                // ${getStrapiMedia(image.formats.medium)} 1000w,
                                // ${getStrapiMedia(image.formats.large)} 1500w`}
                                             alt={image.name}
                                        />

                                    </Carousel.Item>
                                )}
                            </Carousel>
                        </Col>
                        <Col md={4}>
                            <h3 children={property.Title}/>
                            <ReactMarkdown children={property.subtext}/>
                        </Col>

                    </Row>
                    <Row>
                        <Col md={8}>
                            <ReactMarkdown children={property.description}/>
                        </Col>
                        <Col md={4}>
                            <a className={"ringbutton"} href={"/contact"}>Contact</a>
                        </Col>
                    </Row>
                    <div>


                    </div>
                </Container>
            </main>

        </div>
    )
}

export async function getServerSideProps(context){
    let propertytask =  fetchAPI("properties/"+context.query.home[0]);
    let propertiestask =  fetchAPI("properties");
    return {props:{property: await propertytask,properties:await propertiestask}}
}

export default Home;