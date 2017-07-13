import React from 'react';
import VideoListItem from './video_list_item';

// functional component because there is no state to manage
// props.videos from <VideoList videos={this.state.videos} />
// if this was a class, props.videos would become this.props.videos />
const VideoList = (props) => {
  const videoItems = props.videos.map(video => {
    return <VideoListItem
              onVideoSelect={props.onVideoSelect} 
              key={video.etag} 
              video={video} />
  })

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
}

export default VideoList;