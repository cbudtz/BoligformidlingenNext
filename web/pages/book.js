import Head from 'next/head'
import {fetchAPI} from "../lib/api";
import React from "react";
import {Container} from "react-bootstrap";
import TopBar from "../components/TopBar";

function Book({properties}) {
    return (
        <div>
            <Head>
                <title>Boligformidlingen - Contact us</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
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

export default Book;