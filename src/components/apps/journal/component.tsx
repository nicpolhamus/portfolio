import React from 'react';

export interface IJournalProps {
  entry?: any;
}

export function Journal({ entry }: IJournalProps) {
  return (
    <div>
      <div className='journal-side-bar'>side bar</div>
      <div className='journal-body'>main content</div>
    </div>
  );
}