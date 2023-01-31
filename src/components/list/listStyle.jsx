import styled from 'styled-components'


export const DivList=styled.div`
    text-align: center;
    padding: 3rem;
.listaPAG{
    text-align:center;
    margin-top:3rem;
    li{
        display:inline-block;
        max-width: 1rem;
        background: black;
        padding: 0.3rem;
        margin: 0.5rem;
        border-radius: 0.5rem;
        min-width: 1rem;
        font-size: 0.6rem;
        text-align: center;
        color: #b44990;
        font-weight: bold;
    }
    li:hover{
        background: #b44990;
        color:black;
    }
    .next,.previous {
        display:none;
    }
}
`;
export const List=styled.div`
       max-width: 14rem;
    min-width: 14rem;
    display: inline-block;
    margin: 0.5rem 3rem;
    vertical-align: middle;
        border: 1px solid lightgray;


.produto{

    padding:0.5rem;
}
img{
   max-width:100%;
   max-height:14rem;
   min-height:14rem;
}

button{
    background: #00000040;
    width: 100%;
    border: none;
    color: #b44990;
    padding: 0.5rem;
    cursor: pointer;

}
`;