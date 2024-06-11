import React from 'react';

import LibraryGameCardSkeleton from '@/components/LibraryGameCardSkeleton';

import {range} from '@/utils'

async function VaporExerciseSkeleton() {
  return (
    <section className="max-width-wrapper">
      <header className="library-header">
        <h1>My games</h1>
      </header>
      <div className="game-grid">
        {range(0,8).map((i) => (
          <LibraryGameCardSkeleton key={i}/>
        ))}
      </div>
    </section>
  );
}

export default VaporExerciseSkeleton;
