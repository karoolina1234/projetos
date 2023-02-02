import React, { useEffect, useState } from "react";
import { ItensService } from "../../service/prod";
import * as S from './listStyle';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { addCart} from "../../reducer/cart";
import Loader from "../../assets/icons/loader.icon";
import { exibeAlert } from "../../reducer/alert.";

const List =()=>{
    const [prod, setProd] =useState([])
    const dispatch = useDispatch()
    const [itemOffset, setItemOffset] = useState(0);
    const[prodCart, setProdCart]=useState<any[]>([])
    const cart = useSelector((state:any) => state.cart);

    useEffect(() => {
      ItensService.FindItens()
        .then((result:any) => {
          result.length > 0 && setProd(result)
        });
    }, []);

    const endOffset = itemOffset + 6;
    const currentItems = prod.slice(itemOffset, endOffset);
    
    const pageCount = Math.ceil(prod.length / 6);
  

    
      const handlePageClick = (event:any) => {
        const newOffset = (event.selected * 6) % prod.length;
       
        setItemOffset(newOffset);
      };

      function formatNumber(num:number) {
        return num
          .toLocaleString('pt-PT', {
           
          })
          .replace(/.00$/, '');
      }

      const addToCart =(prod:any)=>{
        prodCart.push(prod)
        var values=
        JSON.parse(JSON.stringify(prodCart))
        dispatch(exibeAlert())
        dispatch(addCart(values))
      
  }
    return(
      <>
      <S.DivList>
            {currentItems.length>0 ?
            currentItems?.map((item:any)=>{
                return(
                    <S.List key={item.id}>
                        <div className="produto">

                        <img src={item.api_featured_image} alt={""}/>
                        <p>{item.name}</p>
                        <p>{'R$'+formatNumber(item.price)}</p>
                        </div>
                            <button onClick={()=>addToCart(item)}>Comprar</button>
                    </S.List>
                )
            })
            :
            <div className="load">
              <Loader />
            </div>
          
          }
             <ReactPaginate
        breakLabel="..."
        breakClassName="break-me"
        pageCount={pageCount}	
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        previousLabel={false}
        nextLabel={false}
        className="listaPAG"
       />
        </S.DivList>
      </>
       
    )
}

export default List
