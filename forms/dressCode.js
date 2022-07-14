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

const DressCode = ({navigation}) => {
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
          <Text style={styles.headerText}>Dress Code</Text>
        </View>
        <Text style={styles.instruction}>
          Please kindly fill this document. Signing where required
        </Text>
      </View>
      {/* {!loading && ( */}
      <ScrollView
        contentContainerStyle={{marginTop: 10}}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.paragraphHeader}>Policy Statement</Text>
        <Text style={styles.paragraphTXT}>
          Ecobank believes that proper dressing is essential in a business where
          developing customer respect and confidence is necessary for long-term
          growth and prosperity. {'\n'} All employees of Ecobank represent the
          public image of the Company and must therefore ensure that the image
          they portray upholds the standards of professionalism of the Bank. It
          is therefore imperative that during business hours employees are
          expected to be neat, tidy and conservatively dressed.{'\n'} The
          Technology group of eProcess International S.A. presents for
          consideration, an addendum to the current dress code with emphasis on
          dress code for core Technology staff.
        </Text>
        <Text style={styles.paragraphHeader}>Philosophy and Purpose</Text>
        <Text style={styles.paragraphTXT}>
          In the current fast changing world, with Fintechs and Financial
          Institutions competing for Technology resources, and the full presence
          of Generation Y Millennials in the work place, it has become necessary
          to review the dress code for core Technology staff.{'\n'} It is
          management’s intent that work attire should complement an environment
          that reflects an efficient, orderly, and professionally operated
          organization. This policy is intended to define appropriate “casual
          business attire” during normal business operations.{'\n'} Group
          Technology recognizes the growing popularity of casual business dress
          and the positive effects of this shift among millennials in the
          technology space especially. Dress code for this group of employees
          has a major impact on employee morale, improves work quality,
          encourages more open communication and increased productivity thereby
          creating a more comfortable work environment.{'\n'} Ecobank reserves
          the right to continue, extend, revise or revoke this policy at its
          discretion.{'\n'} Enforcement of this guideline is the responsibility
          of the Leadership of eProcess and moderated by the Human Resource
          Department.{'\n'} The key point to sustaining an appropriate business
          casual attire program is the use of common sense and good judgment,
          and applying a dress practice that Ecobank deems conducive to our
          business environment.{'\n'} Technology staff may work alongside Bank
          and other Group employees in the same premises. In such cases,
          Technology staff will be expected to reflect a ‘dress down’ approach
          to existing dress code practices across the Ecobank Group. Men may for
          example be required to wear business clothes, with the necktie and
          jackets becoming optional clothing items. Women may also dispense with
          jackets.
        </Text>
        <Text style={styles.paragraphHeader}>Business Casual Dress Code</Text>
        <Text style={styles.paragraphTXT}>
          Our goal is to provide a workplace environment that is comfortable and
          inclusive for all employees. We expect that business attires will
          exhibit a positive image and professionalism at all times.{'\n'}{' '}
          Appropriate sanctions (as already stated in the Ecobank’s Dress Code)
          will be meted out to employees who wear business casual attires that
          are inappropriate in the workplace on an individual basis.{'\n'} 1.
          Employees are expected to demonstrate good judgment and professional
          taste in their choice of clothing.{'\n'} 2. No employee will be
          permitted to wear anything that other employees might find offensive
          or that might make co-workers uncomfortable. This includes clothing
          with profane language, statements or clothing that promote causes that
          include, but are not limited to, politics, religion, sexuality, race,
          age, gender, and ethnicity.{'\n'} 3. All employees must be clean and
          well-groomed. Grooming styles dictated by religion and ethnicity that
          are inconsistent with this dress code shall not be permitted.{'\n'} 4.
          All clothes must project professionalism. Clothes that are too
          revealing (for example, showing of muscles by men and cleavage by
          women) or inappropriate will not be permitted.{'\n'} 5. All clothes
          must be clean and neatly pressed. Unacceptable clothing shall include
          but is not limited to clothing with discernible rips, tears or holes
          in the fabric.{'\n'} 6. Employees must avoid clothes with stamps that
          are offensive or inappropriate.{'\n'} 7. For all business meetings and
          official engagements with external vendors, employees shall be
          expected to put on jackets or blazers.
        </Text>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.paragraphHeader}>
            Recommended Business Attire
          </Text>
          <Image
            source={images.dressCode}
            style={{width: '100%', height: 400}}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.paragraphHeader}>Enforcement</Text>
        <Text style={styles.paragraphTXT}>
          Department managers and supervisors are responsible for monitoring and
          enforcing this policy. The policy will be administered according to
          the following action steps:{'\n'} 1. If questionable attire is worn in
          the office, the respective department supervisor/manager will hold a
          personal, private discussion with the employee to advice and counsel
          the employee regarding the inappropriateness of the attire.{'\n'} 2.
          If an obvious policy violation occurs, the department
          supervisor/manager will hold a private discussion with the employee
          and ask the employee to go home and change his/her attire immediately.
          {'\n'} 3. Repeated policy violations will result in disciplinary
          action, up to and including termination.{'\n'} 4. Notwithstanding
          anything to the contrary, the Bank reserves the right to mete out any
          appropriate sanctions on staff whose dressing are inappropriate.
        </Text>
        <Text style={styles.paragraphHeader}>Distribution</Text>
        <Text style={styles.paragraphTXT}>
          All employees will be provided with a copy of this policy.
        </Text>
        <Text style={styles.paragraphHeader}>Review and Revision</Text>
        <Text style={styles.paragraphTXT}>
          Ecobank reserves the right to rescind and/or amend this, and all
          Company policies, at any given time.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DressCode;
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
