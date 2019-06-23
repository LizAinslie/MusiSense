import React from 'react';

import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonAvatar, IonLabel, IonImg } from '@ionic/react';
import ISong from '../interfaces/ISong';

interface HomeProps { }
interface HomeState {
  songs: ISong[];
}

class TabList extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);

    this.state = {
      songs: [],
    };
  }

  public render() {
    const songs: ISong[] = [
      {
        title: 'Beastmode',
        contributingArtist: [
          'Teminite',
        ],
        album: 'Inception',
        albumArt: 'https://i.railrunner16.me/I6oqYs6.jpeg',
        trackNumber: 5,
        year: 2016,
      },
      {
        title: 'Inception',
        contributingArtist: [
          'Teminite',
        ],
        album: 'Inception',
        albumArt: 'https://i.railrunner16.me/I6oqYs6.jpeg',
        trackNumber: 1,
        year: 2016,
      },
      {
        title: 'Space Invaders',
        contributingArtist: [
          'Teminite',
          'MDK',
        ],
        album: 'Space Invaders - Single',
        trackNumber: 1,
        year: 2019,
      },
      {
        title: 'Highscore',
        contributingArtist: [
          'Panda Eyes',
        ],
        featuredArtist: [
          'Teminite',
        ],
        album: 'KIKO',
        trackNumber: 5,
        year: 2015,
      },
    ];

    return (
      <>
        <IonHeader>
          <IonToolbar>
            <IonTitle>List</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            {songs.map((song: ISong) => {
              return (
                <IonItem>
                  <IonAvatar slot='start'>
                    <IonImg src={song.albumArt !== undefined ? song.albumArt : 'https://i.railrunner16.me/SQjvgf3.png'} />
                  </IonAvatar>
                  <IonLabel>
                    <h2>{song.title}{song.featuredArtist !== undefined ? (
                      <span>
                        &nbsp;
                        <small>(feat. {song.featuredArtist.join(', ')})</small>
                      </span>
                    ) : ''}</h2>
                    <p>{song.contributingArtist.join(', ')} &mdash; {song.album}</p>
                  </IonLabel>
                </IonItem>
              );
            })}
          </IonList>
        </IonContent>
      </>
    );
  }
}

export default TabList;