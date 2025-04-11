import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { logout } from "@react-native-kakao/core";

export default function Main() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.replace("/login");
    } catch (error) {
      console.error("로그아웃 실패:", error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>메인 화면</Text>
      <TouchableOpacity
        onPress={handleLogout}
        style={{
          backgroundColor: "#FF0000",
          padding: 15,
          borderRadius: 5,
          marginTop: 20
        }}
      >
        <Text style={{ color: "#FFFFFF" }}>로그아웃</Text>
      </TouchableOpacity>
    </View>
  );
}
