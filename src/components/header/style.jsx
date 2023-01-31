import styled from 'styled-components'

export const DivHeader = styled.div`
.imgh{
    img{
            max-height: 10rem;
            width: 100%;
            object-fit: cover;
            object-position: 0rem -16rem;
        }
}
.list{
    background: black;
    margin-top: -1rem;
    min-height: 4rem;
    color: #b44990;
    .item{
        padding-top: 1.5rem;
        width:90%;
        display: inline-block;
        a{
            padding:1rem;
            cursor: pointer;
        
        }
        a:hover{
            color:#c18db7;
        }

    }
    .cart{
        display:inline-block;
        width:10%;
        text-align:center;
        margin-top:0.5rem;

            svg{
                margin: -0.2rem 0.3rem;

            }
    }


}
`;