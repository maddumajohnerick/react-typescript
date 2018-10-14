import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from '../components/Home';
import { IReduxState } from '../store/rootReducer';
import * as artsActions from '../actions/artsActions';

export interface IStateProps {
	arts: string[],
}

export interface IDispatchProps {
	artsActions: typeof artsActions
}

function mapStateToProps(state: IReduxState): IStateProps {
	return {
		arts: state.arts.allIds || null,
	};
}

function mapDispatchToProps(dispatch: any): IDispatchProps {
	return {
		artsActions: bindActionCreators(artsActions, dispatch),
	};
}

export default connect<IStateProps, IDispatchProps, void>(
	mapStateToProps,
	mapDispatchToProps
)(Home);
