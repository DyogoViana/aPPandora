import styled from 'styled-components';

// Estilização do nome 'carregando...'.
export const Loading = styled.div`
	height: 100vh;
	color: #a69bcc;
	font-size: 2rem;
	font-weight: bold;

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Owner = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;

	a {
		color: #7159c1;
		font-size: 16px;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	img {
		width: 120px;
		border-radius: 50%;
		margin-top: 20px;
	}

	h1 {
		font-size: 24px;
		margin-top: 10px;
	}

	p {
		margin-top: 5px;
		font-size: 14px;
		color: #666;
		line-height: 1.4;
		text-align: center;
		max-width: 400px;
	}
`;

export const IssueList = styled.ul`
	padding-top: 3px;
	margin-top: 30px;
	border-top: 1px solid #eee;
	list-style: none;

	li {
		display: flex;
		padding: 15px 10px;
		border: 1px solid #eee;
		border-radius: 4px;

		& + li {
			margin-top: 10px;
		}

		img {
			width: 36px;
			height: 36px;
			border-radius: 50%;
			border: 2px solid #eee;
		}

		div {
			flex: 1;
			margin-left: 15px;

			strong {
				font-size: 16px;
			}

			a {
				text-decoration: none;
				color: #333;

				&:hover {
					color: #7159c1;
				}
			}

			span {
				background: #4fc296;
				color: #fff;
				border-radius: 2px;
				font-size: 12px;
				font-weight: inherit;
				height: 20px;
				padding: 3px 4px;
				margin-left: 10px;
			}
		}

		p {
			font-size: 12px;
			margin-top: 5px;
			color: #999;
		}
	}
`;
