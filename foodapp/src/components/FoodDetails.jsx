import { useEffect, useState } from "react";
export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "71366d01bba94c69ac65dbc4e1c9b0e6";
  useEffect(() => {
    async function fetchFood() {
      const resp = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await resp.json();
      //console.log(data);
      setFood(data);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      Food Details
      {food.title}
    </div>
  );
}
