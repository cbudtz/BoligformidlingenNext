import Head from 'next/head'
import {fetchAPI} from "../lib/api";

 function Index({properties}) {
    console.log(properties)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          Data:
          {JSON.stringify(properties)}
      </main>

    </div>
  )
}

export async function getServerSideProps(){
    let data=  await fetchAPI("properties");
    return {props:{properties:data}}
}

export default Index;