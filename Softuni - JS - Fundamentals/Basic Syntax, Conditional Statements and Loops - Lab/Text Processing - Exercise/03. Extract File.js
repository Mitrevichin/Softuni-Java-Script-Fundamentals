function extractFile(filePath) {
    let fileNameIndexStart = filePath.lastIndexOf('\\') + 1;
    let fileExtentionStart = filePath.lastIndexOf('.') + 1;
    let fileNameIndexEnd = fileExtentionStart - 1;

    let fileName = filePath.substring(fileNameIndexStart, fileNameIndexEnd);
    let fileExtension = filePath.substring(fileNameIndexEnd + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');