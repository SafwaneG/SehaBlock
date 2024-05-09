import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "#90e5fc";
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: "#bff0fd",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    fontStyle: "bold",
  },
  designation: {
    width: "40%",
    textAlign: "left",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
  },
  model: {
    width: "30%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "left",
    paddingLeft: 8,
  },
  quantity: {
    width: "10%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "left",
    paddingLeft: 8,
  },
  available: {
    width: "20%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "left",
    paddingLeft: 8,
  },
});

const SparePartsTableRow = ({ items }) => {
  console.log("items", items);
  const rows = items.map((item, i) => (
    <View style={styles.row} key={i}>
      <Text style={styles.designation}>{item.designation}</Text>
      <Text style={styles.model}>{item.model}</Text>
      <Text style={styles.quantity}>{item.quantity}</Text>
      <Text style={styles.available}>{item.isAvailable ? "Oui" : "Non"}</Text>
    </View>
  ));
  return <>{rows}</>;
};

export default SparePartsTableRow;
