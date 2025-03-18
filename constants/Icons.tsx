import { Ionicons } from "@expo/vector-icons";

export const icon = {
  index: ({ color, focused }: { color: string; focused: boolean }) =>
    focused ? (
      <Ionicons name="home" size={9} color={color} />
    ) : (
      <Ionicons name="home-outline" size={4} color={color} />
    ),
  discover: ({ color, focused }: { color: string; focused: boolean }) =>
    focused ? (
      <Ionicons name="compass" size={4} color={color} />
    ) : (
      <Ionicons name="compass-outline" size={4} color={color} />
    ),
  saved: ({ color, focused }: { color: string; focused: boolean }) =>
    focused ? (
      <Ionicons name="bookmarks" size={4} color={color} />
    ) : (
      <Ionicons name="bookmarks-outline" size={4} color={color} />
    ),
  settings: ({ color, focused }: { color: string; focused: boolean }) =>
    focused ? (
      <Ionicons name="settings" size={9} color={color} />
    ) : (
      <Ionicons name="settings-outline" size={6} color={color} />
    ),
};
