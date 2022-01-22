import { Avatar, Box, Paper } from "@mui/material";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useEffect, useState } from "react";
import api from "./api";
import ButtonUnstyled from '@mui/base/ButtonUnstyled';


const BoxProdutos = () => {
  const [produto, setProduto] = useState<any[]>([]);

  useEffect(() => {
    async function loadProduto() {
      const response = await api.get('/');
      console.log(response.data);
      setProduto(response.data);
    }
    loadProduto();
  }, []);


  return (

    <div>
        {produto.map((prod) => {
          return (
            <Box>

              <div key={prod.id}>



                <Box  >

                  <Paper elevation={3} className='papel'>
                    <Box className='container'>
                      <img className="av" alt={prod.brand} src={prod.picture}/>
                      <Box className='np'>

                        <Box className='texto1'>{prod.title}</Box>
                        <Box className='texto2'>R$ {prod.price}</Box>
                      </Box>
                    </Box>
                    <ButtonUnstyled className='botaoComprar'><ShoppingCartCheckoutIcon />Adicionar no Carrinho</ButtonUnstyled>
                  </Paper>

                </Box>
              </div>

            </Box>
          )
        })}

</div>

  );
}

export default BoxProdutos;