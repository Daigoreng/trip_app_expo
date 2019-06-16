import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, LayoutAnimation, UIManager, Picker} from 'react-native';
import {Header, Icon, ListItem} from 'react-native-elements';

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


  chosenDataFrom: new Date().toLocaleString('ja'),
  chosenDateTo: new Date().toLocaleString('ja'),
  
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

  renderCountryPicker(){
    if(this.state.countryPickerVisible === true) {
      return (
        <Picker
          selectedValue={this.state.tripDetail.country}
          onValueChange={(itemValue) => {
            this.setState({
              ...this.state,
              tripDetail:{
                ...this.state.tripDetail,
                country: itemValue
              },
            });
           }}
        >
          <Picker.Item label={INITIAL_STATE.tripDetail.country} value={INITIAL_STATE.tripDetail.country}/>
          <Picker.Item label="China" value="China"/>
          <Picker.Item label="UK" value="UK"/>
          <Picker.Item label="USA" value="USA"/>
        </Picker>
      );
    }
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

        <ScrollView style={{flex:1}}>
          <ListItem
            title="Country: "
            subtitle={
              <View style={styles.listItemStyle}>
                <Text
                  style={{
                    fontSize: 18,
                    color:this.state.tripDetail.country == INITIAL_STATE.tripDetail.country ? 'gray' : 'black'

                  }}
                >
                  {this.state.tripDetail.country}
                </Text>
              </View>
            }
            rightIcon={{name:this.state.countryPickerVisible === true ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}}
            
            onPress={() => this.setState({
              countryPickerVisible: !this.state.countryPickerVisible,
              dateFromPickerVisible: false,
              dateToPickerVisible: false,
            })}
            />
            {this.renderCountryPicker()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle:{
    color:'white',
    fontSize:18,
    fontWeight:'bold'
  },
  listItemStyle:{
    paddingTop:5,
    paddingLeft:20,
  },
})



export default AddScreen;

