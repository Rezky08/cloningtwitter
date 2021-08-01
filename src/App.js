import "./App.css";
import Icon from "./components/Icon";
import { ReactComponent as HomeIcon } from "./assets/icons/Home.svg";
import { ReactComponent as SearchIcon } from "./assets/icons/Search.svg";
import { ReactComponent as NotificationIcon } from "./assets/icons/Notification.svg";
import { ReactComponent as DirectMessageIcon } from "./assets/icons/DirectMessage.svg";
import { ReactComponent as TwitterIcon } from "./assets/icons/Twitter.svg";
import { ReactComponent as SparkIcon } from "./assets/icons/Spark.svg";

function App() {
  return (
    <div className="App">
      <div className="tw-header">
        <span className="tw-collapse-icon">
          <div className="tw-avatar sm"></div>
        </span>
        <div className="tw-brand">
          <Icon icon={<TwitterIcon />} />
        </div>
        <span className="tw-toggle">
          <Icon icon={<SparkIcon />} />
        </span>
      </div>

      <div className="tw-fleet-items">
        <div className="tw-avatar tw-fleet-self">
          <span className="tw-icon tw-plus-icon">+</span>
        </div>
        <div className="tw-avatar tw-fleet"></div>
        <div className="tw-avatar tw-fleet tw-fleet-seen"></div>
      </div>

      <div className="tw-tweet">
        <div className="tw-tweet-profile">
          <div className="tw-avatar"></div>
        </div>
        <div className="tw-tweet-content">
          <div className="tw-tweet-header">
            <div className="tw-tweet-header--left">
              <span className="tw-tweet-display-name">Username</span>
              <span className="tw-tweet-username">@username</span>
              <span className="tw-dot-separator">.</span>
              <div className="tw-tweet-time-diff">20h</div>
            </div>
            <div className="tw-tweet-header--right"> ... </div>
          </div>
          <div className="tw-tweet-fill-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              ante libero, blandit quis tortor a, pellentesque efficitur urna.
              Pellentesque ultricies molestie diam, quis rhoncus massa pulvinar
              accumsan. Nunc tincidunt nisi diam, consectetur pretium nisl
              interdum at. Praesent vestibulum urna odio,
            </p>
          </div>
          <div className="tw-tweet-footer">
            <span>Comment</span>
            <span>Retweet</span>
            <span>Like</span>
            <span>Share</span>
          </div>
        </div>
      </div>

      <div className="tw-navigation-container">
        <div className="tw-navigation-items">
          <span className="tw-navigation-item-active">
            <Icon icon={<HomeIcon />} />
          </span>
          <span className="tw-navigation-item">
            <Icon icon={<SearchIcon />} />
          </span>
          <span className="tw-navigation-item">
            <Icon icon={<NotificationIcon />} />
          </span>
          <span className="tw-navigation-item">
            <Icon icon={<DirectMessageIcon />} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
