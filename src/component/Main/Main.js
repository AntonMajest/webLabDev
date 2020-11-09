import React, {Component} from 'react';
import Card from '@material-ui/core/Card';

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Carousel from 'react-elastic-carousel'
import Typography from '@material-ui/core/Typography';



import './Main.css'
class Main extends Component {
    render() {
        let {data} = this.props;
        return (
            <div className={'main-wrapper'} >

                <div className={'main-title'}>
                    {data.title}
                </div>
                <Carousel itemsToShow={1} pagination={false} showArrows={false}>
                <div >
                <Card  className={'MuiCard-root'}>
                    <CardMedia
                    >
                        <img src={data.img} alt="picture" className={'img-main'}/></CardMedia>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p" >
                            <div className={'main-text'}>
                            {data.text}
                            </div>
                        </Typography>
                    </CardContent>
                </Card>

                </div>
                    <div className={'cardAnnWrapper'}>
                        <Card  className={'MuiCard-root'}>
                            <CardMedia
                            >
                                <img src={data.annImg} alt="picture" className={'img-main'}/></CardMedia>
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p" >
                                    <div className={'main-text'}>
                                        {data.annData}
                                    </div>
                                </Typography>
                            </CardContent>
                        </Card>

                    </div>
                </Carousel>

                {/*<div className={'displayflx'}>
                    <div className={'main-img'}>
                        <img src={data.img} alt="picture" className={'img-main'}/>
                    </div>
                    <div className={'main-text'}>

                    </div>
                </div>*/}
            </div>
        );
    }
}

export default Main;