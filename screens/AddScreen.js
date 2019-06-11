import React from 'react';
import { StyleSheet, Text, View, Dimensions, LayoutAnimation, UIManager} from 'react-native';
import {Header, Icon} from 'react-native-elements';

const GREAT = 'sentiment-very-satisfied';
const GREAT_COLOR = 'red';
const GOOD = 'sentiment-satisfied';
const GOOD_COLOR = 'orange';
const POOR = 'sentiment-dissatisfied';
const POOR_COLOR = 'blue';

const SCREEN_WIDTH = Dimensions.get('window').width;


const MAP_ZOOM_RATE = 15.0;
const INITIAL_STATE = {
  countryPickerVisible: false,
  dataFromPickerVisible:false,
  dateToPickerVisible:false,


  chosenDataFrom: new DataCue().toLocaleString('ja'),
  choseDateTo: new Date().tpLocaleString('ja'),
  
  tripDetail:{
    country:'select Country',
    dateFrom:'From',
    dateTo:'To',
    imageURLs:[
      require('../assets/add_image_placeholder.png'),
      require('../assets/add_image_placeholder.png'),
      require('../assets/add_image_placeholder.png'),
    ],
    rank:'',
  },

  initialRegion: {
    latitude: 35.658581, // 東京タワー
    longitude: 139.745433, // 東京タワー
    latitudeDelta: MAP_ZOOM_RATE,
    longitudeDelta: MAP_ZOOM_RATE * 2.25
  },
};


class AddScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = INITIAL_STATE;
  }
  componentDidUpdate(){
    UIManager.setLayoutAnimationEnabledExperimental &&UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.easeInEaseOut();
  }

  render() {
    return (
      <View style={{ flex: 1}}>
        <Header
          statusBarProps={{barStyle:'light-content'}}
          backgroundColor="deepskyblue"
          leftComponent={{
            icon: 'close',
            color: 'white',
            onPress: () => {
              this.setState({
                ...INITIAL_STATE,
                tripDetail:{
                  ...INITIAL_STATE.tripDetail,
                  imageURIs:[
                    require('..//assets/add_image_placeholder.png'),
                    require('..//assets/add_image_placeholder.png'),
                    require('..//assets/add_image_placeholder.png'),
                  ]
                }
              });
              this.props.navigation.navigate('home');
            }
          }}
          centerComponent={{text:'Add',style:styles.headerStyle}}
        />
      </View>
    );
  }
}


export default AddScreen;

