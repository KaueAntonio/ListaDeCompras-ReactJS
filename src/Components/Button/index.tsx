import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const BotaoC = () => {
  return (
    
      <Button className='botaoComprar' variant="outlined"><AddShoppingCartIcon/>Adicionar no Carrinho</Button>
    
  );
}

const BotaoV = () => {
  return (
    
      <Button className='botaoVender' variant="outlined"><DeleteIcon/>Remover Produto</Button>
    
  );
}

export default {BotaoC, BotaoV};