import styled, { css } from "styled-components";

export const CardContainer = styled.div<{
  width: string;
  height: string;
  noShadow: boolean;
}>`
  background-color: ${(props) => props.theme.colors.background};

  width: ${(props) => props.width};
  height: ${(props) => props.height};

  ${(props) =>
    !props.noShadow &&
    css`
      box-shadow: 5px 4px 6px rgba(0, 0, 0, 0.25);
    `}

  border-radius: 20px;

  padding: 20px;

  display: flex;
  align-items: center;
  flex-direction: column;

  z-index: 5000;
`;
