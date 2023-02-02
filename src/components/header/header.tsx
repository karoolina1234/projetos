import React, { useEffect } from "react";
import * as S from './style'
import image2 from '../../assets/pincel.jpeg';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItems } from "../../reducer/items";

const HeaderComponent =()=>{
    const cart = useSelector((state:any) => state.cart);
    const dispatch = useDispatch()

        function findOcc(cart: any[]){
            let arr2:any = [];
            cart[0]?.forEach((x:any)=>{
                 
               if(arr2?.some((val:any)=>{ 
                return val['name'] === x['name']
             })){
                 arr2.forEach((k:any)=>{
                   if(k['name'] === x['name']){ 
                     k["occurrence"]++
                   }
                })
               }else{
                 let a:any = {}
                 a['name'] = x['name']
                 a["occurrence"] = 1
                 a['id']=x['id']
                 a['price']=x['price']
                 a['api_featured_image']=x['api_featured_image']
                 arr2.push(a);
               }
            })
              
            return arr2
          }

          var quantity = findOcc(cart)

          useEffect(()=>{
            quantity.length>=0 && dispatch(addItems(quantity))
          },[cart])


    
    return(
        <S.DivHeader>
            <div className="imgh">
                <img src={image2} alt=""/>
            </div>
              <div className="list">
            <div className="item">
                <Link className="linkCart" to="/">home</Link>
            </div>
            <div className='cart'>
                <span>{quantity?.length}</span>
                <Link to='/cart' className="linkCart">
                <LocalMallIcon/>

                </Link>
            </div>
        </div>
        </S.DivHeader>
      
    )
}
export default HeaderComponent;