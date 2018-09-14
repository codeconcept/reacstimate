import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font
} from "@react-pdf/renderer";
import ReactDOM from "react-dom";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    marginLeft: "30"
  },
  section: {
    margin: 5,
    padding: 5,
    fontSize: 12,
    flexDirection: 'row',
    // border: '3px solid pink',
  },
  title: {
    margin: 5,
    fontSize: 15,
    textAlign: "center",
    backgroundColor: "#e4e4e4",
    textTransform: "uppercase"
  },
  body: {
    flexGrow: 1
  },
  row: {
    flexDirection: "row",
    width: "100%",
    height: 130,
    // border: "3px solid yellow"
  },
  rowSmallHeight: {
    flexDirection: "row",
    width: "100%",
    height: 85,
    // border: "3px solid yellow"
  },
  block: {
    flexGrow: 1
  },
  text: {
    width: "33.330%",
    margin: 5,
    fontFamily: "Oswald",
    textAlign: "justify"
  },
  leftColumn: {
    flexDirection: "column",
    fontSize: 12,
    marginLeft: 30,
    marginRight: 15,
    marginTop: 5,
    height: 90,
    // border: "3px solid red",
  },
  rightColumn: {
    flexDirection: "column",
    flexGrow: 10,
    fontSize: 12,
    marginLeft: 15,
    marginRight: 30,
    marginTop: 5,
    height: 90,
    // border: "3px solid blue",
  },
  line: {
    fontFamily: "Oswald",
    textAlign: "justify",
    fontSize: 12,
    margin: 5,
    padding: 5,
    width: 80,
    flexDirection: "row",
    // border: '3px solid orange'
  }
});

Font.register(`../fonts/Roboto-Regular.ttf`, { family: "Roboto" });
Font.register(
  "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
  { family: "Oswald" }
);

// const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;

const generateCorrespondingSpace = sentence => ' '.repeat(sentence.length);


const totals = {
  totalWithoutTaxes: 0,
  taxes: 0,
  totalTaxeIncluded: 0
}

const totalWithoutTaxes = (items) => {
  const resultWithoutTaxes = Object.keys(items)
    .map(key => {
      const amount = parseFloat(items[key].amount, 10);
      const quantity = parseInt(items[key].quantity, 10);
      return (amount * quantity);
    })
    .reduce((acc, curr) => {
      return acc += curr;
  }, 0);
  totals.totalWithoutTaxes = parseFloat(resultWithoutTaxes.toFixed(2));
  return totals.totalWithoutTaxes
  
};

const totalTaxeIncluded = (items) => {
  const resulTaxeIncluded = Object.keys(items)
  .map(key => {
    const amount = parseFloat(items[key].amount, 10)
    const quantity = parseInt(items[key].quantity, 10);
    const taxe = parseFloat(items[key].taxe, 10); 
    totals.taxes += (amount * quantity * taxe);
    const result = ((amount * quantity) + (amount * quantity * taxe));
    console.log('result', result);
    return result;
  })
  .reduce((acc, curr) => {
    return acc += curr;
  }, 0);
  totals.totalTaxeIncluded = parseFloat(resulTaxeIncluded.toFixed(2));
  return totals.totalTaxeIncluded;
};

// Create Document Component
const MyDocument = ({ text }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.row}>
        <View style={styles.leftColumn}>
          <Text>Code Concept</Text>
          <Text>Cs 30 817</Text>
          <Text>11 rue du clos courtel</Text>
          <Text>35700 rennes</Text>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.title}>DEVIS</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.leftColumn} />
        <View style={styles.rightColumn}>
          <Text>Société et/ou nom du client</Text>
          <Text>
            Client : {text.customerFirstName} {text.customerLastName}
          </Text>
        </View>
      </View>

      <View style={styles.rowSmallHeight}>
        <View style={styles.leftColumn}>
          <Text>Devis : {text.title} </Text>
          <Text>devis n°: {text.id} </Text>
        </View>
        <View style={styles.rightColumn} />
      </View>

      <View style={styles.rowSmallHeight}>
        <View style={styles.leftColumn}>
          <Text>Intitulé : {text.title} </Text>
        </View>
        <View style={styles.rightColumn} />
      </View>

      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.line}>Quantité</Text>
          <Text style={styles.line}>Désignation</Text>
          <Text style={styles.line}>Prix unitaire</Text>
          <Text style={styles.line}>Prix total HT</Text>
        </View>
      </View>    
      <View style={styles.container}>
          {Object.keys(text.items).map((key, index) => (
            <View style={styles.section} key={key}>
              <Text style={styles.line}>{text.items[key].quantity}</Text>
              <Text style={styles.line}>{text.items[key].description}</Text>
              <Text style={styles.line}>{text.items[key].amount} €</Text>
              <Text style={styles.line}>{parseInt(text.items[key].quantity, 10) *  text.items[key].amount} €</Text>
              {/* <Text style={styles.line}>{parseFloat(text.items[key].taxe) * 100}%</Text> */}
            </View>
          ))}
      </View>  
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.line}>{generateCorrespondingSpace('Quantité')}</Text>
          <Text style={styles.line}>{generateCorrespondingSpace('Désignation')}</Text>
          <Text style={styles.line}>Total HT</Text>
          <Text style={styles.line}>{totalWithoutTaxes(text.items)} €</Text>
        </View>
      </View>  
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.line}>{generateCorrespondingSpace('Quantité')}</Text>
          <Text style={styles.line}>{generateCorrespondingSpace('Désignation')}</Text>
          <Text style={styles.line}>Total TTC</Text>
          <Text style={styles.line}>{totalTaxeIncluded(text.items)} €</Text>
        </View>
      </View>  
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.line}>{generateCorrespondingSpace('Quantité')}</Text>
          <Text style={styles.line}>{generateCorrespondingSpace('Désignation')}</Text>
          <Text style={styles.line}>dont TVA</Text>
          <Text style={styles.line}>{totals.taxes.toFixed(2)} €</Text>
        </View>
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
