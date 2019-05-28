import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { ButtonGroup,ListItem} from 'react-native-elements'; 

const ALL_INDEX = 0;

const GREAT = 'sentiment-very-satisfied';
const GREAT_INDEX = 1;

const GOOD = 'sentiment-satisfied';
const GOOD_INDEX = 2;

const POOR = 'sentiment-dissatisfied';
const POOR_INDEX = 3;

const allReviewsTmp =[
  {
    country:'USA',
    dateFrom:'Jan/15/2018',
    imageURIs: [
      require('../assets/add_image_placeholder.png'),
      require('../assets/add_image_placeholder.png'),
      require('../assets/add_image_placeholder.png'),
    ],
    rank: GREAT,
  },
  {
    country: 'USA',
    dateFrom: 'Feb/15/2018',
    dateTo: 'Feb/25/2018',
    imageURIs: [
      require('../assets/add_image_placeholder.png'),
      require('../assets/add_image_placeholder.png'),
      require('../assets/add_image_placeholder.png'),
    ],
    rank: GOOD,
  },
  {
    country: 'USA',
    dateFrom: 'Mar/15/2018',
    dateTo: 'Mar/25/2018',
    imageURIs: [
      require('../assets/add_image_placeholder.png'),
      require('../assets/add_image_placeholder.png'),
      require('../assets/add_image_placeholder.png'),
    ],
    rank: POOR,
  },

];

let rankedReviews = [];

for (let i = 0; i< allReviewsTmp.length; i++){
  if(allReviewsTmp[i].rank === reviewRank) {
    rankedReviews.push(allReviewsTmp[i])
  }
}



class HomeScreen extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      selectedIndex:0,
    }
  }

  renderReviews() {
    let reviewRank;

    switch (this.state.selectedIndex){

      case GREAT_INDEX:
        reviewRank = GREAT;
        break;

      case GOOD_INDEX:
        reviewRank = GOOD;
        break;

      case POOR_INDEX:
        reviewRank = POOR;
        break;

      default:
        break;

    }
    return (

    );
  }

  onButtonGroupPress = (selectedIndex) => {
    this.setState({
      selectedIndex:selectedIndex
    });
  }


  render() {
    const buttonList =[
      'All',
      'Great (0)',
      'Good (0)',
      'Poor (0)'
    ];

    return (
      <View style={{ flex: 1}}>
        
      <ButtonGroup
        buttons = {buttonList}
        selectedIndex={this.state.selectedIndex}
        onPress={this.onButtonGroupPress}
      /> 
      </View>
    );
  }
}

//こんちには


export default HomeScreen;
