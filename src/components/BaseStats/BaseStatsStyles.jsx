import styled from "styled-components";

export const BaseStatsContainer = styled.div`
  display: grid;
  width: 90%;
  height: 30px;
  grid-template-columns: 80px 10px 1fr;
  align-items: center;
  
  column-gap: 20px;
  border-top: 1px solid whitesmoke;
  border-bottom: 1px solid whitesmoke;
`;
export const NameStats = styled.p`
  color: #8a8a8a;
  font-weight: 600;
  columns: 1/2;
  text-align: right;
  font-size: 16px ;
`;

export const ValueStats = styled.p`
  color: black;
  font-weight: 600;
  columns: 2/3;
  text-align: right;
`;

export const ProgressBarFiller = styled.div`
  height: 15px;
  width: ${(props) => props.completed || 0}%;
  background-color: ${(props) =>
    props.completed < 50 ? "#ff7c2e" : "#ffdd69"};
  border-radius: 10px;
`;
