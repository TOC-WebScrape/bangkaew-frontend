import { LandingCard } from ".";
import { LANDING_CARD } from "../MockData";
interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = ({}: LandingPageProps) => {
  return (
    <div
      style={{
        paddingTop: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <LandingCard {...LANDING_CARD} />
      <LandingCard {...LANDING_CARD} />
      <LandingCard {...LANDING_CARD} />
    </div>
  );
};

export default LandingPage;
