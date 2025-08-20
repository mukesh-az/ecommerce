import styled, { css } from "styled-components";

export const flexStyles = css`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  align-items: ${(props) => props.alignItems || "start"};
  justify-content: ${(props) => props.justifyContent || "start"};
`;

export const CardWrapper = styled.div`
  ${(props) => props.isFlex && flexStyles};
  background: ${(props) => props.background || "transparent"};
  color: ${(props) => props.color};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  padding: ${(props) => props.padding || " 0"};
  margin: ${(props) => props.margin || "0"};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
`;

export const StyledCard = styled.div`
  ${(props) => props.isFlex && props.flexStyles && props.flexStyles};
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  width: ${(props) => props.width || "100%"};
  min-width: ${(props) => props.minWidth || "275px"};
  height: ${(props) => props.height || "auto"};
  min-height: ${(props) => props.minHeight || "auto"};
  padding: ${(props) => props.padding || " 0"};
  margin: ${(props) => props.margin || "0"};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
`;