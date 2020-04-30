import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

export default class Stories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <section>
                <input className="Header-Popup" type="button" value="Stories" onClick={() => this.openModal()} />
                <Modal className="Story-Content" visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        <h1>Title</h1>
                        <p>Some ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome Contents</p>
                        <p>Some ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome ContentsSome Contents</p>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
            </section>
        );
    }
}