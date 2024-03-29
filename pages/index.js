import Hero from '../components/homepage/Hero';
import Xbox from '../components/homepage/cards/Xbox';
import Epic from '../components/homepage/cards/Epic';
import Playstation from '../components/homepage/cards/Playstation';

export default function Home({ data }) {
  return (
    <div id="homepage">
      <Hero />
      <div className="container">
        <h1>PC</h1>
        <Epic epic={data.games.epic}/>
        <h1>Console</h1>
        <Xbox xbox={data.games.xbox}/>
        <Playstation playstation={data.games.playstation}/>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://api.gamehoarder.online/v1/games`)
  const data = await res.json()

  return { props: { data } }
}