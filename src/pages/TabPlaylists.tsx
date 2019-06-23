import React from 'react';

import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonListHeader, IonLabel, IonItem, IonThumbnail, IonImg } from '@ionic/react';
import IAlbum from '../interfaces/IAlbum';

class TabPlaylists extends React.Component {
  render() {
    const albums: IAlbum[] = [
      {
        name: 'Inception',
        artist: [
          'Teminite',
        ],
        trackCount: 10,
        year: 2016,
        albumArt: 'https://i.railrunner16.me/I6oqYs6.jpeg',
      },
      {
        name: 'Space Invaders - Single',
        artist: [
          'Teminite',
          'MDK',
        ],
        trackCount: 1,
        year: 2019,
      },
      {
        name: 'KIKO',
        artist: [
          'Panda Eyes',
        ],
        trackCount: 16,
        year: 2015,
      },
    ];

    return (
      <>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Albums &amp; Lists</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonListHeader>
              <IonLabel>Albums</IonLabel>
            </IonListHeader>
            {albums.map((album: IAlbum) => {
              return (
                <IonItem>
                  <IonThumbnail slot='start'>
                    <IonImg src={album.albumArt !== undefined ? album.albumArt : 'https://i.railrunner16.me/SQjvgf3.png'} />
                  </IonThumbnail>
                  <IonLabel>
                    <h2>{album.name}</h2>
                    <p>{album.artist.join(', ')} &mdash; {album.year}</p>
                  </IonLabel>
                </IonItem>
              )
            })}
          </IonList>
        </IonContent>
      </>
    );
  }
}

export default TabPlaylists;
