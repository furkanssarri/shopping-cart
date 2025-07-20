import styled from "styled-components";

const colors = {
  text: {
    black: "#3F3F3F",
    white: "#FFF",
    blue: "#3D5AFE",
    disabled: "#9E9E9E",
  },
  backgrounds: {
    default: ["#E0E0E0", "#AEAEAE"],
    primary: ["#646cff", "rgba(128, 134, 252, 1)"],
    secondary: ["#455A64", "#1C313A"],
    danger: ["#D32F2F", "#9A0007"],
    outline: ["none", "rgba(128, 134, 252, 0.1)"],
  },
};
const shadow = ["none", "0px 2px 3px rgba(51, 51, 51, 0.2)"];
const sizes = {
  sm: "6px 12px",
  md: "8px 16px",
  lg: "11px 22px",
};

const StyledButton = styled.button`
  border-radius: 6px;
  padding: ${(props) => props.$size && sizes[props.$size]};
  box-shadow: ${(props) => (props.$disableShadow ? shadow[0] : shadow[1])};
  border: ${(props) =>
    props.$variant === "outline" ? `1px solid ${colors.text.blue}` : "none"};
  font-family: "Noto Sans JP";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  background: none;
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 0;
  cursor: pointer;
  color: ${colors.text.black};
  background: ${colors.backgrounds.default[0]};

  ${(props) => {
    if (props.$color)
      return `
      background: ${colors.backgrounds[props.$color][0]};
      color: ${
        props.$color === "default" ? colors.text.black : colors.text.white
      };
    `;
  }}

  ${(props) => {
    if (props.$variant === "default")
      return `background: ${colors.backgrounds.default};`;
    if (props.$variant === "outline")
      return `background: none; color: ${colors.text.blue};`;
    if (props.$variant === "text")
      return `background: none; box-shadow: none;  color: ${colors.text.blue};`;
  }}

  &:hover {
    background-color: ${(props) => {
      if (props.$variant === "default") return colors.backgrounds.default[1];
      if (props.$variant === "outline") return colors.backgrounds.outline[1];
      if (props.$variant === "text") return colors.backgrounds.outline[1];

      if (props.$color) return colors.backgrounds[props.$color][1];
      return colors.backgrounds.default[1];
    }};
  }

  &:disabled {
    color: ${colors.text.disabled};
    background-color: ${colors.backgrounds.default[0]};
    ${(props) => (props.$variant === "text" ? "background: none;" : undefined)}
    cursor: unset;
    box-shadow: none;
  }
`;

export default StyledButton;
