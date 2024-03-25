import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: '#bff0fd',
    backgroundColor: '#bff0fd',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 28,
    textAlign: 'left',
    fontStyle: 'bold',
    flexGrow: 1,
    justifyContent: 'center',
  },
  description: {},
});

const ReportTableHeader = ({ title, sparPartDispo }) => (
  <View style={styles.container}>
    <Text style={styles.description}>{title}</Text>
    <Text style={styles.description}>{sparPartDispo}</Text>
  </View>
);

export default ReportTableHeader;
