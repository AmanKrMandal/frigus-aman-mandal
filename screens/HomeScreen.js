import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SearchSVG from '../assets/SearchSVG';
import MapSvg from '../assets/MapSvg';

const windowHeight = Dimensions.get('window').height;

const HomeScreen = () => {
  return (
    <View style={styles.linearGradient}>
      <ScrollView>
        <View style={styles.sidePadding}>
          <Text style={styles.homeSecHeading}>
            <Text style={styles.homeSecHeadingData}>World's Premier</Text>{' '}
            Customer Experience Platform
          </Text>
          <Text style={styles.homeSecHead}>
            <Text style={styles.homeSecHeadData}>Find Your</Text> Grahak Rights
          </Text>
          <View style={styles.homeTextInput}>
            <TextInput
              style={styles.formControl}
              placeholder="Consumer Rights / organization..."
              placeholderTextColor="#9E9E9E"
            />
            <Text style={styles.homeSearch}>
              <SearchSVG />
            </Text>
          </View>
          <Text style={styles.HomeTag}>#CustomerRightsMatterBG</Text>
          <Text style={styles.homeSecHead}>
            <Text style={styles.homeSecHeadData}>Why Join </Text> Bolo Grahak
          </Text>
          <View style={styles.HomeDivided}>
            <View style={styles.HomeDividedSec}>
              <Text style={styles.DividedText}>Business/organisaton</Text>
              <View style={styles.DividedDataSec}>
                <View style={styles.DividedData}>
                  <FontAwesome
                    name="circle"
                    width="9"
                    height="9"
                    color="#000000"
                  />
                  <Text style={styles.DividedDataText}>
                    Nunc vel risus commodo
                  </Text>
                </View>
                <View style={styles.DividedData}>
                  <FontAwesome
                    name="circle"
                    width="9"
                    height="9"
                    color="#000000"
                  />
                  <Text style={styles.DividedDataText}>Sed eget ante</Text>
                </View>
                <View style={styles.DividedData}>
                  <FontAwesome
                    name="circle"
                    width="9"
                    height="9"
                    color="#000000"
                  />
                  <Text style={styles.DividedDataText}>
                    Nunc vel risus commodo
                  </Text>
                </View>
                <View style={styles.DividedData}>
                  <FontAwesome
                    name="circle"
                    width="9"
                    height="9"
                    color="#000000"
                  />
                  <Text style={styles.DividedDataText}>Sed eget ante</Text>
                </View>
              </View>
              <Image source={require('../assets/HomeDividedImg1.png')} />
            </View>
            <View style={styles.HomeDividedSec1}>
              <Text style={styles.DividedText}>Grahak (customer)</Text>
              <View style={styles.DividedDataSec}>
                <View style={styles.DividedData}>
                  <FontAwesome
                    name="circle"
                    width="9"
                    height="9"
                    color="#000000"
                  />
                  <Text style={styles.DividedDataText}>
                    Nunc vel risus commodo
                  </Text>
                </View>
                <View style={styles.DividedData}>
                  <FontAwesome
                    name="circle"
                    width="9"
                    height="9"
                    color="#000000"
                  />
                  <Text style={styles.DividedDataText}>Sed eget ante</Text>
                </View>
                <View style={styles.DividedData}>
                  <FontAwesome
                    name="circle"
                    width="9"
                    height="9"
                    color="#000000"
                  />
                  <Text style={styles.DividedDataText}>
                    Nunc vel risus commodo
                  </Text>
                </View>
                <View style={styles.DividedData}>
                  <FontAwesome
                    name="circle"
                    width="9"
                    height="9"
                    color="#000000"
                  />
                  <Text style={styles.DividedDataText}>Sed eget ante</Text>
                </View>
              </View>
              <Image source={require('../assets/HomeDividedImg2.png')} />
            </View>
          </View>
        </View>
        <View style={styles.HomeKnowSec}>
          <Text style={styles.HomeKnowHead}>
            <Text style={styles.homeSecHeadData}>Did You </Text> know ?
          </Text>
          <View style={styles.HomeKnowType}>
            <View style={styles.HomeKnowTypeSec}>
              <Image source={require('../assets/know1.png')} />
            </View>
            <View style={styles.HomeKnowTypeText}>
              <Text style={styles.HomeKnowTypeData}>
                Nunc non posuere justo erat semper enim
              </Text>
              <Text style={styles.HomeKnowDate}>April 24, 2022</Text>
              <View style={styles.HomeKnowRead}>
                <Text style={styles.HomeKnowReadData}>Read More</Text>
                <FontAwesome name="angle-right" size={20} color="#000000" />
              </View>
            </View>
          </View>
          <View style={styles.HomeKnowType}>
            <View style={styles.HomeKnowTypeSec}>
              <Image source={require('../assets/know2.png')} />
            </View>
            <View style={styles.HomeKnowTypeText}>
              <Text style={styles.HomeKnowTypeData}>
                Nunc non posuere justo erat semper enim
              </Text>
              <Text style={styles.HomeKnowDate}>April 24, 2022</Text>
              <View style={styles.HomeKnowRead}>
                <Text style={styles.HomeKnowReadData}>Read More</Text>
                <FontAwesome name="angle-right" size={20} color="#000000" />
              </View>
            </View>
          </View>
          <View style={styles.HomeKnowType}>
            <View style={styles.HomeKnowTypeSec}>
              <Image source={require('../assets/know3.png')} />
            </View>
            <View style={styles.HomeKnowTypeText}>
              <Text style={styles.HomeKnowTypeData}>
                Nunc non posuere justo erat semper enim
              </Text>
              <Text style={styles.HomeKnowDate}>April 24, 2022</Text>
              <View style={styles.HomeKnowRead}>
                <Text style={styles.HomeKnowReadData}>Read More</Text>
                <FontAwesome name="angle-right" size={20} color="#000000" />
              </View>
            </View>
          </View>
          <Text style={styles.HomeKnowMoresec}>
            <View style={styles.HomeKnowMore}>
              <Text style={styles.HomeKnowMoreData}>View More</Text>
              <FontAwesome name="angle-right" size={20} color="#000000" />
            </View>
          </Text>
        </View>
        <View style={styles.sidePadding}>
          <View style={styles.ReviewSection}>
            <View style={styles.ReviewSectionImg}>
              <View style={styles.ReviewSectionText}>
                <Text style={styles.ReviewSecSubmit}>Submit</Text>
                <Text style={styles.ReviewSecYour}>Your Review</Text>
                <Text style={styles.ReviewSecText}>
                  Nunc vel risus commodo viverra maecenas accumsan. Nam aliquam.
                </Text>
              </View>
              <View>
                <Image source={require('../assets/ReviewImg.png')} />
              </View>
            </View>
            <View style={styles.ReviewSectionLink}>
              <View style={styles.ReviewSectionData}>
                <Text style={styles.ReviewSectionDataText}>Submit</Text>
                <FontAwesome name="angle-right" size={20} color="#fff" />
              </View>
              <View style={styles.ReviewSectionData}>
                <Text style={styles.ReviewSectionDataText}>
                  View All Reviews
                </Text>
                <FontAwesome name="angle-right" size={20} color="#fff" />
              </View>
            </View>
          </View>
          <Text style={styles.ReviewSectionWatchers}>Watch Us on</Text>
          <Text style={styles.ReviewSectionYoutube}>
            <Image source={require('../assets/youTube.png')} />
          </Text>
          <View style={styles.RightSec}>
            <View>
              <Image source={require('../assets/rightImg.png')} />
            </View>
            <View style={styles.RightSecData}>
              <Text style={styles.ReviewSecSubmit}>Know more About</Text>
              <Text style={styles.ReviewSecYour}>Grahak Rights</Text>
              <Text style={styles.RightSecGroup}>
                <View style={styles.ReviewSectionData}>
                  <Text style={styles.ReviewSectionDataText}>Read More</Text>
                  <FontAwesome name="angle-right" size={20} color="#fff" />
                </View>
              </Text>
            </View>
          </View>
          <View style={styles.RespSec}>
            <View style={styles.RespSecGroupText}>
              <View style={styles.RespSecGroup}>
                <Text style={styles.ReviewSecSubmit}>Know more About </Text>
                <Text style={styles.ReviewSecYour}>
                  organization responsibility
                </Text>
                <Text style={styles.RightSecGroup}>
                  <View style={styles.ReviewSectionData}>
                    <Text style={styles.ReviewSectionDataText}>Read More</Text>
                    <FontAwesome name="angle-right" size={20} color="#fff" />
                  </View>
                </Text>
              </View>
              <View style={styles.RespSecData}>
                <Image source={require('../assets/RespImg.png')} />
              </View>
            </View>
          </View>

          <View style={styles.RightSec}>
            <View>
              <Image source={require('../assets/aboutImg.png')} />
            </View>
            <View style={styles.AboutSecData}>
              <Text style={styles.ReviewSecYour}>About Us</Text>
              <Text style={styles.RightSecGroup}>
                <View style={styles.ReviewSectionData}>
                  <Text style={styles.ReviewSectionDataText}>Read More</Text>
                  <FontAwesome name="angle-right" size={20} color="#fff" />
                </View>
              </Text>
            </View>
          </View>
        </View>
        <View>
          <MapSvg />
        </View>
      </ScrollView>
    </View>
  );
};
//              style={styles.linearGradient}
const styles = StyleSheet.create({
  linearGradient: {
    backgroundColor: '#000',
    minHeight: windowHeight,
  },
  sidePadding: {
    paddingHorizontal: 12,
    // marginBottom: 200,
  },
  homeSecHeading: {
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: '600',
    textTransform: 'capitalize',
    lineHeight: 26,
    paddingTop: 17,
    marginBottom: 25,
  },
  homeSecHeadingData: {
    color: '#FCCB06',
  },
  homeSecHead: {
    color: '#FCCB06',
    // font-family: Inter,
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 18,
  },
  homeSecHeadData: {
    color: '#ffffff',
  },
  formControl: {
    borderColor: '#FCCB06',
    borderWidth: 2,
    fontSize: 14,
    fontWeight: '400',
    borderRadius: 10,
    paddingVertical: 17,
    paddingLeft: 13,
    paddingRight: 70,
    backgroundColor: '#FFFFFF',
    marginBottom: 15,
  },
  homeTextInput: {
    position: 'relative',
  },
  homeSearch: {
    position: 'absolute',
    top: 7,
    right: 7,
  },
  HomeTag: {
    color: '#0E0E0E',
    fontSize: 14,
    fontWeight: '800',
    textTransform: 'capitalize',
    borderRadius: 8,
    backgroundColor: '#FCCB06',
    paddingHorizontal: 10,
    paddingVertical: 9,
    maxWidth: 187,
    marginBottom: 44,
  },
  HomeDivided: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 9,
    marginBottom: 42,
  },
  HomeDividedSec: {
    borderRadius: 10,
    backgroundColor: '#FCCB06',
    paddingHorizontal: 8,
    paddingTop: 16,
  },
  HomeDividedSec1: {
    borderRadius: 10,
    backgroundColor: '#F4A835',
    paddingHorizontal: 8,
    paddingTop: 16,
  },
  DividedText: {
    color: '#1F1F1F',
    // font-family: Inter,
    maxWidth: 185,
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 19,
    textTransform: 'capitalize',
  },
  DividedDataSec: {},
  DividedData: {
    display: 'flex',
    flexDirection: 'row',
    alingItem: 'center',
    justifyContent: 'start',
    gap: 9,
    marginBottom: 10,
  },
  DividedDataText: {
    color: '#000',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  HomeKnowTypeText: {
    paddingVertical: 10,
    paddingRight: 110,
    marginLeft: 14,
  },
  HomeKnowMore: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    gap: 10,
    paddingHorizontal: 19,
    paddingVertical: 9,
    borderRadius: 900,
  },
  HomeKnowMoresec: {
    marginBottom: 3,
    textAlign: 'center',
    paddingTop: 15,
  },
  HomeKnowMoreData: {
    color: ' #000000',
    // font-family: Inter;
    fontSize: 14,
    fontWeight: '600',
  },
  HomeKnowRead: {
    display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
    gap: 10,
  },
  HomeKnowReadData: {
    color: '#000',
    // font-family: Inter,
    fontSize: 14,
    fontWeight: '400',
  },
  HomeKnowDate: {
    color: '#515151',
    // font-family: Inter,
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 12,
  },
  HomeKnowTypeData: {
    color: '#000',
    // font-family: Inter;
    fontSize: 19,
    fontWeight: '500',
    marginBottom: 3,
  },
  HomeKnowSec: {
    backgroundColor: '#1B1B1B',
    paddingHorizontal: 12,
    paddingTop: 22,
    paddingBottom: 36,
  },
  HomeKnowHead: {
    color: '#FCCB06',
    // font-family: Inter,
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 25,
    textAlign: 'center',
  },
  HomeKnowType: {
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 19,
  },
  ReviewSection: {
    backgroundColor: '#FCCB06',
    borderRadius: 10,
    position: 'relative',
    overflow: 'hidden',
    marginVertical: 40,
  },
  ReviewSectionData: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    gap: 10,
    paddingHorizontal: 17,
    paddingVertical: 9,
    borderRadius: 900,
  },
  ReviewSectionDataText: {
    color: '#FFF',
    // font-family: Inter,
    fontSize: 14,
    fontWeight: '400',
  },
  ReviewSectionLink: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    left: 16,
    gap: 10,
  },
  ReviewSecSubmit: {
    color: '#1F1F1F',
    // font-family: Inter,
    fontSize: 17,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  ReviewSecYour: {
    color: '#1F1F1F',
    // font-family: Inter,
    fontSize: 26,
    fontWeight: '700',
    maxWidth: 180,
    textTransform: 'capitalize',
    marginBottom: 5,
  },
  ReviewSecText: {
    color: '#000',
    // font-family: Nunito,
    fontSize: 12,
    fontWeight: '400',
    textTransform: 'capitalize',
  },
  ReviewSectionText: {
    paddingVertical: 24,
    paddingLeft: 17,
    maxWidth: 210,
  },
  ReviewSectionImg: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
    gap: 20,
  },
  RightSec: {
    borderRadius: 10,
    backgroundColor: '#F1AE00',
    overflow: 'hidden',
    paddingTop: 30,
    position: 'relative',
    marginBottom: 20,
  },
  RespSecGroup: {
    // paddingLeft: 10,
    // paddingTop: -20,
  },
  RespSecGroupText: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 10,
    overflow: 'hidden',
  },
  RespSec: {
    borderRadius: 10,
    backgroundColor: '#FCCB06',
    paddingTop: 30,
    marginBottom: 20,
  },
  RespSecData: {
    // position: 'absolute',
    // right: 0,
    // bottom: 0,
  },
  RightSecGroup: {
    // paddingTop: ,
  },
  RightSecData: {
    position: 'absolute',
    top: 30,
    left: 175,
  },
  AboutSecData: {
    position: 'absolute',
    top: 60,
    left: 175,
  },
  ReviewSectionWatchers: {
    color: '#FCCB06',
    // font-family: Inter,
    fontSize: 14,
    fontWeight: '800',
    textTransform: 'capitalize',
    textAlign: 'center',
    marginBottom: 11,
  },
  ReviewSectionYoutube: {
    textAlign: 'center',
    paddingBottom: 10,
    marginBottom: 18,
  },
});

export default HomeScreen;
