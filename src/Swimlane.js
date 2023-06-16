import React from 'react';
import Card from './Card';
import './Swimlane.css';
import Dragula from 'dragula';
import 'dragula/dist/dragula.css';

export default class Swimlane extends React.Component {
  render() {
    this.dragulaDecorator = (componentBackingInstance) => {
      if (componentBackingInstance) {
        // let options = { };
        Dragula([componentBackingInstance]);
      }
    };
    const cards = this.props.clients.map(client => {
      return (
        <Card
          key={client.id}
          id={client.id}
          name={client.name}
          description={client.description}
          status={client.status}
        />
      );
    })
    return (
      <div className="Swimlane-column">
        <div className="Swimlane-title">{this.props.name}</div>
        <div className="Swimlane-dragColumn" ref={this.dragulaDecorator}>
          {cards}
        </div>
      </div>);
  }

}
