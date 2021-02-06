import Head from 'next/head'
import {fetchAPI} from "../lib/api";
import React from "react";
import {Container} from "react-bootstrap";
import TopBar from "../components/TopBar";

function Contact({properties}) {
    return (
        <div>
            <Head>
                <title>Boligformidlingen - Contact us</title>
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

                </Container>
            </main>

        </div>
    )
}

export async function getServerSideProps(context){
    let propertiestask =  fetchAPI("properties");
    return {props:{properties:await propertiestask}}
}

export default Contact;