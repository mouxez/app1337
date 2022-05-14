import { FC } from "react";
import ColleaguesList from "./components/ColleaguesList/ColleaguesList";
import Controls from "./components/ControlsPanel/ControlsPanel";
import PageContainer from "./components/PageContainer/PageContainer";

const App: FC = () => {
  return (
    <PageContainer>
      <Controls />
      <ColleaguesList />
    </PageContainer>
  );
};

export default App;
