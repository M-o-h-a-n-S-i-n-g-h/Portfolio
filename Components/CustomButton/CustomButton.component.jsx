import { ButtonStyle } from "./CustomButton.styled";

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <ButtonStyle>
      <div className="button">{children}</div>
    </ButtonStyle>
  );
};

export default CustomButton;
