import React from 'react';

export interface IJournalProps {
  entry?: any;
}

export function Journal({ entry }: IJournalProps) {
  return (
    <div className='journal-body'>
      <div className='journal-side-bar'>side bar</div>
      <div className='journal-content'>main content</div>
    </div>
  );
}