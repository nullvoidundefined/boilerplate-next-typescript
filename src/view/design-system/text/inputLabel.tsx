import styled from "styled-components";
import { APPLICATION_COLOR } from "../../../constant";

export const StyledInputLabel = styled.label`
  font-weight: bold;
  margin: 0;
`;

export const StyledInputSubLabel = styled.div<{ horizontal: boolean }>`
  color: ${APPLICATION_COLOR.TEXT_COLOR_DARKEST};
  font-size: 12px;
  padding-top: 1px;
  margin: ${({ horizontal }) =>
    horizontal ? "0 0 0 0.50rem" : "0 0  0.25rem 0"};
`;

type InputLabelGroupProps = {
  label: string;
  formDataKey: string;
  horizontal?: boolean;
  sublabel?: string;
};

export const InputLabelGroup = ({
  label,
  formDataKey,
  horizontal = false,
  sublabel,
}: InputLabelGroupProps) => {
  return (
    <div className={horizontal ? "d-flex" : ""}>
      <div className="align-items-center d-flex">
        <StyledInputLabel htmlFor={formDataKey}>{label}</StyledInputLabel>
        {sublabel && horizontal ? (
          <StyledInputSubLabel horizontal={true}>
            {sublabel}
          </StyledInputSubLabel>
        ) : null}
      </div>
      {sublabel && !horizontal ? (
        <StyledInputSubLabel horizontal={false}>{sublabel}</StyledInputSubLabel>
      ) : null}
    </div>
  );
};
