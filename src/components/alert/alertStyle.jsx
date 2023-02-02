import styled from 'styled-components'
export const DivComponent = styled.div`
position:relative;
`;
export const Content=styled.div`
position: fixed;
width: 100%;
height:100vh;
background: #00000080;
z-index:999;
`
export const Data=styled.div`
    width: 37%;
    text-align: center;
    margin: 0 auto;
    margin-top:10rem;
    position: relative;
    background:#FFF;
    border-radius: 0.5rem;
    min-height: 5rem;


    svg{
        position: absolute;
        right: -1.5rem;
        top: -1.5rem;
        cursor: pointer;
        color:#FFF;
    }
    p{
        padding: 0.5rem;
    font-weight: bold;
    color: #b44990;
    margin:0rem;
    margin-bottom: 0.5rem;

    }
    .addCarts{
        border: none;
    background: black;
    color: #FFf;
    width: 50%;
    margin-bottom: 1rem;
    padding: 0.3rem;
    cursor: pointer;
    text-decoration: none;
    padding: 0.2em 0.5em;
    border-radius: 2rem;
    }
`
