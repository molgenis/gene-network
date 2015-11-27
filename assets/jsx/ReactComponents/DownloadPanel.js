var React = require('react')

var DownloadPanel = React.createClass({

    propTypes: {
        onClick: React.PropTypes.func.isRequired
    },
    
    render: function() {
        return (
                <div id='downloadpanel' className='downloadpanel clickable button noselect' onClick={this.props.onClick}>
                <div style={{position: 'absolute', top: '0px', left: '0px', height: '100%', padding: '0 8px 0 8px', backgroundColor: 'rgb(255,225,0)'}}>
                <svg viewBox='0 0 100 100' width='20' height='20' className='arrow'>
                <polyline points='10,50 50,100 90,50' />
                <line x1='50' y1='0' x2='50' y2='100' />
                </svg>
                </div>
                <span style={{paddingLeft: '35px'}}>DOWNLOAD VISUALISATION AS PDF</span>
                </div>
        )
    }

})

module.exports = DownloadPanel