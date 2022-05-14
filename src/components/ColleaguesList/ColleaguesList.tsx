import { FC, useState, useEffect } from "react";
import axios from "axios";
import styles from "./ColleaguesList.module.css";
import ColleagueCard from "../ColleagueCard/ColleagueCard";
import ColleagueType from "../../sharedTypes/colleague";
import Spin from "../Spin/Spin";

const { container } = styles;

const apiKey = process.env.REACT_APP_API_KEY;

const ColleaguesList: FC = () => {
  const [colleaguesList, setColleaguesList] = useState<Array<ColleagueType> | null>(null);

  useEffect(() => {
    axios
      .get("https://api.1337co.de/v3/employees", {
        headers: {
          Authorization: `${apiKey}`,
        },
      })
      .then((res) => {
        setColleaguesList(res.data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  return colleaguesList ? (
    <div className={container}>
      {colleaguesList?.map((colleagueInfo: ColleagueType, index) => {
        const compositeKey = `${colleagueInfo?.email}-${index}`;

        return colleagueInfo?.published && <ColleagueCard colleagueInfo={colleagueInfo} key={compositeKey} />;
      })}
    </div>
  ) : (
    <Spin />
  );
};

export default ColleaguesList;
