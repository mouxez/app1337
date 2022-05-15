import { FC, useState } from "react";
import ColleaguesList from "./components/ColleaguesList/ColleaguesList";
import Header from "./components/Header/Header";
import PageContainer from "./components/PageContainer/PageContainer";

const App: FC = () => {
  const [viewType, setViewType] = useState<"table" | "list">("table");

  return (
    <PageContainer>
      <Header viewType={viewType} setViewType={setViewType} />
      <ColleaguesList viewType={viewType} />
    </PageContainer>
  );
};

export default App;
