elementBuilder = (positionObject) => $(`.galo-item[data-line=${positionObject.line}][data-column=${positionObject.column}]`);

lineElements = (line) => $(`.galo-item[data-line=${line}]`);

columnElements = (column) => $(`.galo-item[data-column=${column}]`);
