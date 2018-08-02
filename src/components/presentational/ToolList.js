import React from 'react';

import './ToolList.scss';

const ToolList = ({ toolList }) => (
  <ul className="ToolList">
  {
    toolList.map((elem) => {
      const { id, name, url } = elem;

      return (
        <li className="ToolList__item" key={id}>
          <a href={url} target="_blank">{name}</a>
        </li>
      );
    })
  }
  </ul>
)

export default ToolList;
