import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from '../components/Home';
import * as artsActions from '../actions/artsActions';

function mapStateToProps(state: any) {
	return {
		arts: state.arts.allIds || null,
	};
}

function mapDispatchToProps(dispatch: any) {
	return {
		artsActions: bindActionCreators(artsActions, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
