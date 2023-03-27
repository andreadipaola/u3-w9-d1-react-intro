import { Component } from "react";
class ImageComponent extends Component {
    render() {
        return <img src={this.props.imgSrc} alt={this.props.imgAlt} width="500px" />
    }
}


export default ImageComponent;