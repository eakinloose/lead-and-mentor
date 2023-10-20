import styled from "styled-components";

export const FooterWrapper = styled.div`
   width: 100vw;
   padding: 7rem 10rem;
   display: flex;
   justify-content: space-between;
   background: #3a3847;
   color: white;

   .right {
      display: flex;
   }

   .first,
   .second,
   .third {
      display: flex;
      flex-direction: column;
      align-items: start;
   }

   .first {
      p {
         width: 40%;
         margin-top: 4rem;
      }
   }

   .third {
      width: 30%;

      img {
         height: 50px;
      }
   }
`;
