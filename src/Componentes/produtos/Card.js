import React, { Component } from 'react';
import './Card.css'

import productsData from '../../products.json';


const productsList = productsData.product;
  
  class ProdutoCard extends Component{
    render(){
      return(
        <div className="cards">
          {productsData.map((produto)=>{
            return(
              <div className="cardInfo" key={produto.id}>
            
                    
                    <div className="card">
                                <h1>{produto.name}</h1>
                                <img src={`/assets/${produto.image}`}/>
                                <h3>Preço <span>R$ {produto.price} </span></h3>
                                
                            
                                <div className="infoCard">
                                <p>Score: {produto.score}</p>
                                    <button><img src="/assets/cart-icon.svg"></img>Add carrinho</button>
                                </div>
                          
                             </div>
                  
                        
                    
              </div>
            );
          })
        }
        
        </div>
        
      );
    }
  }

    
  
    
export default ProdutoCard;






// const ProdutoCard =() =>(
    
//       <div className="ListaProdutos">
        
//         <div className="card">
//             <h1>Nome</h1>
//             <img src="/assets/super-mario-odyssey.png"></img>
//             <p>Score: 250</p>
           
//            <div className="infoCard">
//                 <h3>Preço R$00,00 </h3>
//                 <button><img src="/assets/cart-icon.svg"></img>Add carrinho</button>
//            </div>
        
//         </div>
//     </div>
// );

