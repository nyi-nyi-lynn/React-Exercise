import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  };

  const [porducts, setProducts] = useState([]);
  useEffect(() => {
    fetchData();
  });
 
  return (
    <section>
      <table>
       <thead>
       <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
        </tr>
       </thead>
       <tbody>

          {porducts.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
            </tr>
          ))}
   
       </tbody>
      </table>
    </section>
  );
}

export default App;
