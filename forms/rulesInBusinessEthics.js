/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState, useCallback} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import {CustomFileInput, CustomButton} from '../Components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors, images} from '../constants';

const RulesinBusinessEthics = ({navigation}) => {
  const [name, setName] = useState();
  return (
    <SafeAreaView style={styles.SafeAreaViewContainer}>
      <View>
        <View style={styles.header}>
          <Ionicons
            name="chevron-back"
            color="#23557F"
            size={30}
            onPress={() => navigation.navigate('Welcome Screen')}
          />
          <Text style={styles.headerText}>RULES ON BUSINESS ETHICS</Text>
        </View>
        <Text style={styles.instruction}>
          Please kindly fill this document. Signing where required
        </Text>
      </View>
      {/* {!loading && ( */}
      <ScrollView
        contentContainerStyle={{marginTop: 10}}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.paragraphHeader}> GENERAL</Text>
        <Text style={styles.paragraphTXT}>
          Each of us is required annually to certify that we have read,
          understand, and agree to comply with the Rules on Business Ethics
          (RBE).
        </Text>
        <Text style={styles.paragraphHeader}>Compliance </Text>
        <Text style={styles.paragraphTXT}>
          Each of us is responsible for our own compliance with the RBE and all
          other corporate policies, as well as local laws and regulations.
          Supervisors and managers have additional responsibility to help their
          staff understand and apply these values and to maintain an environment
          that promotes consistent compliance.{'\n'} No action that would
          otherwise be precluded by these rules is permissible merely because it
          is customary in a particular location or area of business.{'\n'}
          Employees who do not comply with the RBE may be subject to
          disciplinary action, including termination of employment.
        </Text>
        <Text style={styles.paragraphHeader}>Compliance with Local Law </Text>
        <Text style={styles.paragraphTXT}>
          Ecobank employees and businesses must, at all times, comply with the
          letter and spirit of all relevant laws and regulations.{'\n'}
          Special care must be applied in areas where the law is evolving or
          being extended to situations not previously covered. The company
          should seek to adopt the more conservative position whenever conflict
          arises.{'\n'} If there appears to be a conflict between the RBE and
          local laws and regulations with respect to the interpretation of any
          law or regulation, the legal or compliance officer should be
          consulted.
        </Text>

        <Text style={styles.paragraphHeader}>Confidential Information</Text>

        <Text style={styles.paragraphHeader}>Enforcement</Text>
        <Text style={styles.paragraphTXT}>
          We must avoid intentional or unintentional disclosures of sensitive or
          confidential information. Such information should be used only in
          connection with our job responsibilities. Sensitive or confidential
          information may only be shared in the following circumstances:{'\n'}
          a. With other Ecobank employees who have a need, and are authorized to
          have this information.{'\n'} b. With third parties where this has been
          authorized in writing by the customer, Ecobank employee, supplier or
          other owner of the information.{'\n'} c. Pursuant to a statute or
          regulation, a court order or other legal process.{'\n'} Sensitive or
          confidential information includes (but is not limited to):{'\n'} a.
          Customer information. {'\n'} a. Customer information.{'\n'} b. Ecobank
          trade secrets and know-how, etc.
          {'\n'} c. Management information systems, data, and reports.{'\n'} d.
          Non-public Information.{'\n'} e. Information arising from our dealings
          with regulators and government agencies.{'\n'} f. Supplier/vendor
          information.{'\n'} g. Any information that is potentially prejudicial
          to the interest of the group.
        </Text>
        <Text style={styles.paragraphHeader}>Conflict of Interest </Text>
        <Text style={styles.paragraphTXT}>
          We must avoid circumstances in which our personal interests conflict,
          or may appear to conflict with the interests of Ecobank or its
          customers, for example:{'\n'} b. Business done with Ecobank only
          through friendship, family ties, giving or receiving gifts, or to gain
          favour.{'\n'} c. Misuse of Ecobank’s name for personal benefit.{'\n'}
          Ecobank employees may invest for their own personal account as long as
          those investments do not involve a conflict of interest with the
          activities of Ecobank or its customers.{'\n'} Refer to Ecobank Group
          Conflict of Interest Policy on the Intranet for more information.
        </Text>
        <Text style={styles.paragraphHeader}>Reporting of Violations</Text>
        <Text style={styles.paragraphTXT}>
          An employee (or another agent) authorized to act on behalf of Ecobank
          who suspects a possible violation of a law, regulation, or the RBE
          should report the suspected violation to his or her supervisor
          promptly. The supervisor should then report to the Compliance Officer
          who will investigate the matter further. Employees are expected to be
          responsible in making allegations, conscious of the fact that such
          allegations can negatively affect the integrity of colleagues.
        </Text>
        <Text style={styles.paragraphHeader}>
          Protection for Employees Reporting Violations
        </Text>
        <Text style={styles.paragraphTXT}>
          regulation or corporate policy will be victimised as a result of
          having made the report. Questions concerning protection for persons
          reporting suspected legal violations should be addressed to the
          Compliance Officer or the Country Head. In exceptional cases they may
          be referred to the Group Compliance Officer.{'\n'} Refer to the
          Ecobank Group Whistle Blower Policy on the Intranet for further
          Information
        </Text>
        <CustomFileInput label="Name" val={name} setVal={setName} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RulesinBusinessEthics;
const styles = StyleSheet.create({
  SafeAreaViewContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    flex: 0,
    marginTop: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    color: colors.blue,
    marginLeft: 50,
    fontFamily: 'Roboto-Bold',
  },
  instruction: {
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    marginTop: 10,
    marginBottom: 10,
  },
  paragraphHeader: {
    color: colors.instructBlack,
    fontSize: 13,
    fontFamily: 'Roboto-Bold',
    paddingBottom: 10,
    marginTop: 20,
  },
  paragraphTXT: {
    color: '#7E7E7E',
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
  },
});
