import Head from 'next/head'
import React from "react";

function Admin({properties,pagemeta}) {

    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"/>
                <link rel="stylesheet" href={"/fonts/font-awesome.min.css"}/>
                <script src={"https://www.googletagmanager.com/gtag/js?id=UA-137703064-1"}/>
                <script src={"/linkedin.js"}/>
                <script src={"/fbpix.js"}/>
                <script src={"/googleAnalytics.js"}/>
                <script src={"https://www.google.com/recaptcha/api.js?render=6LepWk4aAAAAABnZBToPJ4HctBd2IaodkpsYbF2x"}/>
            </Head>

            <main>
                <a href={"https://boligformidlingenapi.4a4b.dk/admin"}>Login to backend</a>

            </main>

        </div>
    )
}


export default Admin;