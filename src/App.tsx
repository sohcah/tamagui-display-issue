import "expo-dev-client";

import config from "./tamagui.config";
import {TamaguiProvider, Button, Stack, isWeb, Text} from "tamagui";
import {LogBox} from "react-native";

LogBox.ignoreLogs(["PropType will be removed from React Native"]);

export default function App() {

  return (
    <TamaguiProvider config={config}>
      <Stack flexDirection="row" p="$4">
        <Button>Not</Button><Button>In</Button><Button>Row</Button>
      </Stack>
      <Text>isWeb: {isWeb.toString()}</Text>
      <Stack flexDirection="column" p="$4" alignItems="flex-end">
        <Button>Not</Button><Button>Aligned</Button><Button>End</Button>
      </Stack>
      <Button>Because</Button><Button>No display: flex</Button>
      <Stack display="flex" flexDirection="row" p="$4">
        <Button>This</Button><Button>Works</Button><Button>Because</Button><Button>Manual</Button>
      </Stack>
    </TamaguiProvider>
  );
}
