function dotProduct(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }
    return ps;
}

// Orthogonal

function isOrthogonal(v1, v2) {
    let dot = dotProduct(v1, v2);
    return dot === 0;
}
