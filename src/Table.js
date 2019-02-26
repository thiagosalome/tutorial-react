import React, {Component} from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    );
  }

const TableBody = props => { 
    const rows = props.characterData.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.job}</td>
          <td><button className="btn btn-success" onClick={() => props.removeCharacter(index)}>Delete</button></td>
        </tr>
      )
    });
  
    return <tbody>{rows}</tbody>
  }

class Table extends Component {
    render() {
        const {characterData, removeCharacter} = this.props;

        return (
            <table className="table">
               <TableHeader />
               <TableBody 
                characterData={characterData}
                removeCharacter={removeCharacter}
                />
            </table>
        );
    }
}

export default Table;