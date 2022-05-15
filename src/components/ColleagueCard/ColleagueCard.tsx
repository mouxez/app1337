import { FC, CSSProperties, memo } from "react";
import { GithubOutlined, LinkedinOutlined, TwitterOutlined, MailOutlined } from "@ant-design/icons";
import ColleagueType from "../../sharedTypes/colleague";
import Card from "../Card/Card";
import styles from "./ColleagueCard.module.css";

const { colleagueCardTable, colleagueCardList, nameWrap, descriptionWrap, socialsWrap, socialLink, avatarListView } =
  styles;

const iconStyle: CSSProperties = {
  fontSize: "24px",
  color: "#87878C",
};

type ColleagueCardProps = {
  colleagueInfo: ColleagueType;
  viewType: string;
};

const ColleagueCard: FC<ColleagueCardProps> = memo(
  ({ colleagueInfo, viewType }) => {
    const isListView = viewType === "list";

    // define classNames depend on view type
    const cardStyle = isListView ? colleagueCardList : colleagueCardTable;
    const avatar = isListView ? avatarListView : "";

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
      {
        name: "email",
        icon: <MailOutlined style={iconStyle} />,
        link: colleagueInfo.email ? `mailto: ${colleagueInfo.email}` : null,
      },
    ];

    return (
      <Card className={cardStyle}>
        <img src={colleagueInfo.imagePortraitUrl} className={avatar} alt="colleague" width="100%" />
        <div className={descriptionWrap}>
          <div className={nameWrap}>
            <span>{colleagueInfo.name}</span>
            <span>Office: {colleagueInfo.office}</span>
          </div>
          <div className={socialsWrap}>
            {/* return icon in case user has the link for that social */}
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
  },
  (prevProps, nextProps): boolean => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  },
);

export default ColleagueCard;
