import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// zawsze w przypadku tworzenia komponentu, musimy 
// zwracac jeden z najwyzszych levelem tag JSX (np. tag View)  
// => return top level tag, ktory bedzie sie skladal jeszcze z jakichs elementow

// komponent funkcyjny => komponent, ktory jest funkcja, ktora zwraca kod JSX
// const AlbumList = () => (
//         <View>
//             <Text>Album List!!!!!</Text>
//         </View>
//     );

class AlbumList extends Component {

    state = { albums: [] };

    componentWillMount() {
        console.log('component will mount');

        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album => 
        <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        console.log(this.state);
        
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}


export default AlbumList;
