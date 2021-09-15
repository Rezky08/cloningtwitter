import React from "react";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import Icon from "@/components/Icon";
import { ReactComponent as SettingIcon } from "@/assets/icons/Settings.svg";

class Search extends React.Component {
  render() {
    return (
      <div className="tw-search">
        <DefaultLayout
          right={
            <div className="tw-search-header">
              <input type="text" placeholder="Search Twitter" />
              <Icon icon={<SettingIcon />} />
            </div>
          }
        ></DefaultLayout>
      </div>
    );
  }
}

export default Search;
