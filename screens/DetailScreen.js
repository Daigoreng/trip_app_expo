import Geocoder from 'react-native-geocoding';
import React from 'react';
import {
  Text, View, ScrollView,ActivityIndicator, // 描画に直接関わるコンポーネント達
  Dimensions, Platform // ←追記部分 // 描画に直接関わらないもの
} from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';

import * as actions from '../actions';

const SCREEN_WIDTH = Dimensions.get('window').width; // ←追記部分
const MAP_ZOOM_RATE = 15.0; 

class DetailScreen extends React.Component {

  constructor(props) { // ← おまじないの入力 props
    super(props); // ← おまじないの文 super(props);

    this.state = {
      isMapLoaded: false,
      initialRegion: {
        latitude: 35.7090, // 東京都の緯度
        longitude: 139.7320, // 東京都の経度
        latitudeDelta: MAP_ZOOM_RATE, // 緯度方向のズーム度合い
        longitudeDelta: MAP_ZOOM_RATE * 2.25 // 経度方向のズーム度合い(緯度方向の2.25倍)
      },
    };
  }

  async componentDidMount() { // ←追記ここから
    // Google map APIキーをセット  
    Geocoder.setApiKey('AIzaSyB4DP5hEsF5ni_fqpKdsh9ZYtK4lfbJ8hM');
    
    // Google map APIを使用して国名から緯度経度へ変換
    // 非同期処理張本人の文頭には`await`を付ける
    let result = await Geocoder.getFromLocation(this.props.detailReview.country);
  
    // 変換結果を用いて`this.state`を更新
    this.setState({
      isMapLoaded: true, // 地図読み込み完了
      initialRegion: {
        latitude: result.results[0].geometry.location.lat,  // 変換後の緯度
        longitude: result.results[0].geometry.location.lng, // 変換後の経度
        latitudeDelta: MAP_ZOOM_RATE,        // 値自体は変わっていないが書く必要あり 
        longitudeDelta: MAP_ZOOM_RATE * 2.25 // 値自体は変わっていないが書く必要あり
      }
    });
  }

  render() {

    if (this.state.isMapLoaded === false) { // ←追記ここから
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>  
          <ActivityIndicator size="large" /> 
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ alignItems: 'center', padding: 20 }}>
            <Text style={{ fontSize: 30, padding: 5 }}>{this.props.detailReview.country}</Text>
            <Text style={{ padding: 5 }}>{this.props.detailReview.dateFrom} ~ {this.props.detailReview.dateTo}</Text>
          </View>
          <MapView // ←追記ここから
           style={{ height: SCREEN_WIDTH }} // 高さをスマホ画面横幅と一緒にする(つまり正方形サイズ)
           scrollEnabled={false} // 地図上をスクロールできないようにする
           cacheEnabled={Platform.OS === 'android'} // Androidだけキャッシュをありにする
           initialRegion={this.state.initialRegion} // `this.state`の方の`initialRegion`に合わせる
          />
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = (state) => { 
  return {
    detailReview: state.review.detailReview
  };
}; 


export default connect(mapStateToProps, actions)(DetailScreen);