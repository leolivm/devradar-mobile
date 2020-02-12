import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";

export default function Profile({ navigation }) {
  const [loading, setLoading] = useState(true);
  const github_username = navigation.getParam("github_username");

  function handleComplete() {
    setLoading(false);
  }

  return (
    <>
      <WebView
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => handleComplete()}
        style={{ flex: 1 }}
        source={{ uri: `http://github.com/${github_username}` }}
      />
      {loading && (
        <ActivityIndicator
          size="large"
          color="#000"
          style={{
            flex: 1,
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            position: "absolute",
            alignItems: "center",
            justifyContent: "center"
          }}
        />
      )}
    </>
  );
}
