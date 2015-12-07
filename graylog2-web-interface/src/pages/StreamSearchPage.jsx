import React, {PropTypes} from 'react';
import SearchPage from './SearchPage';
import {Spinner} from 'components/common';
import StreamsStore from 'stores/streams/StreamsStore';

const StreamSearchPage = React.createClass({
  propTypes: {
    params: PropTypes.object.isRequired,
  },
  getInitialState() {
    return {
      stream: undefined,
    };
  },
  componentDidMount() {
    StreamsStore.get(this.props.params.streamId, (stream) => this.setState({stream: stream}));
  },
  render() {
    if (!this.state.stream) {
      return <Spinner/>;
    }

    return <SearchPage searchInStream={this.state.stream} {...this.props}/>;
  },
});

export default StreamSearchPage;
