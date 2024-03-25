import React from "react";
import { View, StyleSheet, Text } from "@react-pdf/renderer";
import ReportTableHeader from "./ReportTableHeader";
import ReportTableRow from "./reportTableRow";
import SparePartsTableHeader from "./SparePartsTableHeader";
import SparePartsTableRow from "./SparePartsTableRow";
import ReportTableFooter from "./reportTableFooter";

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 24,
    borderWidth: 1,
    borderColor: "#bff0fd",
  },
  text: {
    fontSize: "15px",
    marginTop: "12px",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#bff0fd",
    paddingTop: 10,
    paddingBottom: 2,
  },
  textTwo: {
    fontSize: "15px",
    marginTop: "40px",
    textAlign: "left",
    borderWidth: 2,
    borderColor: "#bff0fd",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 7,
  },
});

const ReportItemsTable = ({ data }) => (
  (
    <>
      <View style={styles.tableContainer}>
        <ReportTableHeader title={"DEMANDE D'INTERVENTION"} />
        <ReportTableRow items={data.demandeItems} />
        <ReportTableHeader title={"SUITE DONNEE PAR LE SERVICE"} />
        <ReportTableRow items={data.serviceItems} />
      </View>
      <Text style={styles.text}>Nature de réparation: {data.repairType}</Text>
      {data.repairType === "interne" ? (
        <>
          <View style={styles.tableContainer}>
            <ReportTableHeader
              title={"résultat d'intervention (interne)".toUpperCase()}
            />
            <ReportTableRow items={data.internalInterventionItems} />
          </View>
          {data.isSpareParts && (
            <View style={styles.tableContainer}>
              <SparePartsTableHeader />
              <SparePartsTableRow items={data.sparParts} />
              
            </View>
          )}
        </>
      ) : (
        <View style={styles.tableContainer}>
          <ReportTableHeader
            title={"résultat d'intervention (externe)".toUpperCase()}
          />
          <ReportTableRow items={data.externalInterventionItems} />
        </View>
      )}
      <Text style={styles.textTwo}>Décision du Médecin chef : </Text>
    </>
  )
);

export default ReportItemsTable;
