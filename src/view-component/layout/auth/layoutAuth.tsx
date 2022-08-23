import { ReactNode } from "react";

type LayoutAuthProps = {
  children: ReactNode;
};

const LayoutAuth = ({ children }: LayoutAuthProps) => {
  return (
    <>
      <div>Auth Layout</div>
      <main>{children}</main>
    </>
  );
};

export { LayoutAuth };
