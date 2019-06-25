import React from 'react';

import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonAvatar, IonLabel, IonImg, IonButton, IonButtons, IonIcon, IonAlert } from '@ionic/react';
import ISong from '../interfaces/ISong';

interface HomeProps { }
interface HomeState {
  songs: ISong[];
  editing: boolean;
  showConfirmDelete: boolean;
  songToDelete?: number;
}

class TabList extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);

    this.state = {
      songs: [
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
      ],
      editing: false,
      showConfirmDelete: false,
    };
  }

  private removeSong(index: number) {
    const arr: ISong[] = [...this.state.songs];
    arr.splice(index, 1);
    this.setState({
      songs: arr,
    });
  }

  public render() {
    return (
      <>
        <IonHeader>
          <IonToolbar>
            <IonTitle>List</IonTitle>
            <IonButtons slot='primary'>
              <IonButton onClick={() => {
                this.setState((previousState, props) => ({
                  editing: !previousState.editing,
                }));
              }}>
                {this.state.editing ? "Done" : "Edit"}
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            {this.state.songs.map((song: ISong, index: number) => {
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
                  {this.state.editing ? (
                    <IonButton slot='end' fill='clear' onClick={() => {
                      this.setState({
                        songToDelete: index,
                        showConfirmDelete: true,
                      });
                    }}>
                      <IonIcon name='remove' />
                    </IonButton>
                  ) : ''}
                </IonItem>
              );
            })}
          </IonList>
          <IonAlert
            isOpen={this.state.showConfirmDelete}
            onDidDismiss={() => {
              this.setState({
                showConfirmDelete: false,
              });
            }}
            header={'Confirm Delete'}
            subHeader={'Are you sure you want to delete this song?'}
            message={'This will permanently remove this song from your library. You won\'t be able to get it back.'}
            buttons={[
              {
                text: 'Cancel',
                role: 'cancel',
                handler: () => { },
              },
              {
                text: 'Delete',
                handler: () => {
                  this.removeSong(this.state.songToDelete!);
                }
              },
            ]}
          ></IonAlert>
        </IonContent>
      </>
    );
  }
}

export default TabList;