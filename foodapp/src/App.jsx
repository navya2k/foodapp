import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import styles from "./App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerCOntainer";
import FoodDetails from "./components/FoodDetails";

function App() {
  const [foodId, setFoodId] = useState("656329");
  const [foodData, setFoodData] = useState([]);
  return (
    <div>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
