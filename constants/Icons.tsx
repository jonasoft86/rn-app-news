import { Ionicons } from "@expo/vector-icons";

export const icon = {
  index: ({ color, focused }: { color: string; focused: boolean }) =>
    focused ? (
      <Ionicons name="home" size={5} color={color} />
    ) : (
      <Ionicons name="home-outline" size={2} color={color} />
    ),
  discover: ({ color, focused }: { color: string; focused: boolean }) =>
    focused ? (
      <Ionicons name="compass" size={5} color={color} />
    ) : (
      <Ionicons name="compass-outline" size={2} color={color} />
    ),
  saved: ({ color, focused }: { color: string; focused: boolean }) =>
    focused ? (
      <Ionicons name="bookmarks" size={5} color={color} />
    ) : (
      <Ionicons name="bookmarks-outline" size={2} color={color} />
    ),
  settings: ({ color, focused }: { color: string; focused: boolean }) =>
    focused ? (
      <Ionicons name="settings" size={5} color={color} />
    ) : (
      <Ionicons name="settings-outline" size={2} color={color} />
    ),
};
