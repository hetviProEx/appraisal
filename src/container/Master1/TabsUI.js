import React, { Component } from "react";

import { TabsConst } from "./constant";

export class TabsUI extends Component {
  render() {
    const { countHandle, count } = this.props;
    return (
      <div className="tabsDiv">
        {TabsConst?.map((a, i) => {
          return (
            <div
              key={i}
              className={`tabComp pointer ${i === count ? "selectedTab" : ""} `}
              onClick={() => countHandle(a.name,i)}
            >
              {a.name}
            </div>
          );
        })}
      </div>
    );
  }
}
