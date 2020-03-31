'use strict';

var React = require('react');
var SVGCollection = require('../ReactComponents/SVGCollection');
var color = require('../../js/color.js');

var GeneHeader = React.createClass({
    
    propTypes: {
        gene: React.PropTypes.object,
        loading: React.PropTypes.bool
    },
    
    render: function() {

        if (this.props.loading === true) {
            return (
                <div className='gn-gene-description-outer' style={{backgroundColor: color.colors.gnwhite, padding: '20px'}}>
                    <div className='gn-gene-description-inner hflex flexcenter maxwidth'>
                        <div className='gn-gene-description-name'>
                            <span style={{fontWeight: 'bold', fontFamily: 'GG', fontSize: '1.5em', paddingRight: '10px'}}>
                            Loading
                            </span>
                        </div>
                    </div>
                </div>
            )
        }
        
        if (this.props.notFound) {
            return (
                <div className='gn-gene-description-outer' style={{backgroundColor: color.colors.gnwhite, padding: '20px'}}>
                    <div className='gn-gene-description-inner hflex flexcenter maxwidth'>
                        <div className='gn-gene-description-name'>
                            <span style={{fontWeight: 'bold', fontFamily: 'GG', fontSize: '1.5em', paddingRight: '10px'}}>
                            {this.props.notFound} not found
                            </span>
                        </div>
                    </div>
                </div>
            )
        }
        
        var description = (this.props.gene.description || 'no description').replace(/\[[^\]]+]/g, '');
        return (
                <div className='gn-gene-description-outer' style={{backgroundColor: color.colors.gnwhite, padding: '20px'}}>
                    <div className='gn-gene-description-inner hflex flexcenter maxwidth'>
                        <div className='gn-gene-description-name' style={{display: 'flex'}}>
                            <span style={{fontWeight: 'bold', fontFamily: 'GG', fontSize: '1.5em', paddingRight: '10px'}}>{this.props.gene.name + ' '}</span>
                            <div style={{ flexGrow: 1 }}>
                                <!-- below commented out because this was calculated on blood, needs to be redone in brain -->
                                <!-- <span>{description}</span><br/> -->
                                <!-- <span style={{ marginRight: '5px'}}>Gene predictability score: {Math.round(this.props.gene.genePredScore * 100) / 100}</span> -->
                                <!-- <SVGCollection.I title="Please see the FAQ for more information." style={{ marginLeft: '5px'}}/> -->
                            </div>
                        </div>
                        <div className='flex11' />
                            <div className='gn-gene-description-chr' style={{textAlign: 'right'}}>
                                <span>chromosome {this.props.gene.chr}</span>
                                <SVGCollection.Chromosome
                                    chr={this.props.gene.chr}
                                    start={this.props.gene.start}
                                    stop={this.props.gene.stop}
                                    position={(this.props.gene.stop + this.props.gene.start) / 2}   />
                                <div>{this.props.gene.biotype.replace(/_/g, ' ')}
                                </div>
                            </div>
                    </div>
                </div>
        )
    }
});

module.exports = GeneHeader;
