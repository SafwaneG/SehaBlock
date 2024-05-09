import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "#90e5fc";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomColor: "#bff0fd",
    backgroundColor: "#bff0fd",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    textAlign: "center",
    fontStyle: "bold",
    flexGrow: 1,
  },
  designation: {
    width: "40%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  model: {
    width: "30%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  quantity: {
    width: "10%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  available: {
    width: "20%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
});

const SparePartsTableHeader = () => (
  <View style={styles.container}>
    <Text style={styles.designation}>Désignation pièce</Text>
    <Text style={styles.model}>Modèle / Référence</Text>
    <Text style={styles.quantity}>Quantité</Text>
    <Text style={styles.available}>Disponible</Text>
  </View>
);

export default SparePartsTableHeader;
