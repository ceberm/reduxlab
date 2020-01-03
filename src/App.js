import React from 'react';
import {connect} from "react-redux";
import {moviesList} from "./actions";
import {bindActionCreators} from "redux";

class App extends React.Component {

  componentDidMount() {
    this.props.moviesList();
  }
 
  render(){
    console.log(this.props)
    return (
      <div className="App">hello
        <div>
          {this.props.movies? 
            this.props.movies.map(m => (
            <div key={m.id}>
              <br />
              <span>{m.title}</span>
            </div>
          ))
          : null}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    movies: state.movies
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({moviesList},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
