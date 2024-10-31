import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(undefined);
  const [productId,setProductId] = useState(undefined);
  const [error,setError] = useState(false);
  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getProduct =async (e)=>{
    e.preventDefault();
    if(productId < 1 ){
      setError(true);
      fetchData();
      setProductId("");
      return ;
    }
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const data = await response.json();
    setProduct(data);
    setError(false);
    setProducts("");
  }
  return (
    <>
      <section className="search-box">
        <form onSubmit={getProduct} action="">
          <input
            type="number"
            className="search-input"
            name="num"
            id=""
            onChange={(e) => setProductId(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </section>
      {error && <h1 className="error-output">Please Enter a valid error (Eg. 1,2,3,...)</h1>}
      <section className="container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products && products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
              </tr>
            ))}
            {
              product && 
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
              </tr>
            }
          </tbody>
        </table>
      </section>
    </>
  );
}

export default App;
