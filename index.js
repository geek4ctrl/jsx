/** @jsx h */

function h(nodeName, attributes, ...args) {
    let children = args.length ? [].concat(...args) : null;
    return { nodeName, attributes, children };
}

function render(virtualNode) {
    if (virtualNode.split) {
        return document.createTextNode(virtualNode);
    }
}