import React from 'react';

import { Link, useParams } from 'react-router-dom';

function ViewerPage() {
  const { id } = useParams();

  return (
    <section style={{ position: 'relative', top: '80px' }}>
      <pre>
        <Link to="/" style={{ color: 'black' }}>
          {' '}
          ← go back
        </Link>
      </pre>
      <iframe
        width="800"
        height="450"
        allowFullScreen
        frameBorder="0"
        title="rick roll"
        src={`https://www.youtube.com/embed/${id}?controls=0&autoplay=1`}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      />
    </section>
  );
}

export default ViewerPage;
