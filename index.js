/** @jsx h */

const elements = "Good day my people".split(" ");

function displayArrayOf(elements) {
    return elements.map(text => <li>{text}</li>)
}

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

    (virtualNode.children || []).forEach((child) => {
        child.appendChild(render(c))
    });

    return node;
}

let virtualDocumentObjectModel = "<div id='foo'>Hello!</div>";

let documentObjectModel = render(virtualDocumentObjectModel);

document.body.appendChild(documentObjectModel);