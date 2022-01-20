import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 46px;

  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 20px;

  z-index: 5000;

  input {
    font-size: 0.75rem;
    font-weight: 400;
    background-color: transparent;
    border: 0;
    margin: 0 20px;
    /* border: 1px solid black; */
    height: 20px;
    padding: 5px;
    outline: none;
    font-size: 0.9rem;
  }
`;
