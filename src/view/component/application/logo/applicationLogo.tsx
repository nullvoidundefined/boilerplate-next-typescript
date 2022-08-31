interface ApplicationLogoProps {
    onClick: () => void;
}

const ApplicationLogo = ({ onClick }: ApplicationLogoProps) => {
    return <h1 onClick={onClick}>LOGO</h1>;
};

export { ApplicationLogo };
