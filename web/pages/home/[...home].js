import Head from 'next/head'
import {fetchAPI, getStrapiURL} from "../../lib/api";
import {getStrapiMedia} from "../../lib/media";

function Home({property}) {
    //console.log(property)
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                {property.description}
                {property.images.map((image)=>
                    <div>

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
    console.log(JSON.stringify(context.query))
    let data=  await fetchAPI("properties/"+context.query.home[0]);
    return {props:{property:data}}
}

export default Home;