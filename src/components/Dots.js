import React, { useRef, useEffect } from 'react';
import Delaunator from 'delaunator';
import { WeightedGraph, Edge, KruskalMST } from 'js-graph-algorithms';

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

const Dots = () => {
    const canvasRef = useRef(null);
    let canvas, ctx;
    useEffect(() => {
        canvas = canvasRef.current;
        ctx = canvas.getContext('2d');
        const { width, height } = canvas.getBoundingClientRect();
        ctx.clearRect(0, 0, width, height);
        const points = [];
        const NUM_POINTS = 500;
        for (let i = 0; i < NUM_POINTS; i++) {
            const point = pointInDonut(
                { x: width / 2, y: height / 2 },
                125,
                200,
            );
            drawCircle(ctx, point);
            points.push(point);
        }
        console.log(points);
        const delaunay = Delaunator.from(points);
        console.log(delaunay.triangles);
        const triangles = delaunay.triangles;
        const edgeSet = [];
        const p = 0;
        for (let i = 0; i < triangles.length; i += 3) {
            for (let j = 0; j < 3; j++) {
                const l = i;
                const r = i + (j % 3);
                if (!edgeSetContains(edgeSet, [triangles[l], triangles[r]])) {
                    if (
                        distance(points[triangles[l]], points[triangles[r]]) <
                        50
                    ) {
                        maybe(
                            () =>
                                drawLine(
                                    ctx,
                                    points[triangles[l]],
                                    points[triangles[r]],
                                ),
                            p,
                        );
                    }
                    edgeSet.push([triangles[l], triangles[r]]);
                }
            }
        }

        console.log(edgeSet);
        const mst = getMST(points, edgeSet);
        for (let i = 0; i < mst.length; i++) {
            const e = mst[i];
            // if (!edgeSetContains(edgeSet, [e.from(), e.to()]))
            drawLine(ctx, points[e.from()], points[e.to()]);
        }
    }, [canvasRef.current]);
    // ctx.fillStyle = 'blue';
    // ctx.fillRect(0, 0, canvas.width, canvas.height);

    return (
        <canvas
            id="dots"
            ref={canvasRef}
            width={400}
            height={400}
            onClick={(e) => {
                const rect = canvas.getBoundingClientRect();
                drawCircle(ctx, [e.clientX - rect.x, e.clientY - rect.y]);
            }}
        />
    );
};

export default Dots;
