
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {Avatar, Button} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';

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
        <ButtonUnstyled className='botaoComprar'><AddShoppingCartIcon/>Adicionar no Carrinho</ButtonUnstyled>
        </Paper>
      
    </Box>
  );
}
  export default SimplePaper;