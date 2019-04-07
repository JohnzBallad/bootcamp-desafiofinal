import React from 'react';

import LoadingIcon from '../../assets/loading.svg';

import { Spinner } from './styles';

const Loading = () => <Spinner src={LoadingIcon} alt="carregando" />;

export default Loading;
