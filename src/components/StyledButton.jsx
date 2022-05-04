import styled from 'styled-components';

const Button = styled.button`
	border: none;
	padding: 0.3rem 0.6rem;
	background-color: ${(props) => (props.primary ? '#f97316' : '#ffedd5')};
	color: ${(props) => (props.primary ? 'white' : 'black')};
	border-radius: 0.6rem;
	font-weight: 700;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

  border: solid 0.25rem;
  border-color: ${(props) => (props.primary ? '#f97316' : '#fed7aa')};

	transition-property: all;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;

	&:hover {
		cursor: pointer;
    background-color: ${(props) => (props.primary ? '#fb923c' : '#fed7aa')};
	}
`;

export const BiggerButton = styled(Button)`
	padding: 0.8rem 1rem;
	font-size: 1rem; /* 16px */
	line-height: 1.5rem; /* 24px */
	@media (max-width: 768px) {
		padding: 0.8rem 0.8rem;
	}
`;

export default Button;
