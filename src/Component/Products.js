import React, { useState } from 'react'
import dbProducts from '../products.json';

export default function Products ({addToCarrinho}) {
  

  const [dataProducts] = useState([dbProducts]);//pega os dados do json
  
  
    return (
      <>
      


      <h1 className="title">Produtos</h1>
    
      
       

        <div className="products">
          {dbProducts.map((item) =>(
              <div className="card" key={item.id}>
                  <img src={`./assets/${item.image}`}/>
                  <h5>{item.name}</h5>
                  

                    <h3>R$ <span>{item.price}</span></h3>

                  <button onClick={() => addToCarrinho(item)}>
                    <img src="/assets/cart-icon.svg"/>Add no carrinho
                    </button>


                  
              </div>
          
          ))}
        </div>
  </>
    )
  }

