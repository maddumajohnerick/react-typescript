import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ArtView from '../components/ArtView';
import * as artsActions from '../actions/artsActions';
import { IReduxState } from '../store/rootReducer';
import { IArt } from '../types/art.types';

interface IStateProps {
	artId: string,
	art: IArt
}

interface IDispatchProps {
	artsActions: typeof artsActions
}

function mapStateToProps(state: IReduxState, ownProps: any): IStateProps {
	const artId = ownProps.match.params.artId;
	return {
		artId,
		art: state.arts.byIds ? state.arts.byIds[artId] || null : null,
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
)(ArtView);
