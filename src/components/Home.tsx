import * as React from 'react';

import Art from '../containers/ArtContainer'
import { IStateProps, IDispatchProps } from '../containers/HomeContainer';

type Props = IStateProps & IDispatchProps;

class Home extends React.Component<Props, {}> {
	componentDidMount() {
		const { artsActions, arts } = this.props;

		if (!arts) {
			artsActions.getArts();
		}
	}

	render() {
		const { arts } = this.props;

		if (arts && arts.length) {
			return (
				<div className="row">
					{arts && arts.length ?
						arts.map((art: any) => <Art key={art} _id={art} />)
						:
						''
					}
				</div>
			);
		}
		return <h2>Loading..</h2>
	}
}

export default Home;
