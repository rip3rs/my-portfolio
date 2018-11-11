import React, { Component } from "react";
import classes from "./Medias.module.css";
import Modal from 'react-modal';
import Carousel from "../../Carousel/Carousel";

const modalStyle = {
  content: {
    left: 0,
    right: 0,
    borderRadius: 0,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: 'none',
    padding: 0,
    height: 'auto',
    width: '100%',
    top: '25%'
  },
  overlay: {
    background: `radial-gradient(at center center, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, .5) 100%)`,
    filter: `progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#007db9e8',GradientType=1 )`
  }
};

Modal.setAppElement('#root')

class Medias extends Component {
  state = {
    modalIsOpen: false,
    modalIndex: null,
    medias: [],
    modalMedias: {}
  }

  chooseMediaType = (mediaInput, index) => {
    let media = null;
    // console.log(mediaInput.type)
    switch (mediaInput.type) {
      case 'image': media = <img key={index} className={classes.img} src={mediaInput.path} alt={mediaInput.alt} />; break;
      case 'video': media = null; break;
      case 'embedded': media = <div key={index} className={this.props.contentExist ? classes.container : null}><iframe title={mediaInput.title} src={mediaInput.path} width="100%" height="100%" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen={true}></iframe></div>; break;
      case 'modal': media = <img key={index} onClick={this.openModal.bind(this, index)} className={classes.img} src={mediaInput.path} alt={mediaInput.alt} />; break;
      default: media = null; break;
    }

    return media;
  }

  openModal = (key) => {
    this.setState({ modalIsOpen: true, modalIndex: key });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    document.querySelector('body').classList.toggle('no-scroll');
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false, modalIndex: null });
    document.querySelector('body').classList.toggle('no-scroll');
  }

  render() {
    let medias = this.state.medias.length > 0 ? this.state.medias : null;
    let modal = Object.keys(this.state.modalMedias).length ? (
      <Modal
        key={Math.random()}
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal.bind(this)}
        style={modalStyle}
        appElement={document.getElementById('root')}>
        <Carousel>{this.state.modalMedias[this.state.modalIndex]}</Carousel>
      </Modal>) : null;

    return [medias, modal];
  }

  componentDidMount() {
    const medias = [];
    const modalMedias = {}

    this.props.medias.array.forEach((media, i) => {
      medias.push(this.chooseMediaType(media, i));

      if (media.modal) {
        modalMedias[i] = [];
        media.modal.forEach((modalMedia, index) => {
          modalMedias[i].push(this.chooseMediaType(modalMedia, index));
        });
      }
    });

    this.setState({ medias: medias, modalMedias: modalMedias });
  }
};

export default Medias;