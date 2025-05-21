import Banner from '../components/Banner';
import Card from '../components/Card';
import logements from '../logements.json';

function Home () {

  return (
    <>
    <Banner />
    <div className="cards-container">
      {logements.map((logement) => (
        <Card
          key={logement.id}
          title={logement.title}
          cover={logement.cover}
        />
      ))}
    </div>
    </>
  )
}
export default Home