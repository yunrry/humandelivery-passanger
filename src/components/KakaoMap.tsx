import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const { width, height } = Dimensions.get('window');

interface KakaoMapProps {
  latitude?: number;
  longitude?: number;
  level?: number;
}

const KakaoMap: React.FC<KakaoMapProps> = ({
  latitude = 37.5665,
  longitude = 126.9780,
  level = 3,
}) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_KAKAO_MAP_API_KEY"></script>
        <style>
          html, body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
          }
          #map {
            width: 100%;
            height: 100%;
          }
        </style>
      </head>
      <body>
        <div id="map"></div>
        <script>
          var container = document.getElementById('map');
          var options = {
            center: new kakao.maps.LatLng(${latitude}, ${longitude}),
            level: ${level}
          };
          var map = new kakao.maps.Map(container, options);
        </script>
      </body>
    </html>
  `;

  return (
    <WebView
      style={styles.map}
      source={{ html: htmlContent }}
      scrollEnabled={false}
      bounces={false}
    />
  );
};

const styles = StyleSheet.create({
  map: {
    width: width,
    height: height * 0.5,
  },
});

export default KakaoMap; 