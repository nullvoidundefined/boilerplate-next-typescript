import { ReactNode } from "react";

type LayoutNoAuthProps = {
  children: ReactNode;
};

const LayoutNoAuth = ({ children }: LayoutNoAuthProps) => {
  return (
    <>
      <div>No Auth Layout</div>
      <main>{children}</main>
    </>
  );
};

export { LayoutNoAuth };
