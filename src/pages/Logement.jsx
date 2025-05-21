import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


function Logement ({}) {
  const { id } = useParams();

  return (
    <>
    <Header />

    <Footer />
    </>
  )
}
export default Logement