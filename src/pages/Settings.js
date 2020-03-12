import React from 'react';
import './../App.css';

function Settings(props) {
  return (
    <div>
      <h1>Settings</h1>
      <p>Units</p>
      <p><code>Metric</code> or <code>imperial</code>? You decide!</p>
      <p>Height</p>
      <p>You might consider yourself <code>short</code> or <code>tall</code>. I won't judge.</p>
    </div>
  );
}

export default Settings;