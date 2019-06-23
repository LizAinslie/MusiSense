import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { IonApp, IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/react';
import TabList from './pages/TabList';
import TabPlayer from './pages/TabPlayer';
import TabPlaylists from './pages/TabPlaylists';

/* Core CSS required for Ionic components to work properly */
import "@ionic/core/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/core/css/normalize.css";
import "@ionic/core/css/structure.css";
import "@ionic/core/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/core/css/padding.css";
import "@ionic/core/css/float-elements.css";
import "@ionic/core/css/text-alignment.css";
import "@ionic/core/css/text-transformation.css";
import "@ionic/core/css/flex-utils.css";
import "@ionic/core/css/display.css";

const App: React.SFC = () => (
  <Router>
    <Route exact path="/" render={() => <Redirect to="/list" />} />
    <div className="App">
      <IonApp>
        <IonPage id="main">
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/:tab(list)" component={TabList} exact={true} />
              <Route path="/:tab(player)" component={TabPlayer} />
              <Route path="/:tab(playlists)" component={TabPlaylists} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="list" href="/list">
                <IonIcon name="list" />
                <IonLabel>List</IonLabel>
              </IonTabButton>
              <IonTabButton tab="player" href="/player">
                <IonIcon name="disc" />
                <IonLabel>Player</IonLabel>
              </IonTabButton>
              <IonTabButton tab="playlists" href="/playlists">
                <IonIcon name="albums" />
                <IonLabel>Albums &amp; Lists</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonPage>
      </IonApp>
    </div>
  </Router>
);


export default App;
