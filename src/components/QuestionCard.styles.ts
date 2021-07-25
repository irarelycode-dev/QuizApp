import styled from 'styled-components';


export const Wrapper = styled.div`
max-width:1100px;
background:#ebfeff;
border-radius:10px;
border:2px solid #0085a3;
padding:20px;
margin:20px 0;
text-align:center;
p{
    font-size:1rem;
}
`;


type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
transition:all 0.3s ease;
:hover{
    opacity:0.8;
}
button{
    cursor:pointer;
    user-select:none;
    font-size:0.8 rem;
    width:100%;
    height:40px;
    margin:5px 0;
    background:${({ correct, userClicked }) => {
        console.log(correct);
        return correct ? 'green' : !correct && userClicked?'red':''
    }}
}
>{
    margin:5px;
}
`;