import React, { createContext, useState } from "react";

export const IssueContext = createContext();

export const IssueProvider = ({ children }) => {
  const [card, setCard] = useState(null);

  const setIssueCard = (cardData) => {
    setCard(cardData);
  };

  return (
    <IssueContext.Provider value={{ card, setIssueCard }}>
      {children}
    </IssueContext.Provider>
  );
};
