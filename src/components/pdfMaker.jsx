import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import ReactDOM from "react-dom";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4"
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    fontSize: 30
  }
});

const decimalToPercent = decimal => {
  return (decimal * 100);
}

// Create Document Component
const MyDocument = ({ text }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Devis : {text.title} </Text>
        <Text>n°: {text.id} </Text>
        <Text>
          Client : {text.customerFirstName} {text.customerLastName}
        </Text>
        <Text>Articles : </Text>
        {Object.keys(text.items).map((key, index) => (
          <Text key={key}>
            {text.items[key].quantity} &nbsp;
            {text.items[key].description} &nbsp;
            {parseFloat(text.items[key].taxe)* 100}% &nbsp;
            {text.items[key].amount} €
          </Text>
        ))}
      </View>
    </Page>
  </Document>
);

export const renderPDFInDOM = estimateState => {
  console.log(estimateState);
  const Wrapper = () => (
    <div>
      <MyDocument text={estimateState} />
    </div>
  );

  ReactDOM.render(<Wrapper />, document.getElementById("pdf"));
};
