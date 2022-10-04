import React from 'react';
import Header from './component/header';

function App() {
  return (
    <div>
      <Header/>
      <div className="flex flex-row min-h-screen">
        <div className="w-4/12 bg-neutral-700 px-4">
          <h1 className="font-sans text-base font-medium text-white">INI LIST</h1>
        </div>
        <div className="w-full bg-neutral-600 px-4">
          <h1 className="font-sans text-base font-medium text-white">ini chatbox</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
