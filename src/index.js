import React from 'react';
import ReactDOM from 'react-dom';


const picsApi = 'https://jsonplaceholder.typicode.com/photos';
class App extends React.Component {
  state = {
      allPictures: [],
      error: null
  };

  componentDidMount() {
    fetch(picsApi)
        .then(rep => rep.json())
        .then(payload => {
            const fiftyPics = payload.filter((i, index) => index < 50);
            this.setState({allPictures: fiftyPics})
        })
        .catch(erors => this.setState({ error: errors }));
  }
  
  render() {
    return (
      <div>
        {this.state.allPictures.map(pics => (
            <img key={pics.id} src={pics.thumbnailUrl} alt={pics.title} />
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
