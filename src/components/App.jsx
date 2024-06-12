import React, { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import {ImageGallery} from "./ImageGallery/ImageGallery";


export class App extends Component {

  state = {
    images : null,
    name : '',
  }
  componentDidMount() {
    fetch(`https://pixabay.com/api/?key=43324490-9271efc526d8e6f2666c059a2&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => response.json())
    .then(console.log)
  }
  hendleFormSearch = (name) => {
    this.setState({name})
    
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.hendleFormSearch}/>
        <ImageGallery name={this.state.name}/>
      </div>
    );
  }
}
