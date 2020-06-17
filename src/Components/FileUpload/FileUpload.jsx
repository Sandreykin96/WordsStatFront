import React, { Component } from "react";
import axios from "axios";
import "./DropOrSelect.css";

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadStatus: false,
    };
    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.append("file", this.uploadInput.files[0]);

    axios
      .post("http://localhost:5000/upload", data)
      .then((response) => {
        console.log(response.data);
        let addMessage = this.props.addMessage;
        addMessage(response.data);
        console.log(response.date);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="DropZone">
        <div className="Content">
          <form onSubmit={this.handleUploadImage}>
            <div>
              <input
                ref={(ref) => {
                  this.uploadInput = ref;
                }}
                type="file"
              />
            </div>
            <button>Click to upload</button>
          </form>
        </div>
      </div>
    );
  }
}

export default FileUpload;
