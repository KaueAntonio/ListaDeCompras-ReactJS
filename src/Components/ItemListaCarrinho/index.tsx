import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';

const SimplePaper2 = () =>  {
  return (
    <Box  >
      
      <Paper elevation={6} className='papel'>
        <Box className='container'>
        
        <Box className='np'>

        <Box className='texto1'>NOME DO PRODUTO</Box>
        <Box className='texto2'>Preço: R$ 0.00</Box>
        </Box>
        </Box>
        <ButtonUnstyled className='botaoVender'><DeleteIcon/>Remover Produto</ButtonUnstyled>
        </Paper>
      
    </Box>
  );
}
  export default SimplePaper2;