import React from 'react';
import styled from 'styled-components';

type Colors = 'blue' | 'red';
type Sizes = 'small' | 'large'

interface ButtonColorPropsType {
	$bgcolor: Colors,
	onClick: () => void,
	size?: Sizes
}

export const ButtonWrapper = styled('button')<ButtonColorPropsType>`
	display: flex;
	font-size: ${props => props.size === 'small' ? '12px' : '16px' };
	color: #fff;
	border: none;
	border-radius: 4px;
	padding: ${props => props.size === 'small' ? '5px 10px' : '8px 15px'};
	width: fit-content;
	cursor: pointer;
	outline: none;
	margin: 5px;
	background: ${props => props.$bgcolor === 'blue' ? props.theme.blue : props.$bgcolor === 'red' ? props.theme.red : props.theme.lightDark};
	&:hover {
		background: ${props => props.$bgcolor === 'blue' ? '#0a58a7' : props.$bgcolor === 'red' ? '#bb0546' : props.theme.lightDark};
	}
`;

interface ButtonPropsType {
	bgColor: Colors,
	children: React.ReactNode,
	onClick: () => void,
	size?: Sizes,
	type?: string
}

export const Button = (props: ButtonPropsType) => {
	return (
		<ButtonWrapper $bgcolor={props.bgColor} onClick={ props.onClick } size={props.size}>
			{props.children}
		</ButtonWrapper>
	);
};
