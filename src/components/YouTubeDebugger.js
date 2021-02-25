// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
    constructor() {
      super();
      // Define the initial state:
      this.state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
            resolution: '1080p'
            }
        }
      };
    }
  
    handleClickBit = (event) => {
        // event.persist()
        // this.setState(previousState => {
        //     if (event.target.className === 'bitrate'){
        //         return {
        //             settings: {
        //                 ...this.state.settings,
        //                 bitrate: 12
        //             }
        //         }
        //     } else if (event.target.className ==='resolution'){
        //         return {
        //             settings: {
        //                 ...this.state.settings,
        //                 resolution: '720p'
        //             }
        //         }
        //     }
        //   })
        this.setState(previousState => {
                return {
                    settings: {
                        ...this.state.settings,
                        bitrate: 12
                    }
                }
        })
    }

    handleClickResolution = () => {
        this.setState({
          settings: {
            ...this.state.settings,
            video: {
              ...this.state.settings.video,
              resolution: '720p'
            }
          }
        });
    }
  
    render() {
      return (
        <div>
          <p>I have been clicked {this.state.timesClicked} times!</p>
          <button onClick={this.handleClickBit} className='bitrate'>bitrate</button>
          <button onClick={this.handleClickResolution} className='resolution'>resolution</button>

        </div>
      );
    }
  }
  
  export default YouTubeDebugger;