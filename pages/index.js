import Hero from '../components/homepage/Hero';
import Xbox from '../components/homepage/Xbox';
import Epic from '../components/homepage/Epic';
import Playstation from '../components/homepage/Playstation';

export default function Home() {
  return (
    <div id="homepage">
      <Hero />
      <h1>Free Games</h1>
      <Epic />
      <Xbox />
      <Playstation />
    </div>
  )
}
