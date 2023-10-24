import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { View, Text } from "react-native";

import Home from "./home";
import Active from "./active-job";
import Account from "./account";
import { Stack } from "expo-router";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
//import AdminDashboard from "./admin-dashboard";
//import ConfirmDelivery from "./confirm-delivery";
//import AddDriverMain from "./add-driver";
//import DriverReviewPage from "./driver-review" 
//import DamageAssessment from "./damage-assessment";

const Tab = createBottomTabNavigator();

export default function Page() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#ffffff",
      }}
    >
      <Stack.Screen options={{ header: () => null }} />
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#ffffff",
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
            height: 80,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Active"
          component={Active}
          options={{
            tabBarLabel: "Active",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="view-sequential"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarLabel: "Account",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
        {/* <Tab.Screen
          name="DamageAssessment"
          component={DamageAssessment}
          options={{
            tabBarLabel: "DamageAssessment",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        /> */}
      </Tab.Navigator>
    </View>
  );
}
