import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../../actions/index'
import flv from 'flv.js';

class StreamShow extends Component {
  constructor(props) {
    super(props);
    this.videoRef1 = React.createRef();
    this.videoRef2 = React.createRef();
  }

  componentDidMount() {
    this.props.fetchStream(6)
    this.props.fetchStream(7)
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillUnmount() {
    if (this.player1) { this.player1.destroy(); }
    if (this.player2) { this.player2.destroy(); }
  }

  buildPlayer() {
    if ((this.player1 && this.player2) || !this.props.stream1 || !this.props.stream2)
      return;

    this.player1 = flv.createPlayer({
      type: 'flv',
      url: `http://13.54.200.18:8000/live/6.flv`
    });
    if (!this.videoRef1.current) { return }
    this.player1.attachMediaElement(this.videoRef1.current);
    this.player1.load();

    this.player2 = flv.createPlayer({
      type: 'flv',
      url: `http://13.54.200.18:8000/live/7.flv`
    });
    if (!this.videoRef2.current) { return }
    this.player2.attachMediaElement(this.videoRef2.current);
    this.player2.load();

  }

  render() {
    console.log('state: ', this.props)

    if (!this.props.stream1 || !this.props.stream2 ) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <video ref={this.videoRef1} style={{ width: '40%' }} controls={true} />
        <video ref={this.videoRef2} style={{ width: '40%' }} controls={true} />
        <h1>{this.props.stream1.title}</h1>
        <h5>{this.props.stream1.description}</h5>
        <h1>{this.props.stream2.title}</h1>
        <h5>{this.props.stream2.description}</h5>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream1: state.streams[6], stream2: state.streams[7] }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow);
