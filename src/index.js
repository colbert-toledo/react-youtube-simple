// used to create and manage our components
import React, { Component } from 'react';
import _ from 'lodash';
// used to interact with the DOM
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBOwIs32BKQKJoLcaIUxxJOYdWDKp9sUBI';

// Downwards data flow = Only the most parent component should be responsible of fetching data
// App is the most parent component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('el pulso de la republica');
  }

  // passing props
  // <VideoList videos={this.state.videos} />
  render() {
    const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos} />
      </div>
    );
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      // same as this.setState({ videos: videos });
      // this.setState({ videos });

      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    })
  }
}
/* before
const App = () => {
  return (
    <div>
      <SearchBar />      
    </div>
  );
}
*/

// <App /> == <App></App> == React.createElement("App") ...etc
// <App /> is an instance of App
ReactDOM.render(<App />, document.getElementById('root'));