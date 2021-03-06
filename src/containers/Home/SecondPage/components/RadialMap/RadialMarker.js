/*
 * @Author: konglingyuan
 * @Description: A Vue/React Project File
 * @Date: 2020-02-14 19:46:12
 * @LastEditors: konglingyuan
 * @LastEditTime: 2020-03-20 14:04:53
 */

import React, { Component } from 'react'
const BlankColor = 'rgb(229, 229, 227)'//'#159BC9'//
const TextColor = 'rgb(229, 229, 227)'
const TextSize = 9
// const StrokeColor = 'rgb(174, 174, 174)'
const StrokeWidth = 1
// Combine array of colors and quantize scale to pick fill color
// Return a <path> element
class RadialMarker extends Component {

    render() {
        const { arc, feature,feature2, outerRadius } = this.props;
        const markerArc = arc
            .startAngle(Math.PI*3/4)
            .endAngle(Math.PI/2)
        
        let color = BlankColor
        let lineWindth = StrokeWidth
        return (
            <g>
                <path className="axispath"
                    d={markerArc(feature)} 
                    id={"axispath"}
                    style={{fill: "none",stroke: color}} 
                    strokeWidth={lineWindth} 
                    title={feature.label1} />
                    
                <line x1="0" y1="0" x2={outerRadius/5*3} y2="0"
                    strokeDasharray="4" 
                    style={{fill: "none",stroke: color}} 
                    strokeWidth={lineWindth} />
                    
                <path d={`M${outerRadius/5*2} 0 L${outerRadius} 0 Z`}
                    // strokeDasharray="4" 
                    id={"axispath-value"}
                    style={{fill: "none",stroke: color}} 
                    strokeWidth={lineWindth} />
                <g>
                    <text className="axislabel"
                        dy={-5}
                        dx={0}
                        style={{fill:TextColor}}
                        textAnchor="middle"
                        fontSize={TextSize}
                    >
                        <textPath 
                            xlinkHref={"#axispath-value"}
                            startOffset="5%"
                        >
                            {feature2.near}
                        </textPath>
                    </text>
                    <text className="axislabel"
                        dy={-5}
                        dx={0}
                        style={{fill:TextColor}}
                        fontSize={TextSize}
                        textAnchor="middle"
                    >
                        <textPath 
                            xlinkHref={"#axispath-value"}
                            startOffset="45%"
                        >
                            {feature2.far}
                        </textPath>
                    </text>
                    <text className="axislabel"
                        dy={-5}
                        dx={0}
                        style={{fill:TextColor}}
                        fontSize={TextSize}
                        textAnchor="middle"
                        letterSpacing="2"
                    >
                        <textPath 
                            xlinkHref={"#axispath-value"}
                            startOffset="25%"
                        >
                            {feature2.distance}
                        </textPath>
                    </text>
                </g>
                <text className="axislabel"
                    dy={-5}
                    dx={0}
                    style={{fill:TextColor}}
                    textAnchor="middle"
                    fontSize={TextSize}
                 >
                    <textPath 
                        xlinkHref={"#axispath"}
                        startOffset="45%"
                    >
                        {feature.near}
                    </textPath>
                </text>
                <text className="axislabel"
                    dy={-5}
                    dx={0}
                    style={{fill:TextColor}}
                    fontSize={TextSize}
                    textAnchor="middle"
                 >
                    <textPath 
                        xlinkHref={"#axispath"}
                        startOffset="4%"
                    >
                        {feature.far}
                    </textPath>
                </text>
                <text className="axislabel"
                    dy={-5}
                    dx={0}
                    style={{fill:TextColor}}
                    fontSize={TextSize}
                    textAnchor="middle"
                    letterSpacing="2"
                 >
                    <textPath 
                        xlinkHref={"#axispath"}
                        startOffset="25%"
                    >
                        {feature.distance}
                    </textPath>
                </text>
            </g>
        );
    }
}

export default RadialMarker
