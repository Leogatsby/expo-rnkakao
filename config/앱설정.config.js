// 앱 기본 설정
const 앱설정 = {
  // 공통 설정
  제목: "my-app2", // 앱 이름
  슬러그: "my-app2", // 앱 슬러그
  버전: "1.0.0", // 앱 버전
  방향: "portrait", // 앱 방향
  아이콘: "./assets/images/icon.png", // 앱 아이콘
  스키마: "myapp", // 앱 스키마
  인터페이스스타일: "automatic", // 앱 인터페이스 스타일
  새로운아키텍처: true, // 새로운 아키텍처 사용 여부
  파일라우팅설정여부: true, // 파일 기반 라우팅 설정 여부
  스플래시: "./assets/images/splash-icon.png", // 스플래시 이미지

  // iOS 설정
  애플OS: {
    패키지명: "com.example.myapp.ios", // iOS 번들 아이디
    테블릿설정: true, // iOS 태블릿 지원 여부
    뉴아키텍처적용여부: true // iOS 뉴아키텍처 적용 여부
    //아이폰 앱스토어 아이디
    //아이패드 앱스토어 아이디

    //아이폰 마켓 URL
    //아이패드 마켓 URL
  },

  // 안드로이드 설정
  안드로이드: {
    패키지명: "com.example.myapp.android", // 안드로이드 패키지 아이디
    이미지: "./assets/images/adaptive-icon.png", // 안드로이드 어댑티브 아이콘 이미지
    뉴아키텍처적용여부: true, // 안드로이드 뉴아키텍처 적용 여부
    개발용키해시: "YOUR_DEBUG_KEY_HASH", // 개발용 키해시 (debug.keystore)
    배포용키해시: "YOUR_RELEASE_KEY_HASH" // 배포용 키해시 (release.keystore)
    //구글플레이스토어 마켓URL
  },

  // 웹 설정
  웹: {
    파비콘: "./assets/images/favicon.png", // 웹 파비콘
    번들러: "metro", // 웹 번들러
    출력: "static" // 웹 출력 설정
  }
};

module.exports = 앱설정;
