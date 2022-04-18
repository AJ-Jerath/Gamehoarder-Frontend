import Hero from '../components/homepage/Hero';
import Xbox from '../components/homepage/Xbox';
import Epic from '../components/homepage/Epic';
import Playstation from '../components/homepage/Playstation';

export default function Home({ data }) {
  return (
    <div id="homepage">
      <Hero />
      <h1>Free Games</h1>
      <div className="container">
        <Epic epic={data.games.epic}/>
        <Xbox xbox={data.games.xbox}/>
        <Playstation playstation={data.games.playstation}/>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://gamehoarder-backend-7dd2t.ondigitalocean.app/games`)
  const data = await res.json()

  return { props: { data } }
}