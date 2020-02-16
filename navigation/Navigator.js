import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import MainScreen from '../containers/MainPage/MainPage'
import SearchPage from '../containers/SearchPage/SearchPage';

const Navigator = createStackNavigator(
    {
    Welcome: MainScreen,
    Video: SearchPage,
    },
    {
        headerMode: 'none'
    }
    
);


export default createAppContainer(Navigator)