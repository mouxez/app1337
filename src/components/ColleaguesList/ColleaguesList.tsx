import { FC, useState, useEffect } from "react";
import axios from "axios";
// import aws from "aws-sdk";
import ColleagueCard from "../ColleagueCard/ColleagueCard";
import ColleagueType from "../../sharedTypes/colleague";
import Spin from "../Spin/Spin";
import styles from "./ColleaguesList.module.css";

const { tableContainer, container } = styles;

// the reason why I commented this code is because of official issue with aws-sdk package (https://github.com/aws/aws-sdk-js/issues/3501)
// to continue usage of aws-sdk I have to eject the CRA and add node-polyfill-webpack-plugin (https://www.npmjs.com/package/node-polyfill-webpack-plugin)
// then I have to make some changes using this package in webpack.config.js
// to be honest I think that it's a tricky way and may cose work instability of my assignment project

// this is the code for the normal aws-sdk use case
// const apiKeyProd = new aws.S3({
//  secretAccessKey: process.env.REACT_APP_API_KEY,
// });

// const isDevEnv = !process.env.NODE_ENV || process.env.NODE_ENV === "development";
// const apiKeyDev = process.env.REACT_APP_API_KEY;
// const apiKey = isDevEnv ? apiKeyDev : apiKeyProd;

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
