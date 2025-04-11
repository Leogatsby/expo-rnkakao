카카오톡 expo 로그인 예제

■01.npx expo install expo-dev-client 를 설치한다. (expo 공식문서 참조)

해당 예제는 expo Go에서 실행이 안된다. 하여서 expo-dev-clinet에서만 실행이 된다.
=> 앞으로 Go 보다는 USB를 통해서 직접 접근하는거니 실전 예제에 가까워짐

에뮬레이터 < Go < expo-dev-client

■02.npx expo install expo-build-properties 를 설치한다.

네이티브 빌드 설정을 커스터마이징할

■03.npx expo install @react-native-kakao/core @react-native-kakao/user 를 설치한다. (https://rnkakao.dev/)

1. 리액트 네이티브 카카오 코어
2. 리액트 네이티브 카카오 유저 (로그인 관련 모듈)

■04. app.json에 각종 설정을 해둔다.

1. 카카오 설정
2. 앱 설정
   => 백광일 스타일은 app.config.js를 만들어서 각각의 설정을 분리한다.

■05. 카카오 디벨로퍼스에서 내애플리케이션 네이비브키를 발급받는다. (앱설정> 앱키)

■06. 카카오 디벨로퍼스에서 내애플리케이션 플랫폼설정한다. (앱설정 => 플랫폼) 01) ios 번들아이디 입력 02) 안드로이드 패키지아이디 입력

■07. 카카오 디벨로퍼스에서 내애플리케이션 플랫폼 안드로이드에 개발용 키해시를 적는다. (앱설정 => 플랫폼)

import {getKeyHashAndroid} from "@react-native-kakao/core"; 에서 발급이 가능하다. (이거 원래 리액트 네이티브 기능인데 편의상 예제에서 사용한다.)

getKeyHashAndroid().then(console.log); => expo에서 유즈 이펙트로 감싸서 시행해서 알아본다.

=> 실제 베포용키해시는 따로 발급 받고 카카오에서 설정한다.

■08.제품설정 카카오로그인에 들어가서 로그인 활성화를 한다.

■09.제품설정 카카오로그인에 동의항목 들어가서 닉네임 프로필 사진등을 받는다.

■10.모든 설정이 끝났으면 앱키를 \_layout.tsx에 적용시킨다

import {initializeKakaoSDK} from "@react-native-kakao/core"; 에서 사용한다.

useEffect(() => {
initializeKakaoSDK(카카오설정.네이티브앱키);
})

를 실행해주는데 이것은 당연히 최상단에 지정

■11. import {Login,Logot,unlink} from "@react-native-kakao/user"; 를 import 해서 로그인 페이지를 만든다.

<Button onPress={Login().then(console.log).catch(console.error)}>카카오로그인</Button>
<Button onPress={Logot().then(console.log).catch(console.error)}>카카오로그인</Button>
<Button onPress={unlink().then(console.log).catch(console.error)}>카카오로그인</Button>

들어가야하는 문서 사이트
rnkakao.dev
expo 공식사이트
카카오 디벨로퍼스

튜토리얼 예제
https://youtu.be/apRtsSIYMt0

내가 만든 카카오 expo 로그인 튜토리얼 예제
https://chatgpt.com/share/67f89d2e-c0ac-8011-93de-0509cdd7a9eb

=> 공식문서의 추상적인 이야기를 이렇게나 잘 풀어내다니 ㄷㄷㄷ

[결론]

supabsa에 카카오로그인을 연동하자 그런데 혹시 모르니깐 해당 튜토리얼을 쓰고 특히나 콘피그는 너무 창의적으로 잘 설정했으니
깃허브에 푸쉬 하고 앞으로 복붙해서 쓰자
