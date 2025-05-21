import Banner from "../components/Banner";
import Card from "../components/Card";
import logements from "../logements.json";
import "../styles/Home.scss";

function Home() {
  return (
    <>
      <Banner />
      <div className="cardsContainer">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </>
  );
}
export default Home;
