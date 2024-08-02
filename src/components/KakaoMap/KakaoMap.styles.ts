import styled from "@emotion/styled";

export const Pin = styled.button`
  min-width: 70px;
  max-width: 106px;
  height: 38px;
  flex-shrink: 0;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 8px;
  margin: 0 16px;

  ${({ theme }) => theme.text.detail2_bold};
  color: ${({ theme }) => theme.colors.gray[600]};

  border-radius: 71px;
  background-color: #fff;

  transition: all 0.2s ease;

  border: 1px solid #00b207;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  &::after {
    content: "";
    position: absolute;
    bottom: -14px;
    left: 50%;
    transform: translateX(-50%);
    border-top: 14px solid #fff;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 1px solid transparent;
  }

  &[data-selected="true"] {
    color: #fff;

    border: 1px solid #fff;
    background-color: #00b207;

    &::after {
      border-top: 14px solid #00b207;
    }
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);

  padding: 5px 10px;

  border-radius: 200px;
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  background: #fff;
  box-shadow: 0px 2px 18px 3px rgba(0, 0, 0, 0.1);

  ${({ theme }) => theme.text.body2_reg};
  color: ${({ theme }) => theme.colors.pink[400]};

  z-index: 1001;
  white-space: nowrap;
`;

export const clustererStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "80px",
  height: "80px",
  padding: "10px",
  border: "2px solid #fff",
  borderRadius: "50%",
  background:
    "linear-gradient(102deg, rgba(58, 200, 244, 0.90) 10.91%, rgba(94, 155, 243, 0.90) 89.69%)",
  boxShadow: "0px 2px 18px 3px rgba(0, 0, 0, 0.10)",
  fontSize: "20px",
  fontWeight: 600,
  color: "#fff"
};
