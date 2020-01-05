/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';


const App = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* menu konten */}
      <View style={{ flex: 1 }}>
        {/* Image Slider */}
        <View style={{ backgroundColor: 'yellow', height: 200 }}></View>
        {/* menu fiture */}
        <View style={{ height: 200, flexDirection: 'row', flexWrap: 'wrap' }}>
          <View style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center', height: 100, marginLeft: 10, width: '30%', borderRadius: 18, borderWidth: 1, borderColor: 'grey' }}>
            <View style={{width:50,height:50}}>
              <Image source={require('./src/assets/icon/alam.png')} style={{width:'100%',height:'100%'}} />
            </View>
            <Text style={{fontWeight:'bold',marginTop: 10,}}>WISATA ALAM</Text>
          </View>
          <View style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center', height: 100, marginLeft: 10, width: '30%', borderRadius: 18, borderWidth: 1, borderColor: 'grey' }}>
          <View style={{width:50,height:50}}>
              <Image source={require('./src/assets/icon/buatan.png')} style={{width:'100%',height:'100%'}} />
            </View>
            <Text style={{fontWeight:'bold',marginTop: 10,}}>WISATA BUATAN</Text>
          </View>
          <View style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center', height: 100, marginLeft: 10, width: '30%', borderRadius: 18, borderWidth: 1, borderColor: 'grey' }}>
          <View style={{width:50,height:50}}>
              <Image source={require('./src/assets/icon/sejarah.png')} style={{width:'100%',height:'100%'}} />
            </View>
            <Text style={{fontWeight:'bold',marginTop: 10,}}>WISATA BUDAYA</Text>
          </View>
          <View style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center', height: 100, marginLeft: 10, width: '30%', borderRadius: 18, borderWidth: 1, borderColor: 'grey' }}>
          <View style={{width:50,height:50}}>
              <Image source={require('./src/assets/icon/restaurant.png')} style={{width:'100%',height:'100%'}} />
            </View>
            <Text style={{fontWeight:'bold',marginTop: 10,}}>WISATA KULINER</Text>
          </View>
          <View style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center', height: 100, marginLeft: 10, width: '30%', borderRadius: 18, borderWidth: 1, borderColor: 'grey' }}>
          <View style={{width:50,height:50}}>
              <Image source={require('./src/assets/icon/hotel.png')} style={{width:'100%',height:'100%'}} />
            </View>
            <Text style={{fontWeight:'bold',marginTop: 10,}}>HOTEL</Text>
          </View>
          <View style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center', height: 100, marginLeft: 10, width: '30%', borderRadius: 18, borderWidth: 1, borderColor: 'grey' }}>
          <View style={{width:50,height:50}}>
              <Image source={require('./src/assets/icon/alam.png')} style={{width:'100%',height:'100%'}} />
            </View>
            <Text style={{fontWeight:'bold',marginTop: 10,}}>KERAJINAN</Text>
          </View>
        </View>
      </View>
      {/* menu bawah */}
      <View style={{ backgroundColor: 'white', height: 70, flexDirection: 'row', }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: 26, height: 26 }}>
            <Image source={require('./src/assets/icon/kerajinan.png')} style={{ width: '100%', height: '100%' }} />
          </View>
          <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>DASBOARD</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: 26, height: 26 }}>
            <Image source={require('./src/assets/icon/news.png')} style={{ width: '100%', height: '100%' }} />
          </View>
          <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>BERITA</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: 26, height: 26 }}>
            <Image source={require('./src/assets/icon/report.png')} style={{ width: '100%', height: '100%' }} />
          </View>
          <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>PENGADUAN</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: 26, height: 26 }}>
            <Image source={require('./src/assets/icon/contact.png')} style={{ width: '100%', height: '100%' }} />
          </View>
          <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>TENTANG</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default App;
