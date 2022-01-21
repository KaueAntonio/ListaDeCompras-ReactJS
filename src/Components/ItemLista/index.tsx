import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Avatar, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const SimplePaper = () =>  {
  return (
    <Box  >
      
      <Paper elevation={3} className='papel'>
        <Box className='container'>
        <Avatar className="av" alt="P" src="../imagens/cinza.jpg" sx={{ width: 60, height: 60 }}/>
        <Box className='np'>

        <Box className='texto1'>NOME DO PRODUTO</Box>
        <Box className='texto2'>Preço: R$ 0.00</Box>
        </Box>
        </Box>
        <Button variant="outlined" className='botaoComprar'><ShoppingCartCheckoutIcon/>Adicionar no Carrinho</Button>
        </Paper>
      
    </Box>
  );
}
  export default SimplePaper;