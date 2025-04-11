import { useEffect } from "react";
import { Stack } from "expo-router";
import { initializeKakaoSDK } from "@react-native-kakao/core";
import { 카카오설정 } from "../config/카카오설정.config";

export default function RootLayout() {
  // 카카오 SDK 초기화
  useEffect(() => {
    initializeKakaoSDK(카카오설정.네이티브앱키);
  }, []);

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false
        }}
      />
      {/* 여기에 다른 스크린 설정을 추가할 수 있습니다 */}
    </Stack>
  );
}
