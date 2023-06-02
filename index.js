/** @jsx h */

function h(nodeName, attributes, ...args) {
    let children = args.length ? [].concat(...args) : null;
    return { nodeName, attributes, children };
}

function render(virtualNode) {
    if (virtualNode.split) {
        return document.createTextNode(virtualNode);
    }

    let node = document.createElement(virtualNode.nodeName);

    let attribute = virtualNode.attributes || {};
    Object.keys(attribute).forEach((key) => {
        node.setAttribute(key, attribute[key]);
    });
}
