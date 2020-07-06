import { css } from 'lit-element'; 

export default css`
    .deleting {
      position: absolute;
      padding: 20px;
      background-color: #000000aa;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      border-radius: 5px;
      min-height: 60px;
      z-index: var(--z-index-default);
    }
    .deleting > div {
      margin: auto; 
      width: 75%;
      text-align: center;
      color: #fff;
    }

    .deleting mwc-button {
       scale: 0.9;
       transform-origin: left;
       margin-top: 10px;
    }
`;
