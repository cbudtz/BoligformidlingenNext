import Head from 'next/head'
import {fetchAPI} from "../lib/api";
import Link from "next";

function Index({properties}) {
    console.log(properties)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

          {properties.map((property)=><div>

              <a href={"/home/"+property.id +"/" + property.Title}>{property.Title} - {property.id}</a>
          </div>)}


      </main>

    </div>
  )
}

export async function getServerSideProps(){
    let data=  await fetchAPI("properties");
    return {props:{properties:data}}
}

export default Index;