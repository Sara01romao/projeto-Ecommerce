import React from 'react'
import styles from './style/Carrinho.css';

export default function Carrinho({carrinho, removeToCarrinho}) {

  const subtotal =carrinho.reduce((acumulo, curr) => acumulo + curr.price, 0);
  const quantidade = carrinho.length;
  const frete = (carrinho.length*10);
  
  

 

  return (
    <>
    
    <h1 className="title">Carrinho </h1>
    
    <p className="items">Qtd: {quantidade}</p>

   <div className='containerCar'>
  
              <div className="productsCar">
             
                  {carrinho.map((item) =>(
                        <div className="cardCar" key={item.id}>
                            <img src={`./assets/${item.image}`}/>
                            <h5>{item.name}</h5>
                            

                              <h3>R$ <span>{item.price}</span></h3>

                            <button onClick={() => removeToCarrinho(item)}>
                              - Remover
                              </button>
                              
                        </div>
                      
                    
                  ))
                
                  }
              </div>

              <div className="resultado">
                
                      <>{subtotal<250?(
                        <div>
                          <h2>Subtotal: R$ {subtotal}</h2>
                          <p>Frete: R$ {frete}</p>
                          <hr/>
                          <h1>Total: R$ {subtotal+frete}</h1>
                        </div>
                        
                      ):(
                        <div>
                            <h2>Subtotal: R$ {subtotal}</h2>
                            <p>Frete: R$ {frete ==0} 0</p>
                            <hr/>
                            <h1>Total: R$ {subtotal}</h1>
                        </div>
                      )}</>        
                  
              </div>

    </div>   
    
</>
  )
}
