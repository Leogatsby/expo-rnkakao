// 카카오 SDK 설정
const 카카오설정 = {
  네이티브앱키: "YOUR_KAKAO_NATIVE_APP_KEY", // 카카오 개발자 사이트에서 발급받은 네이티브 앱 키
  // 카카오 안드로이드 Maven 저장소 주소
  안드로이드: {
    저장소주소: "https://devrepo.kakao.com/nexus/content/groups/public/", // 안드로이드 Maven 저장소 주소
    오쓰코드핸들러적용여부: true, // 안드로이드 인증 코드 핸들러 적용 여부
    개발용키해시: 앱설정.안드로이드.개발용키해시, // 안드로이드 키해시 (개발용/배포용 선택)
    배포용키해시: 앱설정.안드로이드.배포용키해시 // 안드로이드 키해시 (개발용/배포용 선택)
  },

  // 애플OS 설정
  애플OS: {
    핸들카카오오픈URL설정여부: true // iOS 카카오 URL 핸들러 적용 여부
  }
};

module.exports = 카카오설정;
