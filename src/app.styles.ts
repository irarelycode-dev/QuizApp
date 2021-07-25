import { url } from 'inspector';
import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './assets/bg.jpeg';

export const GlobalStyle = createGlobalStyle`
html{
    height:100%;
}
body{
    background-image:url(${BGImage});
    background-size:cover;
    margin:0;
    padding:0 20px;
    display:flex;
    justify-content:center;
}
*{
    box-sizing:border-box;
}
`

export const Wrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
>p{
    color:black;
}
.score{
    color:#fff;
    font-size:2rem;
    margin:0;
}
h1{
    font-family:Fascinate Inline,Haettenschweiler,'Arial Narrow Bold';
    background-image:linear-gradient(180deg,#fff,#87f1ff);
    background-size:100%;
    background-clip:text;
    --webkit-background-clip:text;
    --moz-background-clip:text;
    font-weight:400;
}
.start,.next,.prev,.restart{
    cursor:pointer;
    background:linear-gradient(180deg,#fff,#ffcc91);
    border:2px solid #d38558;
    box-shadow:0px 5px 10px rgba(0,0,0,0.25);
    border-radius:10px;
    margin:10px 0;
}
`;