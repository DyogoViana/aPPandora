import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Container, Form, SubmitButton } from './styles';

import api from '../../services/api';

export default class Main extends Component {
	state = {
		newRepo: '',
		repositories: [],
		loading: false, // desabilita o btn de add, enquanto tá carregando um repositório
	};

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
		const { newRepo, loading } = this.state;
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
			</Container>
		);
	}
}
