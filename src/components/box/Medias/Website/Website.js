import React, { Component } from "react";
import fetchMeta from "fetch-meta";

class Website extends Component {
  state = {
    preview: null
  };

  componentDidMount() {
    fetchMeta({ uri: this.props.path })
      .then(res => {
        console.log(res);
        const website = (
          <a
            href={res["link:canonical"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={res["link:apple-touch-icon-precomposed"]}
                alt={res["summary:description"]}
              />
            </div>
          </a>
        );

        this.setState({ preview: website });
      })
      .catch(err => console.log(err));
  }

  render() {
    return this.state.preview ? this.state.preview : null;
  }
}

export default Website;
