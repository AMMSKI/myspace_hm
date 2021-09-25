import styled from "styled-components";


const MyBabyButton = styled.button`
{height: 20px;
 width:  66px;
 display:inline-block;
 padding:0.05em;
 border:0.1em solid #000000;
 margin:0 0.2em 0.2em 0 1em;
 border-radius:20px;
 box-sizing: border-box;
 text-decoration:none;
 font-family:'Roboto',sans-serif;
 font-weight:300;
 font-size:12px;
 color:#000000;
 text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);
 background-color:#E8E8E8;
 text-align:center;
 transition: all 0.15s;
}
  &:hover{
   text-shadow: 0 0 2em rgba(255,255,255,1);
   transform: translateY(-2px);
  }
`

export default MyBabyButton