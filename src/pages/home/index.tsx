import React from 'react'
import * as S from './style'
import HeaderComponent from '../../components/header/header'
import List from '../../components/list/list'
import { useSelector } from 'react-redux'
import Alert from '../../components/alert/alert'
const Home = ()=>{
    const alert = useSelector((state:any) => state.alert);

    return(
        <S.Data>
                 {alert==true &&<Alert/> } 

            <HeaderComponent
            />
            <List/>

        </S.Data>
        

    )
}
export default Home