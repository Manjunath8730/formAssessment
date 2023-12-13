import React from 'react';
import Flexi from './components/Flexi';
import "./App.css"

function App() {
  const onFlexiSubmit = (formData) => {
    // Handle the form submission data
    console.log(formData);
  };

  const flexiConfig = {
    items: [
      {
        name: "person_name",
        label: "Person's Name",
        type: "TextField",
      },
      {
        name: "states",
        label: "Person's state",
        type: "DropDown",
        values: ["Maharashtra", "Kerala", "Tamil Nadu"],
      },
      // Add more items as needed
    ],
  };
  return (
    <>
      <Flexi onSubmit={onFlexiSubmit} config={flexiConfig} />;
    </>
  );
}

export default App;