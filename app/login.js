import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { login } from "@react-native-kakao/core";

export default function Login() {
  const router = useRouter();

  const handleKakaoLogin = async () => {
    try {
      const result = await login();
      if (result) {
        // 로그인 성공 시 메인 화면으로 이동
        router.replace("/main");
      }
    } catch (error) {
      console.error("카카오 로그인 실패:", error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        onPress={handleKakaoLogin}
        style={{
          backgroundColor: "#FEE500",
          padding: 15,
          borderRadius: 5
        }}
      >
        <Text>카카오로 로그인</Text>
      </TouchableOpacity>
    </View>
  );
}
