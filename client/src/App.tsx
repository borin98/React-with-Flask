import { IonApp, setupIonicReact } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import {useEffect, useState} from "react";

setupIonicReact();

interface dataInterface{
    text_example: string[];
}

const App: React.FC = () => {

    const [data, setData] = useState<dataInterface>({text_example: [""]});

    useEffect(() => {
        fetch("/test").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
                console.log(data.text_example)
            }
        )
    })

    return(
        <IonApp>
          <div>
              {(typeof data.text_example === "undefined") ? (
                  <p>Loading...</p>
              ) : (
                  data.text_example.map((text: string, i: number) =>
                  <p key={i}>{text}</p>)
              )}
          </div>
      </IonApp>
    );
};

export default App;
