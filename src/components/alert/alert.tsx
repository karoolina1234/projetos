import React from "react";
import * as S from './alertStyle'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { removeAlert } from "../../reducer/alert.";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


const Alert=()=>{
    const dispatch = useDispatch()

    return(
        <S.DivComponent>
            <S.Content>
            <S.Data>
            <a onClick={()=>dispatch(removeAlert())}><HighlightOffIcon/></a>
            <p>Item adicionado com sucesso!</p>
            <Link onClick={()=>dispatch(removeAlert())} className="addCarts" to='/cart'>Acessar carrinho</Link>

            </S.Data>
        </S.Content>
        </S.DivComponent>
        
    )
}

export default Alert;