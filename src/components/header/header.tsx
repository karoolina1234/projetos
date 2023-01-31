import React from "react";
import * as S from './style'
import image2 from '../../assets/pincel.jpeg';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useSelector } from 'react-redux';

const HeaderComponent =()=>{
    const cart = useSelector((state:any) => state.cart);

    function findOcc(cart: any[], key: string){
        let arr2:any = [];
        cart[0]?.forEach((x:any)=>{
             
           if(arr2?.some((val:any)=>{ 
            return val[key] === x[key]
         })){
             arr2.forEach((k:any)=>{
               if(k[key] === x[key]){ 
                 k["occurrence"]++
               }
            })
           }else{
             let a:any = {}
             a[key] = x[key]
             a["occurrence"] = 1
             a['id']=x['id']
             a['price']=x['price']
             a['api_featured_image']=x['api_featured_image']
             arr2.push(a);
           }
        })
          
        return arr2
      }
          
      let key = "name"
      var quantity = findOcc(cart, key)

console.log(cart)
    
    return(
        <S.DivHeader>
            <div className="imgh">
                <img src={image2} alt=""/>
            </div>
        <div className="list">
            <div className="item">
                <a>home</a>
            </div>
            <div className='cart'>
                <span>{quantity?.length}</span>
                <LocalMallIcon/>
            </div>
        </div>
        </S.DivHeader>
      
    )
}
export default HeaderComponent;