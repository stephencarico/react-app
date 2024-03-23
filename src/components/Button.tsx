import { ReactNode } from "react";

type Variant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark"
  | "link";

interface Props {
  variant?: Variant;
  children: ReactNode;
}

const Button = ({ variant, children }: Props) => {
  return (
    <button type="button" className={`btn btn-${variant}`}>
      {children}
    </button>
  );
};

export default Button;
