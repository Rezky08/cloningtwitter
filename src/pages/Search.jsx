import React from "react";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import Icon from "@/components/Icon";
import Avatar from "@/components/Avatar";
import { ReactComponent as SettingIcon } from "@/assets/icons/Settings.svg";
import { Link } from "react-router-dom";
import { searchRequest } from "../functions/apiRequests";

function SearchResultUser(props) {
  return (
    <Link to={`/${props?.username}`}>
      <div className="tw-search-result--user-item">
        <div className="tw-search-result--user-item-profile-picture">
          <Avatar />
        </div>
        <div className="tw-search-result--user-item-detail">
          <span className="display-name">{props.name}</span>
          <span className="username">@{props.username}</span>
          <p className="description">{props.description}</p>
        </div>
      </div>
    </Link>
  );
}
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(value) {
    searchRequest(value).then((data) => {
      this.setState({ users: data });
    });
  }
  render() {
    return (
      <div className="tw-search">
        <DefaultLayout
          title=" "
          right={
            <div className="tw-search-header">
              <input
                type="text"
                placeholder="Search Twitter"
                onChange={(e) => this.onSearchChange(e.target.value)}
              />
              <Icon icon={<SettingIcon />} />
            </div>
          }
          borderless
        >
          <div className="tw-search-result--users">
            {this.state.users.map((user, index) => {
              return (
                <SearchResultUser
                  key={index}
                  username={user.username}
                  name={user.username}
                  description={user.description}
                />
              );
            })}
          </div>
        </DefaultLayout>
      </div>
    );
  }
}

export default Search;
