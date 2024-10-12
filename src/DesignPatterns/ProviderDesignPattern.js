// import React, { useEffect, useState } from "react";

// export const FeatureFlag = React.createContext({});

// export const FeatureFlagProvider = ({ children }) => {
//   const [features, setFeatures] = useState({
//     darkMode: true,
//     chatEnabled: false
//   });

//   useEffect(() => {
//     // make api call to get features list
//     // and update the state on mount
//   }, []);

//   return (
//     <FeatureFlag.Provider value={{ features }}>{children}</FeatureFlag.Provider>
//   );
// };

// const ChatWrapper = () => {
//   const { features } = React.useContext(FeatureFlag);
//   return features.isChatEnabled ? <Chat /> : null;
// };

// const App = () => {
//   return (
//     <FeatureFlagProvider>
//       <ChatWrapper />
//     </FeatureFlagProvider>
//   );
// };

//this is the provider design pattern and it can be achieved by react context api
