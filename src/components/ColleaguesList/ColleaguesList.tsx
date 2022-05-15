import { FC, useState, useEffect } from "react";
import axios from "axios";
import ColleagueCard from "../ColleagueCard/ColleagueCard";
import ColleagueType from "../../sharedTypes/colleague";
import Spin from "../Spin/Spin";
import styles from "./ColleaguesList.module.css";

const { tableContainer, container } = styles;

const apiKey = process.env.REACT_APP_API_KEY;

type ColleaguesListProps = {
  viewType: string;
};

const ColleaguesList: FC<ColleaguesListProps> = ({ viewType }) => {
  const [colleaguesList, setColleaguesList] = useState<Array<ColleagueType> | null>(null);

  const containerClassName = viewType === "table" ? `${container} ${tableContainer}` : container;

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
    <div className={containerClassName}>
      {colleaguesList?.map((colleagueInfo: ColleagueType, index) => {
        const compositeKey = `${colleagueInfo?.email}-${index}`;

        // return the card in case user is published
        return (
          colleagueInfo?.published && (
            <ColleagueCard colleagueInfo={colleagueInfo} viewType={viewType} key={compositeKey} />
          )
        );
      })}
    </div>
  ) : (
    <Spin />
  );
};

export default ColleaguesList;
