

import {createAppContainer , createSwitchNavigator , createStackNavigator , createDrawerNavigator} from 'react-navigation'

import { View , Text } from 'react-native'

import About from '../pages/About'
import Loading from '../pages/Loading'
import Lists from '../pages/Lists'
import Themes from '../pages/Themes'
import TodoList from '../pages/TodoList'
import nameGetter from  '../pages/nameGetter'


const ListsStack = createStackNavigator(
    {
        ListsScreen:Lists,
        TodoList:TodoList
    },
    {
        mode:'modal',
        headerMode:'none'
    }
)



const HomeDrawerStack = createDrawerNavigator(
    {
        About:About,
        Themes:Themes,
        ListsRoute:ListsStack
    },{
        initialRouteName:'ListsRoute',
        drawerPosition:'right'
    }
)



const  AuthSwitch = createSwitchNavigator(
    {
        nameGetter:nameGetter,
        Home:HomeDrawerStack
    }
)


const AppSwitchNavigator = createSwitchNavigator(
    {
        LoadingPage:Loading,
        Auth:AuthSwitch
    }

)


export default createAppContainer(AppSwitchNavigator)