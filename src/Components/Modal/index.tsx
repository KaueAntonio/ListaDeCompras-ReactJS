import * as React from 'react';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SimplePaper2 from '../ItemListaCarrinho';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 1000,
  height: 750,
  bgcolor: 'white',
  p: 2,
  px: 4,
  pb: 3,
  borderRadius: 5,
  overflowY: 'scroll', 
};

export default function ModalUnstyledDemo() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className='header' onClick={handleOpen}>
        <ShoppingCartIcon sx={{ width: 60, height: 60 }}/>
      </button>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
        <div className='corpo'>
    
     <h1>Carrinho</h1>
     <div className='lista'>

     <SimplePaper2/>
     <SimplePaper2/>
     <SimplePaper2/>
     <SimplePaper2/>
     <SimplePaper2/>
     <SimplePaper2/>
     </div>
     <h3>Total: R$ 0,00</h3>
   </div>
        </Box>
      </StyledModal>
    </div>
  );
}