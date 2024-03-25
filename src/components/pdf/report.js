import React from 'react';
import { Page, Document, StyleSheet } from '@react-pdf/renderer';
import ReportHeader from './reportHeader';
import ReportItemsTable from './reportItemsTable';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: 'column',
  },
});

const Report = ({ requestData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <ReportHeader data={requestData} />
      <ReportItemsTable data={requestData} />
    </Page>
  </Document>
);

export default Report;
