import styled, { createGlobalStyle } from "styled-components";

export const AppContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  .form-error {
    color: red;
  }
  .antDiv {
    overflow-y: scroll;
    height: 89vh;

    ::-webkit-scrollbar {
      width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f4f5f6;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #777;
      border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
`;

const GlobalStyle = createGlobalStyle`
.anime{
  opacity: 0;
  position: relative;
  animation: anime-animation 0.4s ease-in-out 0.33333s;
  animation-fill-mode: forwards;
  transform: translateX(50px);     
}
.form-error {
  color: #e81c1c;
}

@-webkit-keyframes anime-animation {
  to {
    opacity: 1;
    transform: translatex(0);
  }
}
@keyframes anime-animation {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.anime:first-child{
  animation-delay: .1s;
}
.anime:nth-child(2){
  animation-delay: .2s;
}
.anime:nth-child(3){
  animation-delay: .3s;
}
.anime:nth-child(4){
  animation-delay: .4s;
}
.anime:nth-child(5){
  animation-delay: .5s;
}
.anime:nth-child(6){
  animation-delay: .6s;
}
.anime:nth-child(7){
  animation-delay: .7s;
}
.anime:nth-child(8){
  animation-delay: .8s;
}
.anime:nth-child(9){
  animation-delay: .9s;
}
.anime:nth-child(10){
  animation-delay: .91s;
}
.anime:nth-child(11){
  animation-delay: .92s;
}
.anime:nth-child(12){
  animation-delay: .93s;
}
.anime:nth-child(13){
  animation-delay: .94s;
}
.anime:nth-child(14){
  animation-delay: .95s;
}
.anime:nth-child(15){
  animation-delay: .96s;
}
.anime:nth-child(16){
  animation-delay: .97s;
}
.anime:nth-child(17){
  animation-delay: .98s;
}
.anime:nth-child(18){
  animation-delay: .99s;
}
.anime:nth-child(19){
  animation-delay: .991s;
}
.anime:nth-child(20){ 
  animation-delay: .992s;
}
`;

export default GlobalStyle;
