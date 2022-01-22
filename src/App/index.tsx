import "../index.css";
import Carrinho from "../Components/Modal";
import BoxProdutos from "../Components/ItemLista";


const App = () => {

  return (

    <div className='corpo'>
      <Carrinho />
      <h1>Lista de Produtos</h1>
      <div className='lista'>
        <BoxProdutos/>
      </div>

    </div>

  );
}

export default App;