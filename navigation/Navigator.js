import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import MainScreen from '../containers/MainPage/MainPage'
import LinkDisplayScreen from '../screens/linkDisplayScreen'

const Navigator = createStackNavigator({
    Welcome: MainScreen,
    Video: LinkDisplayScreen
})


export default createAppContainer(Navigator)