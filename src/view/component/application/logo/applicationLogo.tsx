import { noop } from "lodash";

interface ApplicationLogoProps {
    onClick?: () => void;
}

const ApplicationLogo = ({ onClick }: ApplicationLogoProps) => {
    return <h1 onClick={onClick ? onClick : () => noop()}>LOGO</h1>;
};

export { ApplicationLogo };
