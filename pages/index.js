import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import WeatherTable from '../components/WeatherTable';
import Footer from '../components/Footer';
import Banner from '../components/Banner'

export default function Home({content}) {

  return (

    <div className="App">
      <Navigation nav={content.menu}></Navigation>
        <Banner content={content.modal}></Banner>
        <Hero hero={content.hero}></Hero>
        <WeatherTable></WeatherTable>
        <Footer></Footer>
    </div>
  )
}

export async function getStaticProps(context) {

  const { data } = await axios.get('https://cdn.contentstack.io/v3/content_types/home/entries/bltcac919b92b832d92?environment=dev&include[]=menu&include_fallback=true',
    {
      headers: {
        'Content-Type': "application/json",
        api_key: "bltb4126083ff1865f7",
        access_token: "csff43e17b65e174807982ac2e"
      }
    }
  )

  return {
    props: {
      content: data.entry
    },
  }
}
