import React from 'react';
import uuid from 'react-uuid';

import { useVideo } from '../../state';

function History() {
  const { state } = useVideo();
  const { history } = state;

  return (
    <div>
      <h3>Search History</h3>
      <ul>
        {history.map((item) => (
          <li key={uuid()}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default History;
