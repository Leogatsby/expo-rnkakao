const 카카오설정 = require("./config/카카오설정.config");
const 앱설정 = require("./config/앱설정.config");

// config.js 그냥 주석용이다 ㅋㅋㅋ 원래 app.json에 있는 내용을 여기에 옮긴거임
module.exports = {
  //expo 가장 큰 설정
  expo: {
    name: 앱설정.제목,
    slug: 앱설정.슬러그,
    version: 앱설정.버전,
    orientation: 앱설정.방향,
    icon: 앱설정.아이콘,
    scheme: 앱설정.스키마,
    userInterfaceStyle: 앱설정.인터페이스스타일,
    newArchEnabled: 앱설정.새로운아키텍처,
    splash: {
      image: 앱설정.스플래시,
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    //Ⅰ.ios 설정
    ios: {
      supportsTablet: 앱설정.애플OS.테블릿설정,
      bundleIdentifier: 앱설정.애플OS.패키지명
    },
    //Ⅱ.android 설정
    android: {
      package: 앱설정.안드로이드.패키지명,
      adaptiveIcon: {
        foregroundImage: 앱설정.안드로이드.이미지,
        backgroundColor: "#ffffff"
      }
    },
    //Ⅲ.web 설정
    web: {
      favicon: 앱설정.웹.파비콘,
      bundler: 앱설정.웹.번들러,
      output: 앱설정.웹.출력
    },
    //Ⅳ.plugins 설정
    plugins: [
      "expo-router",
      [
        "expo-build-properties",
        {
          android: {
            extraMavenRepos: [카카오설정.안드로이드저장소주소],
            newArchEnabled: 앱설정.안드로이드.뉴아키텍처적용여부
          },
          ios: {
            newArchEnabled: 앱설정.애플OS.뉴아키텍처적용여부
          }
        }
      ],
      [
        "@react-native-kakao/core",
        {
          nativeAppKey: 카카오설정.네이티브앱키,
          android: {
            authCodeHandlerActivity:
              카카오설정.안드로이드.오쓰코드핸들러적용여부
          },
          ios: {
            handleKakaoOpenUrl: 카카오설정.애플OS.핸들카카오오픈URL설정여부
          }
        }
      ]
    ],
    //Ⅴ.experiments 설정
    experiments: {
      typedRoutes: 앱설정.파일라우팅설정여부
    }
  }
};
