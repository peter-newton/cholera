import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from '../assets/data';
import data2 from '../assets/data2';
import data3 from '../assets/data3';
import Markers from './VenueMarkers';
import Markers2 from './VenueMarkers2';
import Markers3 from './VenueMarkers3';
import Markers4 from './VenueMarkers4';
import { Segment, Image, Header, Grid} from 'semantic-ui-react'
import '../style.css';
import legend2 from '../assets/legend 3.jpg';

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: { lat: 51.51330, lng: -0.13622 },
      zoom: 17,
    }
  }

  render() {
    const { currentLocation, zoom } = this.state;

    return (
        <Grid columns={3} divided>
          <div className="wrapper">
            <Grid.Row>
            <div className="fixed-bg bg-2">
              <h1> </h1>
            </div>
            </Grid.Row>

            <div className="scroll-bg">
              <br/>
              <Header as='h1' textAlign='right'>
                Cholera Outbreak In Naples, 1851
              </Header>
              <br/>
              <Grid.Row>
              <Grid.Column>
                <div className="graph-indent">
                              <iframe title="Naples Age & Sex Bar" width="1300" height="500" frameBorder="0" scrolling="no"
                      src="//plotly.com/~pnewton/8.embed">Naples Age/Sex Bar</iframe>
                </div>
              </Grid.Column>

<Grid.Column>
  <div className="table-indent">
              <iframe title="Age & Sex Table" width="600" height="400" frameBorder="0" scrolling="no"
                      src="//plotly.com/~pnewton/7.embed">Naples Data Table
              </iframe>
  </div>
</Grid.Column>
              </Grid.Row>
            </div>


            <Grid.Row>
            <div className="fixed-bg bg-1">
              <h1> </h1>
            </div>
            </Grid.Row>

            <Grid.Row>
            <div className="scroll-bg">
              <br/>
              <Header as='h1' textAlign='right'>
                Cholera Outbreak In The United Kingdom, 1851
              </Header>
              <br/>
              <div className="graph-indent">
              <Grid.Column>
              <iframe title="Male Fatalities/Bar" width="1300" height="500" frameBorder="0" scrolling="no"
                      src="//plotly.com/~pnewton/13.embed"> </iframe>
              </Grid.Column>
              <br/>
              <Grid.Column>
              <iframe title="Female Fatalities" width="1300" height="500" frameBorder="0" scrolling="no"
                      src="//plotly.com/~pnewton/14.embed"> </iframe>
              </Grid.Column>
              </div>
              <br/>
              <br/>
              <br/>
            </div>
            </Grid.Row>


            <div className="fixed-bg bg-3">
              <h1> </h1>
            </div>

            <div className="scroll-bg">
              <br/>
              <Header as='h1' textAlign='right'>
                Age / Sex Cholera Data In The United Kingdom
              </Header>
              <br/>
              <div className="pie-indent">
              <iframe title="Male Fatalities/Pie" width="600" height="500" frameBorder="0" scrolling="no"
                      src="//plotly.com/~pnewton/18.embed"> </iframe>
              </div>
              <iframe title="Female Fatalities Pie" width="600" height="500" frameBorder="0" scrolling="no"
                      src="//plotly.com/~pnewton/12.embed"> </iframe>
<br/>
              <br/>
              <div className="table-indent">
              <iframe title="Men/Female Table" width="600" height="350" frameBorder="0" scrolling="no"
                      src="//plotly.com/~pnewton/9.embed"> </iframe>
              </div>
              <div className="pie-indent2">
              <iframe title="Men vs. Women" width="800" height="500" frameBorder="0" scrolling="no"
                      src="//plotly.com/~pnewton/22.embed"> </iframe>
              </div>
              <br/>
              <br/>
              <br/>
            </div>
            <div className="fixed-bg bg-4">
              <h1> </h1>
            </div>

            <div className="scroll-bg">
              <br/>
              <Header as='h1' textAlign='right'>
                London from August to September, 1854
              </Header>
              <br/>
              <div className="graph-indent">
              <iframe title="Attacks and Deaths Line" width="1300" height="500" frameBorder="0" scrolling="no"
                      src="//plotly.com/~pnewton/6.embed"> </iframe>
              </div>
<br/>
<br/>
              <br/>
              <br/>
                <div className="legend-indent">
                <Image src={legend2} size='large' floated='right'/>
                </div>
              <div className="graph-indent">
              <Map center={currentLocation} zoom={zoom}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Markers venues={data.venues}/>
                <Markers2 venues={data2.pumps}/>
                <Markers3 venues={data3.deaths}/>
                <Markers4 venues={data3.super}/>
              </Map>

              <Segment>London Map of Cholera Outbreak.</Segment>
              </div>
              <br/>
              <br/>
              <Header as='h5' block>
                Project created by: Peter Newton
                <br/>Information gathered from Robin Wilson (robin@rtwilson.com, www.rtwilson.com/academic) - Jan 2011.
                <br/>Page composition: Plotly, React.js, Leaflet.
              </Header>
            </div>
          </div>
        </Grid>
    );
  }
}

export default MapView;
