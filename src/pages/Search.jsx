import React from "react";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import Icon from "@/components/Icon";
import Avatar from "@/components/Avatar";
import { ReactComponent as SettingIcon } from "@/assets/icons/Settings.svg";
import API from "@/functions/apis";

function SearchResultUser(props) {
  return (
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
  );
}
class Search extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(value) {
    console.log(value);
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
            {[...Array(10)].map((value, index) => {
              return (
                <SearchResultUser
                  key={index}
                  username="rezky.setiawan85"
                  name="Rezky Setiawan"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ab hic quis est laborum et animi delectus, in necessitatibus recusandae similique commodi ea tempore, minima, voluptates vitae asperiores dolor aliquid."
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
