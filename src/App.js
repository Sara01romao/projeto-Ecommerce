import React, {useState} from 'react';
import './App.css';
import Products from './Component/Products';
import Carrinho from './Component/Carrinho';
 


const PAGE_PRODUCTS = 'products';
const PAGE_CARRINHO ='carrinho'


function App() {
  

  const [carrinho, setCarrinho] =useState([]);//add no carrinho

  const [page, setPage] =useState(PAGE_PRODUCTS);//mudar de page

  

//função para add no carrinho
const addToCarrinho =(item) =>{
    
  setCarrinho([...carrinho, {...item}]);


}

//remover carrinho
const removeToCarrinho =(itemRemovido) =>{
  setCarrinho(
    carrinho.filter((item) => item !== itemRemovido)
  );
    
}


//FUNÇÃO PARA IR PARA OUTRA PAGINA
const navigateTo =(proximo) =>{
  setPage(proximo);

}



  return (
    <div className="App" >
      <header>
        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>Produtos </button>
        <button onClick={() => navigateTo(PAGE_CARRINHO)}> <img src="/assets/car-icon.svg"/>Carrinho ({carrinho.length})</button>
      </header>


  
      
     {page == PAGE_PRODUCTS && (<Products addToCarrinho={addToCarrinho}/>)}
     {page == PAGE_CARRINHO && <Carrinho carrinho={carrinho} removeToCarrinho={removeToCarrinho}  />}
    </div>
  );
}

export default App;
