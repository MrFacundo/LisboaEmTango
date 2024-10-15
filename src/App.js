import React from "react";
import Home from "./pages/Home";
import { Helmet } from 'react-helmet';
import { jsonLdData } from './jsonldData';
import cookies from "js-cookie";

function App() {
  const currentLanguageCode = cookies.get("i18next") || "pt"; // Default to Portuguese
  const jsonLdToRender = jsonLdData[currentLanguageCode];

  return (
    <div>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(jsonLdToRender)}
        </script>
      </Helmet>
      <Home />
    </div>
  );
}

export default App;
