import React from 'react';

import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonItem, IonFab, IonFabList, IonFabButton, IonIcon, IonRange, IonList } from '@ionic/react';

class TabPlayer extends React.Component {
  render() {
    return (
      <>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Player</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent scrollY={false}>
          {/* Album Art */}
          <IonCard style={{
            padding: 'auto 2rem',
          }}>
            <img src="https://i.railrunner16.me/SQjvgf3.png" alt="Now Playing" />
          </IonCard>

          {/* Progress Slider */}
          <IonItem lines="none">
            <IonRange></IonRange>
          </IonItem>

          {/* Controls */}
          <IonFab vertical="bottom" horizontal="start" slot="fixed">
            <IonFabButton>
              <IonIcon name="arrow-dropright" />
            </IonFabButton>
            <IonFabList side="end">
              <IonFabButton>
                <IonIcon name="rewind" />
              </IonFabButton>
              <IonFabButton>
                <IonIcon name="play" />
              </IonFabButton>
              <IonFabButton>
                <IonIcon name="fastforward" />
              </IonFabButton>
            </IonFabList>
          </IonFab>
        </IonContent>
      </>
    );
  }
}

export default TabPlayer;