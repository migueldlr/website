import React, { useRef, useState, useEffect } from 'react';
import Delaunator from 'delaunator';
import { WeightedGraph, Edge, KruskalMST } from 'js-graph-algorithms';
import * as d3 from 'd3';
import { Box, useTheme } from '@chakra-ui/core';

function pointInDonut(center, inRadius, outRadius) {
    const r = Math.random() * (outRadius - inRadius) + inRadius;
    const theta = Math.random() * Math.PI * 2;
    return [center.x + r * Math.cos(theta), center.y + r * Math.sin(theta)];
}

function distance(p1, p2) {
    return Math.hypot(p2[0] - p1[0], p2[1] - p1[1]);
}

function pointsEqual(a, b) {
    return a[0] === b[0] && a[1] === b[1];
}

function edgeSetContains(s, e) {
    for (let i = 0; i < s.length; i++) {
        const o = s[i];
        if (
            (o[0] === e[0] && o[1] === e[1]) ||
            (o[0] === e[1] && o[1] === e[0])
        ) {
            return true;
        }
    }
    return false;
}

function drawCircle(ctx, location) {
    const [x, y] = location;
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, 2 * Math.PI, true);

    ctx.fill();
}

function drawLine(ctx, from, to) {
    ctx.beginPath();
    ctx.moveTo(from[0], from[1]);
    ctx.lineTo(to[0], to[1]);
    ctx.stroke();
}

function getMST(points, edges) {
    const g = new WeightedGraph(points.length);
    for (let i = 0; i < edges.length; i++) {
        // console.log(edges[i][0]);
        g.addEdge(
            new Edge(
                edges[i][0],
                edges[i][1],
                distance(points[edges[i][0]], points[edges[i][1]]),
            ),
        );
    }
    console.log(g);

    const kruskal = new KruskalMST(g);
    console.log(kruskal);

    return kruskal.mst;
}

function maybe(e, p) {
    if (Math.random() < p) e();
}
function getPoints(n, inRadius, outRadius) {
    const points = [];
    for (let i = 0; i < n; i++) {
        const point = pointInDonut({ x: 0, y: 0 }, inRadius, outRadius);
        // drawCircle(ctx, point);
        points.push(point);
    }
    console.log(points);
    return points;
}

function getLines(points) {
    const delaunay = Delaunator.from(points);
    const triangles = delaunay.triangles;
    const edgeSet = [];
    const lines = [];
    for (let i = 0; i < triangles.length; i += 3) {
        for (let j = 0; j < 3; j++) {
            const l = i;
            const r = i + (j % 3);
            if (!edgeSetContains(edgeSet, [triangles[l], triangles[r]])) {
                // if (distance(points[triangles[l]], points[triangles[r]]) < 50) {
                //     maybe(
                //         () =>
                //             drawLine(
                //                 ctx,
                //                 points[triangles[l]],
                //                 points[triangles[r]],
                //             ),
                //         p,
                //     );
                // }
                edgeSet.push([triangles[l], triangles[r]]);
            }
        }
    }
    console.log(edgeSet);
    const mst = getMST(points, edgeSet);
    for (let i = 0; i < mst.length; i++) {
        const e = mst[i];
        // if (!edgeSetContains(edgeSet, [e.from(), e.to()]))
        // drawLine(ctx, points[e.from()], points[e.to()]);
        lines.push({ from: points[e.from()], to: points[e.to()] });
    }
    return lines;
}

function convertRemToPixels(rem) {
    return (
        rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
}

const Dots = () => {
    const theme = useTheme();
    const svgRef = useRef();
    const NUM_POINTS = 300;
    const [elem] = useState(
        (() => {
            const points = getPoints(NUM_POINTS, 132, 200);
            const lines = getLines(points);
            console.log(lines);
            return { points, lines };
        })(),
    );

    const size = convertRemToPixels(theme.sizes['sm'].replace('rem', ''));

    return (
        <svg
            id="dots"
            ref={svgRef}
            height={size}
            width={size}
            viewBox={`${-size / 2} ${-size / 2} ${size} ${size}`}
            overflow="visible">
            {elem.lines.map((line, i) => (
                <line
                    x1={line.from[0]}
                    y1={line.from[1]}
                    x2={line.to[0]}
                    y2={line.to[1]}
                    key={i}
                    style={{ stroke: theme.colors.green[200], strokeWidth: 1 }}
                />
            ))}
            {elem.points.map(([x, y], i) => (
                <circle
                    cx={x}
                    cy={y}
                    r={1}
                    fill={theme.colors.green[900]}
                    key={i}
                />
            ))}
        </svg>
    );
};

export default Dots;
