import React, { Component } from "react";
import PropTypes from "prop-types";

import _ from "lodash";
import cn from "classnames";

const ResultItem = ({ item }) => {
  const itemType = item.success ? "success" : "error";

  return (
    <div className={cn("result-list__item", `result-list__item--${itemType}`)}>
      {item.success
        ? `${item.email} is a GDC member`
        : `BOWWWW we don't know ${item.email}`}
    </div>
  );
};

export default class ResultList extends Component {
  render() {
    const { list } = this.props;
    debugger;
    return (
      <div className="result-list">
        {_.map(list, (item, index) => (
          <ResultItem key={index} item={item} />
        ))}
      </div>
    );
  }
}

ResultList.propTypes = {
  list: PropTypes.array
};
