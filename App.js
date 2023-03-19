import StackNavigator from './StackNavigator';
import {Context} from "./Context";

export default function App() {
  return (
    <Context>
      <StackNavigator/>
    </Context>   
  );
}

