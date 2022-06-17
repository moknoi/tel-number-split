const LocalTelRepository = require('./LocalTelRepository');
const TelSplit = require('./TelSplit');

let repo = new LocalTelRepository({}, 'https://moknoi.github.io/tel-number-split/csv/shigai_list.csv');
let telsplit = new TelSplit(repo);

const input = document.querySelector('#telNumberSplitInput');
const output = document.querySelector('#telNumberSplitOutput');
const button = document.querySelector('#telNumberSplitButton');

button.onclick = () => {
    let rows = input.value.split("\n").map(row => telsplit.convert(row));
    output.value = rows.join("\n");
};
