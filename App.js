import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const colors = {
  themeColor: "#4263ec",
  white: "#fff",
  background: "#f4f6fc",
  greyish: "#a4a4a4",
  tint: "#2b49c3",
};

const tasks = [
  {
    task: "Morning Walk",
    icon: "hiking",
    theme: "#008b8b",
    stamp: "Today . 8pm",
  },

  {
    task: "Meet with HR",
    icon: "account-tie",
    theme: "#37003c",
    stamp: "Today . 12pm",
  },

  {
    task: "Shopping",
    icon: "cart",
    theme: "#fed132",
    stamp: "tomorrow . 9pm",
  },
  {
    task: "Time for GYM",
    icon: "weight",
    theme: "#008b8b",
    stamp: "tomorrow . 12pm",
  },
];

const Task = ({ task, icon, theme, stamp }) => {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        flexDirection: "row",
        marginHorizontal: 16,
        marginVertical: 5,
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 24,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name={icon}
          size={30}
          style={{ color: theme, marginRight: 5 }}
        />
        <View>
          <Text style={{ fontSize: 18 }}>{task}</Text>
          <Text style={{ color: colors.greyish }}>{stamp}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <MaterialCommunityIcons
          name="pencil"
          size={30}
          style={{ color: theme }}
        />

        <MaterialCommunityIcons
          name="trash-can"
          size={30}
          style={{ color: theme, marginLeft: 5 }}
        />
      </View>
    </View>
  );
};

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.themeColor }}>
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.themeColor}
        />
        <View style={styles.viewArea}>
          <MaterialCommunityIcons
            name="text"
            size={30}
            style={styles.material}
          />
          <View style={{ flexDirection: "row" }}>
            <AntDesign name="bells" size={30} style={styles.material} />
            <AntDesign name="user" size={30} style={styles.material} />
          </View>
        </View>
        <View style={{ padding: 16 }}>
          <Text style={{ color: colors.white, fontSize: 30 }}>
            {"Selam\nAteş"}
          </Text>
          <View
            style={{
              paddingHorizontal: 16,
              paddingVertical: 16,
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: colors.tint,
              borderRadius: 20,
              marginVertical: 20,
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="magnify"
              size={30}
              style={styles.material}
            />

            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="microphone"
                size={30}
                style={styles.material}
              />
              <MaterialCommunityIcons
                name="tune"
                size={30}
                style={styles.material}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            padding: 15,
            flexDirection: "row",
            backgroundColor: colors.background,
            borderRadius: 6,
            marginHorizontal: 5,
            justifyContent: "space-between",
            alignItems: "center",
            borderTopLeftRadius: 20,
          }}
        >
          <Text style={{ fontSize: 24 }}>Tasks</Text>
          <MaterialCommunityIcons
            name="plus"
            size={40}
            style={styles.themeColor}
          />
        </View>

        <ScrollView style={{ backgroundColor: colors.background }}>
          {tasks.map((task) => (
            <Task
              task={task.task}
              icon={task.icon}
              theme={task.theme}
              stamp={task.stamp}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeColor,
  },
  viewArea: {
    backgroundColor: colors.themeColor,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  material: {
    color: colors.white,
  },
});
