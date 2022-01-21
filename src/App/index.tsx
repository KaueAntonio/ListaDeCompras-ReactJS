import { Button, Paper} from "@mui/material";
import React from "react";
import "../index.css";
import SimplePaper from "../Components/ItemLista";
import Carrinho from "../Components/Modal";

const App = () => {
  return (

    <div className='corpo'>
     <Carrinho/>
     <h1>Lista de Produtos</h1>
     <div className='lista'>

     <SimplePaper/>
     <SimplePaper/>
     <SimplePaper/>
     <SimplePaper/>
     <SimplePaper/>
     </div>
   </div>
   
   
  );
};

export default App;
