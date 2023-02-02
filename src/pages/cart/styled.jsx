import styled from 'styled-components'

export const Content = styled.div`
 .noItems{
    padding:2rem;
    padding: 2rem;
    width: 50%;
    border: 1px solid lightslategray;
    margin: 0 auto;
    margin-top: 5rem;
    text-align: center;

    p{
        font-size: 1.2rem;
         color: #b44990;
        svg{
            vertical-align: bottom;
        }
    }
    a{
        text-decoration: none;
        background: black;
        color: #Fff;
        padding: 0.6rem;
        border-radius: 1.5rem;
        font-size: 0.8rem;
    }
    }
.tableItem{
    padding:2rem;
    padding: 2rem;
    width: 50%;
    margin: 0 auto;
    border: 1px solid lightslategray;
    margin-top: 5rem;

    #total{
    font-size: 1.1rem;
    font-weight: 500;
    width: 60%;
    display: inline-block;
    color: #b44990;
}
   
.final{
    display: inline-block;
    background: transparent;
    padding: 0.2rem 1.5rem;
    border-radius: 0.5rem;
    border-color: #b44990;
    color: #b44990;
    cursor: pointer;
}
}
`

export const Items=styled.div`
border-bottom: 1px solid lightgray;
margin-bottom: 1rem;
padding-bottom: 0.5rem;

p,img,span{
    display:inline-block;
}
#price{
    min-width:4rem;
}

span{
    vertical-align: middle;
    color:red;
    margin-left:2rem;
}

img{
    max-width: 3rem;
    min-width: 3rem;
    max-height: 3rem;
    min-height: 3rem;
    border-radius: 2rem;
    vertical-align: middle;
}
#name{
    width: 50%;
    margin-left: 0.7rem;
}

`