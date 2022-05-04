import styled from "styled-components";

const Button = styled.button`
	border: none;
	padding: 0.3rem 0.6rem;
	background-color: ${(props) => (props.primary ? '#f97316' : '#ffedd5')};
	color: ${(props) => (props.primary ? 'white' : 'black')};
	border-radius: 0.25rem;
	font-weight: 700;
`;

export const BiggerButton = styled(Button)`
	padding: 1rem 1rem;
	@media (max-width: 768px) {
		padding: 0.8rem 0.8rem;
	}
`;

export default Button;
