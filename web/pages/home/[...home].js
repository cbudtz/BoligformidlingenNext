import Head from 'next/head'
import {fetchAPI, getStrapiURL} from "../../lib/api";
import {getStrapiMedia} from "../../lib/media";
import TopBar from "../../components/TopBar";
import React from "react";

function Home({property, properties}) {
    //console.log(property)
    return (
        <div>
            <Head>
                <title>Boligformidlingen - {property.title}</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"/>
            </Head>

            <main>
                <TopBar properties={properties}/>
                {property.description}
                {property.images.map((image)=>
                    <div key={image.id}>

                        <img src={getStrapiMedia(image)}
                             srcSet={`${getStrapiMedia(image.formats.small)} 500w, 
                                ${getStrapiMedia(image.formats.medium)} 750w, 
                                ${getStrapiMedia(image.formats.large)} 1000w`}
                        />

                        {image.name}

                    </div>
                )}
                <div>
                    Data:
                    {JSON.stringify(property)}
                </div>
            </main>

        </div>
    )
}

export async function getServerSideProps(context){
    let property=  await fetchAPI("properties/"+context.query.home[0]);
    let properties =  await fetchAPI("properties");
    return {props:{property:property,properties:properties}}
}

export default Home;