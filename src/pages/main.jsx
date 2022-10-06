import React from 'react';
import Header from './../component/header';
import List from './../component/list';

function Main() {
  return (
    <div>
      <Header/>
      <div className="bg-neutral-700 min-h-screen">
        <List/>
      </div>
    </div>
  );
}

export default Main;
