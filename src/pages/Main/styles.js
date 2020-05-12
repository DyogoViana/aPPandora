import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
	margin-top: 30px;
	display: flex;
	flex-direction: row;

	input {
		flex: 1;
		border: 1px solid #eee;
		padding: 10px 15px;
		border-radius: 4px;
		font-size: 16px;
	}
`;

// Animação de giro. Ex: loading.
const rotate = keyframes`
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
`;

export const SubmitButton = styled.button.attrs((props) => ({
	type: 'submit',
	disabled: props.loading,
}))`
	background: #7159c1;
	border: 0;
	padding: 0 15px;
	margin-left: 10px;
	border-radius: 4px;

	display: flex;
	justify-content: center;
	align-items: center;

	/* Desativa o btn quando tiver add/carregando um novo repositório. */
	&[disabled] {
		cursor: not-allowed;
		opacity: 0.6;
	}

	/* Giro do icone de loading */
	${(props) =>
		props.loading &&
		css`
			svg {
				animation: ${rotate} 2s linear infinite;
			}
		`}
`;

// Lista dos repositórios.
export const List = styled.ul`
	list-style: 15px 0;
	margin-top: 30px;

	li {
		padding: 15px 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		/* aplica em todos, exceto no primeiro. */
		& + li {
			border-top: 1px solid #eee;
		}
	}

	a {
		color: #7159c1;
		text-decoration: none;
	}
`;
