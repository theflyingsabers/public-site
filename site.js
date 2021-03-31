function csvToTable(tableSelector, csvPath) {
  const thead = jQuery(tableSelector + " > thead")[0];
  const tbody = jQuery(tableSelector + " > tbody")[0];
  jQuery.get({
    url: csvPath,
    success: function (response) {
      const data = jQuery.csv.toArrays(response);
      for (let rowIndex = 0; rowIndex < data.length; rowIndex++) {
        const cellArray = data[rowIndex];
        const tableRow = document.createElement("tr");

        for (let colIndex = 0; colIndex < cellArray.length; colIndex++) {
          const tableCell = document.createElement(
            rowIndex === 0 ? "th" : "td"
          );
          tableCell.textContent = cellArray[colIndex];
          tableRow.appendChild(tableCell);
        }

        if (rowIndex === 0) thead.appendChild(tableRow);
        else tbody.appendChild(tableRow);
      }
    },
  });
}
