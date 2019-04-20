import React from 'react';

import LoadingIcon from '@material-ui/icons/Cached';

import { Spinner } from './styles';

const Loading = () => <Spinner src={LoadingIcon} alt="carregando" />;

export default Loading;
