import Head from 'next/head'
import Image from 'next/image'
import {fetchAPI} from "../lib/api";

import TopBar from "../components/TopBar";
import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import MainJumbo from "../components/MainJumbo";
import ReactMarkdown from 'react-markdown';


function Index({properties,pagematerials}) {
    const verdensmal = pagematerials.filter((mat)=>mat.key==="verdensmal")[0]

    return (
        <div>
            <Head>
                <title>Boligformidlingen</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"/>
                <script src={"https://www.googletagmanager.com/gtag/js?id=UA-137703064-1"}/>
                <script src={"/linkedin.js"}/>
                <script src={"/fbpix.js"}/>
                <script src={"/googleAnalytics.js"}/>

            </Head>

            <main>
                <TopBar properties={properties}/>
                <MainJumbo>
                    <h2>Gratis og uforpligtende vurdering</h2>
                    <p>Vi giver vores professionelle vurdering af, hvor meget du kan forvente at udleje dit hjem for.</p>
                    <p>Hos Boligformidlingen kender vi lejerne og ved, hvad der tæller. Book tid i dag - det er gratis og helt
                        uforpligtende.</p>
                    <h2><a href={"/book"}>Book Tid</a></h2>
                </MainJumbo>
                <Container>
                    <hr/>
                    <Row>
                        <Col md={4} lg={6}>
                            <Image width={939} height={788} layout="responsive" alt="Verdensmål" src={"/images/facebookannoncering.png"}/>
                        </Col>
                        <Col md={8} lg={6}>
                            <ReactMarkdown children={verdensmal.text}/>
                        </Col>
                        <Col md={4} lg={6}>
                            test
                        </Col>

                    </Row>

                    {properties?.map((property) =>
                        <div key={property.id}>
                            <a href={"/home/" + property.id + "/" + property.Title}>{property.Title} - {property.id}</a>
                        </div>)}

                </Container>


            </main>

        </div>
    )
}

export async function getServerSideProps(){
    let properties=  await fetchAPI("properties");
    let pagematerials = await fetchAPI("pagematerials")
    
    return {props:{properties:properties, pagematerials:pagematerials}}
}

export default Index;