import styled from "styled-components";

export const PageHeroWrapper = styled.div`
   margin: 0 auto 12rem;
   height: 500px;
   text-align: center;
   align-items: center;
   width: 100%;
   position: relative;

   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: relative;
      opacity: 0.3;
   }

   .overlay-image::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      right: 0;
      background-color: ${({ theme }) => theme.colors?.secondary};
      opacity: 0.3;
      bottom: 0;
      pointer-events: none;
   }

   .pageName {
      width: 30%;
      max-width: 250px;
      padding: 1.8rem;
      border-radius: 20px;
      position: absolute;
      z-index: 4;
      bottom: 0;
      background: ${({ theme }) => theme.colors?.primary};
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      transform: translate(-50%, 50%);
      left: 50%;
   }
`;
