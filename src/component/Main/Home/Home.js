import React, {Component} from 'react';
import './Home.scss'

class Home extends Component {
    render() {
        let {data} = this.props
        return (
            <div className={'home'}>
            <div className={'home-wrapper'}>
                <div className={'home-title'}>
                    {data.title}
                </div>
                <div className={'home-text'}>
                    {data.text}
                </div>
            </div>
            </div>
        );
    }
}

export default Home;