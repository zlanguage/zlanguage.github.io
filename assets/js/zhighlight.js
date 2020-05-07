import tokenize from "./tokenize.js"

function stringify(tok) {
    if (tok.comment) {
        return `<span style="color:#008000">${tok.comment}</span>`;
    }
    if (tok.id === "(string)") {
        return `<span style="color:#a31515">"${tok.string}"</span>`;
    }
    if (tok.id === "(number)") {
        return `<span style="color:#09885a">${tok.string}</span>`
    }
    if (tok.id === "(keyword)" || tok.id === "=>" || tok.id === "<-") {
        return `<span style="color:#0000ff">${tok.string ? tok.string : tok.id}</span>`
    }
    if (tok.alphanumeric) {
        if (tok.id.includes("!")) {
            return `<span style="color:#267f99">${tok.id}</span>`;
        }
        return `<span style="color:#261069">${tok.id}</span>`;
    }
    if (tok.string) {
        return tok.string;
    }
    return tok.id;
}

function len(tok) {
    if (tok.comment) {
        return tok.comment.length;
    }
    if (tok.string) {
        if (tok.id === "(string)") {
            return tok.string.length + 2;
        }
        return tok.string.length;
    }
    return tok.id.length;
}
/**
 * 
 * @param {string} code The Z to highlight
 */
function syntaxHighlight(code) {
    code = code.replace(/&gt;/g, ">").replace(/&lt;/g, "<");
    const tokGen = tokenize(code, true);
    const res = [];
    let addedLength = 0;
    for (let tok, prevTok = {};
        (tok = tokGen()) !== undefined;) {
        if (prevTok.lineNumber !== tok.lineNumber) {
            addedLength = 0;
        }
        if (typeof res[tok.lineNumber] !== "string") {
            res[tok.lineNumber] = "";
        }
        const old = res[tok.lineNumber];
        res[tok.lineNumber] = old.padEnd(tok.columnNumber + addedLength) + stringify(tok);
        addedLength += stringify(tok).length - len(tok);
        prevTok = tok;
    }
    return res.join("\n");
}

function main() {
    const zCodeBlocks = Array.from(document.querySelectorAll(`[lang="z"]`))
    zCodeBlocks.forEach(codeBlock => {
        const theZ = codeBlock.innerHTML;
        codeBlock.innerHTML = syntaxHighlight(theZ);
    })
}

export default main;