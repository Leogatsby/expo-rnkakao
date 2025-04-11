import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import { getProfile } from "@react-native-kakao/core";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      // 카카오 프로필 정보를 가져와서 로그인 상태 확인
      const profile = await getProfile();
      if (profile) {
        // 로그인된 경우 메인 화면으로 이동
        router.replace("/main");
      } else {
        // 로그인되지 않은 경우 로그인 화면으로 이동
        router.replace("/login");
      }
    } catch (error) {
      // 에러 발생 시 로그인 화면으로 이동
      router.replace("/login");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>로딩 중...</Text>
      </View>
    );
  }

  return null;
}
