import React from 'react';
import PropTypes from 'prop-types';

import './ToolList.scss';

const ToolList = ({ toolList }) => (
  <ul className="ToolList">
    <li className="ToolList__header">
      This boilerplate includes:
    </li>
    {
      toolList.map((elem) => {
        const { id, name, url } = elem;

        return (
          <li className="ToolList__item" key={id}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </li>
        );
      })
    }
  </ul>
);

ToolList.propTypes = {
  toolList: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default ToolList;
