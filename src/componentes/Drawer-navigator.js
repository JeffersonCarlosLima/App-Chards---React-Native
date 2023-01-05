import { createDrawerNavigator} from '@react-navigation/drawer';
import App from '../../App';
import Carrinho from '../Interfaces/carrinho';
import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

export default function BarraNavegacao() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={App} />
      <Drawer.Screen name="Carrinho" component={Carrinho} />
    </Drawer.Navigator>
  );
}