import Head from 'next/head'
import {fetchAPI, getStrapiURL} from "../lib/api";
import React from "react";
import {Row, Col, Jumbotron, Container} from "react-bootstrap";
import TopBar from "../components/TopBar";
import ReactMarkdown from "react-markdown";
import {getStrapiMedia} from "../lib/media";
import Footer from "../components/Footer";
import MarkDown from "../components/MarkDown";

function Articles({properties, articles,pagemeta, footer}) {
    console.log(articles)


    return (
        <div>
            <Head>
                <title>{pagemeta?.title}</title>
                <meta name={"description"} content={pagemeta?.description}/>
                <meta name={"keywords"} content={pagemeta?.keywords} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
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

                <Container>
                    {articles?.map((article)=>{
                        return(
                            <Row style={{margin: "2em"}} key={article.id}>
                                <Col xs={12} md={4}>
                                    <img style={{width: "100%"}} src={getStrapiMedia(article.image)}></img>

                                </Col>
                                <Col xs={12} md={8}>
                                    <div style={{margin: "1em"}}>
                                        <MarkDown>
                                            {article.text}
                                        </MarkDown>
                                    </div>
                                </Col>

                            </Row>
                        )}

                    )}

                </Container>
            </main>
            <Footer footer={footer}/>

        </div>
    )
}

export async function getServerSideProps(context){
    let propertytask = fetchAPI("properties");
    let articletask = fetchAPI("articles");
    let pagemetatask = fetchAPI("pagemetas");
    let footerTask = fetchAPI("footer");
    let pagemeta = await pagemetatask;
    let properties=  await propertytask;
    let articles = await articletask;

    return {props:{properties:properties, articles:articles,pagemeta:pagemeta, footer:await footerTask}}
}

export default Articles;