import React from "react";
import * as S from './alertStyle'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { removeAlert } from "../../reducer/alert.";
import { useDispatch } from "react-redux";


const Alert=()=>{
    const dispatch = useDispatch()

    return(
        <S.DivComponent>
            <S.Content>
            <S.Data>
                <a onClick={()=>dispatch(removeAlert())}><HighlightOffIcon/></a>
            <p>Item adicionado com sucesso!</p>
            <button>Acessar carrinho</button>

            </S.Data>
        </S.Content>
        </S.DivComponent>
        
    )
}

export default Alert;