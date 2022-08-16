import styled, { css } from "styled-components";

const v = {
  headerHeight: "60px",
  smSpacing: `8px`,
  mdSpacing: `16px`,
  lgSpacing: `32px`,
  xlSpacing: `48px`,
  xxlSpacing: `64px`,
  borderRadius: "4px",
  boxShadow: `0 1px 1px rgba(0,0,0,0.15), 
    0 2px 2px rgba(0,0,0,0.15)`,
};

const btnReset = css`
  font-family: inherit;
  outline: none;
  border: none;
  background: none;
  letter-spacing: inherit;
  color: inherit;
  font-size: inherit;
  text-align: inherit;
  padding: 0;
`;

export const SForm = styled.form`
  width: 100%;
  border-radius: ${v.borderRadius};
  padding: ${v.mdSpacing};
`;

export const SFormControl = styled.div`
  :first-of-type {
    margin-top: ${v.mdSpacing};
  }
  :not(:last-of-type) {
    margin-bottom: ${v.smSpacing};
  }
`;

export const SLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-left: 4px;
  margin-bottom: calc(${v.smSpacing} / 4);
`;

export const SInput = styled.input`
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.textFade};
  width: 100%;
  padding: ${v.smSpacing};
  font-size: 14px;
  border-radius: ${v.borderRadius};
`;

export const SSelect = styled.select`
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.textFade};
  width: 100%;
  padding: ${v.smSpacing};
  font-size: 14px;
  border-radius: ${v.borderRadius};
`;

export const SRange = styled(SInput)`
  width: 50%;
`;

export const SInputWrap = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const SButton = styled.button`
  ${btnReset};
  width: 100%;
  background: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.color};
  padding: ${v.smSpacing};
  display: flex;
  justify-content: center;
  border-radius: ${v.borderRadius};
  margin-top: ${v.mdSpacing};
  cursor: pointer;
`;
