import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '@/components/TabBar'

const _layout = () => {
  return (
    <Tabs
        tabBar={props=> <TabBar {...props} />}
        screenOptions={{headerShown: false}}
    >
      <Tabs.Screen
          name="index"
          options={{
              title: "Inicio"
          }}
      />
      <Tabs.Screen
          name="explore"
          options={{
              title: "Buscar"
          }}
      />
      <Tabs.Screen
          name="create"
          options={{
              title: "Guardadas"
          }}
      />
      <Tabs.Screen
          name="profile"
          options={{
              title: "Configuración"
          }}
      />
  </Tabs>
  )
}

export default _layout