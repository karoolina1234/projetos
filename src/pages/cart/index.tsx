import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderComponent from "../../components/header/header";
import * as S from './styled'
import DeleteIcon from '@mui/icons-material/Delete';
import { removeCartAll, removeOne } from "../../reducer/cart";
import { Link } from "react-router-dom";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
const CartPage = ()=>{
    const item = useSelector((state:any) => state.item);
    const dispatch = useDispatch()



    var total:any=0;


    function renderCar(){
        item[0]?.map(function(item:any){
            var soma:any =Number(item.price) * Number(item.occurrence)
           return total = parseFloat(total) + parseFloat(soma)
          
        })
      }
      renderCar()


      const removeItemForId=(id:number)=>{
        const filteredItems = item[0]?.filter((item: { id: number; }) => item.id !== id)
        dispatch(removeOne(filteredItems))

      }

      const removeAllItens=()=>{
        dispatch(removeCartAll([]))
      }

    return(
        <S.Content>
            <HeaderComponent/>
                {item[0]?.length>0? (
                     <div className="tableItem">
                     {item[0]?.map((val:any)=>{
                    return(
                        <S.Items key={val}>
                             <img src={val.api_featured_image}/>
                             <p id='name'>{val.name}</p>
                             <p id="price">R${val.price}</p>
                             <span onClick={()=>removeItemForId(val.id)}><DeleteIcon/></span>
                        </S.Items>
                       
                    )
                })}
                <p id="total">Valor total: R${total}</p>
                <button onClick={()=>removeAllItens()} className="final">Finalizar compra</button>
                </div>
                ) : 
                <div className="noItems">
                    <p>Nenhum item no carrinho <SentimentVeryDissatisfiedIcon/></p>
                    <Link to='/'>Acesse a loja para adicionar itens</Link>
                </div>}
           
           
        </S.Content>
    )
}
export default CartPage;