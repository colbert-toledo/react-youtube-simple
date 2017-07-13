import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
  // with {video} instead of props
  // const video = props.video
  const imageUrl = video.snippet.thumbnails.default.url

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list-item">
        <div className="media-left">
          <img className="media-object"src="http://via.placeholder.com/120x90" />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;