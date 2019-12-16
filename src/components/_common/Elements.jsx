import styled from "styled-components";

export const CustomP = styled.p`
  color: ${props => props.color || `initial`};
  margin: auto;
  line-height: 25px;
  font-weight: 100;
`;
