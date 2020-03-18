var valueHeight = 1;
var valueWidth = 1;
var color = 'red';

update();


$('#calculator-height').on('slide', function (val) {
    valueHeight = val.value/16;
    update();
});
$('#height-arrow-right').on('click', function () {
    $('#calculator-height').slider('setValue', this.value + 1);
    update();
});

$('#calculator-width').on('slide', function (val) {
    valueWidth = val.value / 32;
    update();
});

function update() {
    generateTable();
    generateTextSize();
}


function generateTable() {
    var numberOfRows = valueHeight;
    var numberOfCols = valueWidth;
    var tableBody = '<table id="calc-table">';
    for (var i = 0; i < numberOfRows; i++) {
        tableBody += '<tr>';
        for (var j = 0; j < numberOfCols; j++) {
            tableBody += '<td>';
            tableBody += "<div class=\"div_mod " + color + "\"></div>";
            tableBody += '</td>';
        }
        tableBody += '</tr>';
    }
    tableBody += '</table>';
    $('.ttable').html(tableBody);
}

function generateTextSize() {
    $('.finish-size').html(valueHeight * 16 + "см x " + valueWidth * 32 + "см (" + valueHeight + "x" + valueWidth + ")");
}


