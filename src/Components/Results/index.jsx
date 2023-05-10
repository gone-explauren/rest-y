import React from 'react';
import './Results.scss';

function Results({ data }) {
  return (
    <section className='results' >
      <pre data-testid='test-results'>{data ? JSON.stringify(data, undefined, 2) : null}</pre>
    </section>
  )
}

export default Results;