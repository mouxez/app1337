import { FC, CSSProperties } from "react";
import { GithubOutlined, LinkedinOutlined, TwitterOutlined } from "@ant-design/icons";
import ColleagueType from "../../sharedTypes/colleague";
import Card from "../Card/Card";
import styles from "./ColleagueCard.module.css";

const { colleagueCard, nameWrap, descriptionWrap, socialsWrap, socialLink } = styles;

const iconStyle: CSSProperties = {
  fontSize: "24px",
  color: "#87878C",
};

type ColleagueCardProps = {
  colleagueInfo: ColleagueType;
};

const ColleagueCard: FC<ColleagueCardProps> = ({ colleagueInfo }) => {
  const socialsConfig = [
    {
      name: "linkedIn",
      icon: <LinkedinOutlined style={iconStyle} />,
      link: colleagueInfo.linkedIn ? `https://www.linkedin.com${colleagueInfo.linkedIn}` : null,
    },
    {
      name: "gitHub",
      icon: <GithubOutlined style={iconStyle} />,
      link: colleagueInfo.gitHub ? `https://github.com/${colleagueInfo.gitHub}` : null,
    },
    {
      name: "twitter",
      icon: <TwitterOutlined style={iconStyle} />,
      link: colleagueInfo.twitter ? `https://twitter.com/${colleagueInfo.twitter}` : null,
    },
  ];

  return (
    <Card className={colleagueCard}>
      <img src={colleagueInfo.imagePortraitUrl} alt="colleague" width="100%" />
      <div className={descriptionWrap}>
        <div className={nameWrap}>
          <span>{colleagueInfo.name}</span>
          <span>Office: {colleagueInfo.office}</span>
        </div>
        <div className={socialsWrap}>
          {socialsConfig?.map(
            (item) =>
              item.link && (
                <a
                  href={`${item.link}`}
                  className={socialLink}
                  target="_blank"
                  title={item.name}
                  rel="noreferrer"
                  key={item.link}
                >
                  {item.icon}
                </a>
              ),
          )}
        </div>
      </div>
    </Card>
  );
};

export default ColleagueCard;
