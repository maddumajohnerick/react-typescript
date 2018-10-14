import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Art from '../components/Art';
import * as artsActions from '../actions/artsActions';
import { IReduxState } from '../store/rootReducer';
import { IArt } from '../types/art.types';

export interface IStateProps {
	art: IArt,
	liked: boolean
}

export interface IDispatchProps {
	artsActions: typeof artsActions
}

export interface IOwnProps {
	_id: number
}

function mapStateToProps(state: IReduxState, ownProps: IOwnProps): IStateProps {
	return {
		art: state.arts.byIds[ownProps._id],
		liked: state.arts.byIds[ownProps._id].liked,
	};
}

function mapDispatchToProps(dispatch: any): IDispatchProps {
	return {
		artsActions: bindActionCreators(artsActions, dispatch),
	};
}

export default connect<IStateProps, IDispatchProps, IOwnProps>(
	mapStateToProps,
	mapDispatchToProps
)(Art);
