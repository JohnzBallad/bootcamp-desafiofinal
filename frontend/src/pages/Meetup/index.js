/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import FilePreview from 'react-preview-file';
import PropTypes from 'prop-types';

import Camera from '@material-ui/icons/CameraAlt';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as MeetupActions } from '../../store/ducks/meetup';

import {
  Container, Form, Input, Button, Checkbox, Label, File, Preview,
} from './styles';

class Meetup extends Component {
  static propTypes = {
    createMeetupRequest: PropTypes.func.isRequired,
  };

  state = {
    uploadedFile: {},
    title: '',
    description: '',
    location: '',
    frontend: false,
    backend: false,
    mobile: false,
    devops: false,
    gestao: false,
    marketing: false,
    when: '2019-04-20 13:14:20',
  };

  onImageDrop = (files) => {
    this.setState({
      uploadedFile: files[0],
    });
  };

  renderUploadedFile = () => {
    const { uploadedFile } = this.state;

    return uploadedFile.name ? (
      <FilePreview file={uploadedFile}>
        {preview => <Preview key={uploadedFile.name} alt={uploadedFile.name} src={preview} />}
      </FilePreview>
    ) : (
      <Camera />
    );
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    const { createMeetupRequest } = this.props;

    const {
      frontend,
      backend,
      devops,
      mobile,
      marketing,
      gestao,
      title,
      description,
      location,
      uploadedFile,
      when,
    } = this.state;

    const preferences = {
      frontend,
      backend,
      devops,
      mobile,
      marketing,
      gestao,
    };

    // console.log(uploadedFile);
    createMeetupRequest({
      preferences,
      title,
      description,
      location,
      uploadedFile,
      when,
    });
  };

  render() {
    const {
      frontend,
      backend,
      devops,
      mobile,
      marketing,
      gestao,
      title,
      description,
      location,
    } = this.state;

    return (
      <Container>
        <Form onSubmit={this.handleFormSubmit}>
          <Label>Título</Label>
          <Input
            type="text"
            value={title}
            placeholder="Digite o título do meetup"
            placeholderTextColor="#FFF"
            onChange={e => this.setState({ title: e.target.value })}
          />

          <Label>Descrição</Label>
          <Input
            type="text"
            value={description}
            placeholder="Descreva o meetup"
            placeholderTextColor="#b3b3b3"
            onChange={e => this.setState({ description: e.target.value })}
          />

          {/* <Label>Quando?</Label> */}

          <Label>Imagem</Label>
          <Dropzone
            onDrop={this.onImageDrop}
            accept="image/jpg,image/png,image/jpeg"
            multiple={false}
          >
            {({
              getRootProps, getInputProps, isDragActive, isDragReject,
            }) => (
              <File {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive && !isDragReject && "Drop it like it's hot!"}
                {isDragReject && 'File type  not accepted, sorry!'}

                {this.renderUploadedFile()}
              </File>
            )}
          </Dropzone>

          <Label>Localização</Label>
          <Input
            type="text"
            placeholder="Onde seu meetup irá acontecer"
            placeholderTextColor="#FFF"
            value={location}
            onChange={e => this.setState({ location: e.target.value })}
          />

          <Label>Tema do meetup</Label>
          <div>
            <label>
              <Checkbox
                name="frontend"
                type="checkbox"
                checked={frontend}
                onChange={e => this.setState({ frontend: e.target.checked })}
              />
              Front-end
            </label>

            <label>
              <Checkbox
                name="backend"
                type="checkbox"
                checked={backend}
                onChange={e => this.setState({ backend: e.target.checked })}
              />
              Back-end
            </label>

            <label>
              <Checkbox
                name="mobile"
                type="checkbox"
                checked={mobile}
                onChange={e => this.setState({ mobile: e.target.checked })}
              />
              Mobile
            </label>

            <label>
              <Checkbox
                name="devops"
                type="checkbox"
                checked={devops}
                onChange={e => this.setState({ devops: e.target.checked })}
              />
              DevOps
            </label>

            <label>
              <Checkbox
                name="gestao"
                type="checkbox"
                checked={gestao}
                onChange={e => this.setState({ gestao: e.target.checked })}
              />
              Gestão
            </label>

            <label>
              <Checkbox
                name="marketing"
                type="checkbox"
                checked={marketing}
                onChange={e => this.setState({ marketing: e.target.checked })}
              />
              Marketing
            </label>
          </div>
          <Button type="submit">Continuar</Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  meetup: state.meetup,
});

const mapDispatchToProps = dispatch => bindActionCreators(MeetupActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Meetup);
