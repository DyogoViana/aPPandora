import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';

import api from '../../services/api';
import { Container, Form, SubmitButton, List } from './styles';

export default class Main extends Component {
	state = {
		newRepo: '',
		repositories: [],
		loading: false, // desabilita o btn de add, enquanto tá carregando um repositório
	};

	// Carrega os dados do localStorage.
	componentDidMount() {
		const repositories = localStorage.getItem('repositories');

		if (repositories) {
			this.setState({ repositories: JSON.parse(repositories) });
		}
	}

	// Salva os dados do localStorage.
	componentDidUpdate(_, prevState) {
		const { repositories } = this.state;

		if (prevState.repositories !== repositories) {
			localStorage.setItem('repositories', JSON.stringify(repositories));
		}
	}

	handleInputChange = (e) => {
		this.setState({ newRepo: e.target.value });
	};

	handleSubmit = async (e) => {
		e.preventDefault();

		this.setState({ loading: true });

		const { newRepo, repositories } = this.state;
		const response = await api.get(`/repos/${newRepo}`);
		const data = {
			name: response.data.full_name,
		};

		this.setState({
			repositories: [...repositories, data],
			newRepo: '',
			loading: false,
		});

		console.log(response.data);
	};

	render() {
		const { newRepo, repositories, loading } = this.state;
		return (
			<Container>
				<h1>
					<FaGithubAlt />
					Repositórios
				</h1>

				<Form onSubmit={this.handleSubmit}>
					<input
						type="text"
						placeholder="Adicionar repositório"
						value={newRepo}
						onChange={this.handleInputChange}
					/>

					<SubmitButton loading={loading}>
						{loading ? (
							<FaSpinner color="#fff" size={14} />
						) : (
							<FaPlus color="#fff" size={14} />
						)}
					</SubmitButton>
				</Form>

				<List>
					{repositories.map(repository => (
						<li key={repository.name}>
							<span>{repository.name}</span>
							<a href="#">Detalhes</a>
						</li>
					))}
				</List>
			</Container>
		);
	}
}
