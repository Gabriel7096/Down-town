import { StyleSheet, Platform, Dimensions, I18nManager } from 'react-native';
import { COLOR_SECONDARY, COLOR_ORANGE, COLOR_PRIMARY, COLOR_RED, S2, S16, S14,smallTitle ,homeTitle, titleText,eventTitleText,ListingOnOffBtn,InputTextSize,ListingTitle,} from './common';
import { width, height, totalSize } from 'react-native-dimension';
const window = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  IndicatorCon: {
    height: height(100),
    width: width(100),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subCon: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  overlyHeader: {
    height: height(8),
    width: width(100),
    zIndex: 1000,
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center'
  },
  drawerBtnCon: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  drawerBtn: {
    height: height(2.6),
    width: width(15),
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  headerTxtCon: {
    flex: 4,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  headerTxt: {
    fontWeight: 'bold',
    fontSize: totalSize(S2),
    color: '#ffffff',
  },
  headerSearch: {
    height: height(3.2),
    width: width(15),
    flex: 1,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  cart: {
    height: height(3.2),
    width: width(15),
    flex: 1,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  topViewCon: {
    alignSelf: 'center',
    overflow: 'hidden',
    height: 410 / 1.5,
    width: width(100),
    overflow: 'hidden',
    // backgroundColor:'red' 
  },
  InnerRadius: {
    borderRadius: window.width,
    width: width(100) * 2,
    height: width(100) * 2.5,
    marginLeft: -(width(100) / 2),
    position: 'absolute',
    bottom: 0,
    overflow: 'hidden',
    // backgroundColor:'orange'
  },
  imageCon: {
    height: 410 / 1.5,
    width: width(100),
    position: 'absolute',
    bottom: 0,
    marginLeft: width(100) / 2,
    // backgroundColor: 'black'
  },
  findTxtCon: {
    height: 100,
    width: width(90),
    justifyContent: 'flex-end',
    alignItems:'flex-start'
  },
  firTxt: {
    fontWeight: 'bold',
    fontSize: homeTitle,
    color: '#ffffff'
  },
  secTxt: {
    alignSelf:'flex-start',
    marginHorizontal: 20,
    fontSize: smallTitle,
    marginVertical: 2,
    lineHeight: 20,
    textAlignVertical: 'center',
    color: '#ffffff'
  },
  searchCon: {
    height: 45,
    width: width(90),
    backgroundColor: '#ffffff',
    borderRadius: 4,
    marginVertical: 2,
    flexDirection: 'row'
  },
  txtInput: {
    fontSize: InputTextSize,
    width: width(80),
    height: 42,
    margin: 2,
    paddingHorizontal: 5,
    textAlign: 'left',
  },
  searchIcon: {
    height: height(2.5),
    width: width(8),
    resizeMode: 'contain',
    alignSelf: 'center',
    transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]
  },
  flatlistCon: {
    // height: height(43),
    flex: 1,
    width: width(92),
    alignSelf: 'center',
    // position: 'absolute',
    alignItems: 'flex-end',
    // marginTop: Platform.OS === 'ios' ? 150 : 140,
  },
  flatlistChild: {
    height: 90,
    width: width(26),
    marginVertical: 15,
    marginHorizontal: 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    ...Platform.select({
      ios: { shadowColor: 'gray', shadowOpacity: 0.2, shadowRadius: 2 },
      android: { elevation: 2, }
    }),
  },
  cateCon: {
    height: height(25),
    width: width(70),
    marginBottom: 10,
    alignSelf: 'center',
    marginRight: 15,
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 5,
    ...Platform.select({
      ios: { shadowColor: 'gray', shadowOpacity: 0.3, shadowRadius: 5 },
      android: { elevation: 5, }
    }),
  },
  childImg: {
    height: height(8),
    width: width(15),
    borderRadius: 5,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  childTxt: {
    // fontFamily: FONT_NORMAL,
    width: width(18),
    fontSize: smallTitle, //totalSize(S15)
    alignSelf: 'center',
    textAlign: 'center',
    color: COLOR_SECONDARY,
    marginVertical: 3
  },
  recList: {
    fontWeight: '500',
    fontSize: titleText, //totalSize(S2)
    color: 'black',
    // textDecorationLine:'underline',
  },
  latestFeature: {
    // textAlignVertical:'center',
    fontSize: totalSize(S14),
    color: 'black',
    marginHorizontal: 5
  },
  featuredFLItem: {
    alignSelf:'center',
    marginHorizontal: 5,
    ...Platform.select({
      ios: { shadowColor: 'gray', shadowOpacity: 0.2, shadowRadius: 2 },
      android: { elevation: 2, }
    }),
    height: 118,
    width: width(90),
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    marginVertical: 5,
    marginBottom: 6
  },
  featuredImg: {
    height: 118,
    width: width(26),
    alignSelf: 'stretch',
    margin: 0,
    alignItems: 'flex-start',
    borderRadius: 5
  },
  closedBtn: {
    // height:height(3),
    // width:width(18),
    borderRadius: 4,
    backgroundColor: COLOR_ORANGE,
    marginTop: 10,
    marginLeft: 10,
    justifyContent: 'center'
  },
  closedBtnTxt: {
    marginHorizontal: 7,
    marginVertical: 3,
    color: COLOR_PRIMARY,
    fontSize: ListingOnOffBtn, //totalSize(S15)
    // alignSelf:'center'
  },
  txtViewCon: {
    height: 118,
    width: width(55),
    justifyContent: 'center'
  },
  txtViewHeading: {
    textAlign: 'left',
    fontWeight: 'bold',
    // height: height(6),
    // width: width(45),
    marginTop: 3,
    marginBottom: 1,
    marginLeft: 10,
    fontSize: ListingTitle, //totalSize(S16)
    color: 'black',
  },
  subHeadingTxt: {
    marginTop: 0,
    marginLeft: 10,
    fontSize: 11, //totalSize(S15),
    textAlign: 'left',
    width: width(50)
  },
  ratingCon: {
    // height: height(8),
    marginTop: 3,
    width: width(55),
    flexDirection: 'row',
  },
  ratingStyle: {
    height: height(3),
    width: width(18),
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 10,
    
  },
  gradingCon: {
    // height: height(3),
    width: width(22),
    justifyContent: 'center',
  },
  ratingTxt: {
    marginHorizontal: 2,
    marginVertical: 3,
    fontSize: 11, //totalSize(S15)
    color: '#8a8a8a',
  },
  triangleCorner: {
    width: width(3),
    height: height(3),
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 32,
    borderTopWidth: 32,
    borderRightColor: 'transparent',
    borderTopColor: 'red',

  },
  cate_con: {
    height: height(8),
    width: width(90),
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  },
  readMoreBtnCon: {
    height: 24,
    // width: width(22),
    borderRadius: 3,
    borderColor: COLOR_ORANGE,
    alignSelf: 'center',
    borderWidth: 0.8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cate_img: {
    height: height(27),
    width: width(72),
    borderRadius: 5,
    overflow: 'hidden'
  },
  cate_name: {
    backgroundColor: COLOR_RED,
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 3
  },
  cateNameText: {
    marginHorizontal: 10,
    marginVertical: 5,
    fontSize: 11,
    color: COLOR_PRIMARY
  },
  eventTitle: {
    fontSize: 14,
    color: COLOR_PRIMARY,
    fontWeight: 'bold',
    marginVertical: 2,
    marginHorizontal: 15,
    textAlign: 'left'
  },
  locIcon: {
    height: height(2.5),
    width: width(5),
    resizeMode: 'contain',
    marginRight: 5,
    transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]
  },
  locText: {
    fontSize: 12,
    color: COLOR_PRIMARY,
    marginRight: 5
  },
  exploreBtn: {
    height: height(7),
    width: width(100),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_ORANGE
  },
  cate_text: {
    fontSize: 11,
    color: COLOR_PRIMARY,
    marginRight: 5
  },
  btnIcon: {
    height: height(2.5),
    width: width(8),
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  explorebtnTxt: {
    // fontFamily: FONT_NORMAL,
    fontSize: totalSize(S16),
    color: '#ffffff'
  },
});

export default styles;