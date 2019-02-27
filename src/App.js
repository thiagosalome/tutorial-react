import React, {Component} from 'react';
import Table from './Table';
import Form from "./Form";

class App extends Component {
	state = {
		characters : []
	}

  render() {
		/* Com adereços tem-se um cilco de dados unidirecional, não podendo excluir itens da matriz
		const characters = [
			{
					'name': 'Charlie',
					'job': 'Janitor'
			},
			{
					'name': 'Mac',
					'job': 'Bouncer'
			},
			{
					'name': 'Dee',
					'job': 'Aspring actress'
			},
			{
					'name': 'Dennis',
					'job': 'Bartender'
			}
		];
		*/
		const {characters} = this.state;

		return (
			<div className="container">
					<Table 
						characterData={characters}
						removeCharacter={this.removeCharacter}
						/>
					<Form handleSubmit={this.handleSubmit}></Form>
			</div>
		);
	}

	handleSubmit = character => {
    this.setState({
      characters : [
        ...this.state.characters,
        character
      ]
    })
  }
	
	removeCharacter = index => {
		const {characters} = this.state;

		// O filter percorre todo o array de caracteres e só retorna aqueles que são diferentes do índice
		this.setState({
			characters: characters.filter((character, i) => {
				return i !== index;
			})
		})
	}
}

export default App;