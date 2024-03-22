import styled from "@emotion/styled";

const DotStyled = styled.div<{ active: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#FF6B92" : "#F2F4F5")};
  margin: 0 5px;
  /* cursor: pointer; */
  z-index: 999;
`;

interface DotProps {
  active: boolean;
}

const Dot = ({ active }: DotProps) => {
  return <DotStyled active={active} />;
};

export default Dot;
