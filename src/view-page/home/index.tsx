import Button from "../../view-design-system/button";
import utilStyles from "../../style/global.module.css";

type HomePageProps = {
  onButtonClick: () => void;
};

const HomePage = ({ onButtonClick }: HomePageProps) => {
  return <Button onClick={onButtonClick}>Navigate to Items Page</Button>;
};

export { HomePage };
