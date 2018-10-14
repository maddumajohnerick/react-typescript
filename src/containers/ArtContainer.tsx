import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Art from '../components/Art';
import * as artsActions from '../actions/artsActions';
import { IReduxState } from '../store/rootReducer';
import { IArt } from '../types/art.types';

interface IStateProps {
	art: IArt,
	liked: boolean
}

interface IDispatchProps {
	artsActions: typeof artsActions
}

function mapStateToProps(state: IReduxState, ownProps: any): IStateProps {
	console.log(state.arts.byIds)
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

export default connect<IStateProps, IDispatchProps, void>(
	mapStateToProps,
	mapDispatchToProps
)(Art);
