import React, {Component} from 'react';
import TableHeader from "./table-header";
import TableBody from "./table-body";

class Table extends Component {
    render() {
        const {characterData} = this.props;

        return (
            <table>
               <TableHeader />
               <TableBody characterData={characterData} />
            </table>
        );
    }
}

export default Table;