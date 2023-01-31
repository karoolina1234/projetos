import React from 'react'
import * as S from './style'
import HeaderComponent from '../../components/header/header'
import List from '../../components/list/list'
const Home = ()=>{
    return(
        <S.Data>
            <HeaderComponent
            />
            <List/>

        </S.Data>
        

    )
}
export default Home