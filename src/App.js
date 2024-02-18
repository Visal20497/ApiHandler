import Product3 from "./Component/Product3";
import Product from "./Component/Product";
import Product2 from "./Component/Product2";
import Authentication from "./context/Authentication";
import ProductContext from "./context/ProductContext";

function App() {
  return (
    <Authentication>
      <ProductContext>
         <Product />
            <hr/>
         <Product2/>
         <hr/>
         <Product3/>
      </ProductContext>
       
      
    </Authentication>
  );
}

export default App;
