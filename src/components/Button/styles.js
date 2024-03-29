import styled from 'styled-components';

export const Button = styled.button`
  background: ${(props) => props.color || '#2e186a'};
  color: ${(props) => (props.color ? '#2E186A' : '#fff')};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: ${(props) => (props.color ? '1px solid #2E186A' : '0px')};
  border-radius: 8px;
  height: 60px;
  outline: none;
  cursor: pointer;
  margin-top: 0.625rem;
  // max-width: 180px;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
  @media only screen and (max-width: 400px) {
    width: 100%;
  }
  @media only screen and (max-width: 300px) {
    width: 100%;
  }
`;
