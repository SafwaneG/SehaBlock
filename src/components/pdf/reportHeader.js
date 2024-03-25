import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 9,
    width: '27%',
    textAlign: 'center',
    textDecoration: 'underline',
  },
});

const ReportHeader = ({ data }) => (
  <>
    <View style={styles.container}>
      <View>
        <Text>N°: {data.id}</Text>
        <Text>Service: {data.service}</Text>
      </View>
      <Text style={styles.label}>
        ROYAUME DU MAROC FORCES ARMEES ROYALES HOPITAL MILITAIRE D’INSTRUCTION MOHAMMED V
      </Text>
    </View>
  </>
);

export default ReportHeader;
