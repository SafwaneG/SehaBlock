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
    justifyContent: 'left',
  },
  description: {
    paddingLeft: '10px',
  },
});

const ReportTableFooter = ({ label, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>{label}</Text>
      <Text style={styles.description}>{value}</Text>
    </View>
  );
};

export default ReportTableFooter;
