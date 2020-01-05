import { createStackNavigator } from "react-navigation-stack";
import homePage from "../../containers/pages/homePage";
import beritaPage from "../../containers/pages/beritaPage";
import pengaduanPage from '../../containers/pages/pengaduanPage'
import { createSwitchNavigator,createAppContainer } from "react-navigation";

const HomePages = createStackNavigator(
    {
        Home : {
            screen : homePage
        }
    },
    {
        headerMode:'none',
        initialRouteName:'Home'
    }
)

const BeritaPages = createStackNavigator(
    {
        Berita : {
            screen:beritaPage
        }
    },
    {
        headerMode:'none',
        initialRouteName:'Berita'
    }
)

const pengaduanPages = createStackNavigator(
    {
        Pengaduan : {
            screen:pengaduanPage
        }
    },
    {
        headerMode:'none',
        initialRouteName:'Pengaduan'
    }
)

const SwichRoute = createSwitchNavigator(
    {
        HomePages,
        BeritaPages,
        pengaduanPages,
    },
    {
        headerMode:'none',
        initialRouteName:'HomePages'
    }
)

export default createAppContainer(SwichRoute)