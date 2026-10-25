export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        const el = document.createElement(tag);
        el.textContent = content;
        document.body.appendChild(el);
    }
}

export function generateTree(childrenCount, level) {
    function createNode(currentLevel) {
        const div = document.createElement('div');
        div.className = `item_${currentLevel}`;
        if (currentLevel < level) {
            for (let i = 0; i < childrenCount; i++) {
                div.appendChild(createNode(currentLevel + 1));
            }
        }
        return div;
    }
    return createNode(1);
}

export function replaceNodes() {
    const tree = generateTree(2, 3);
    const nodesToReplace = tree.querySelectorAll('.item_2');
    nodesToReplace.forEach(node => {
        const section = document.createElement('section');
        section.className = node.className;
        section.innerHTML = node.innerHTML;
        node.replaceWith(section);
    });
    return tree;
}
