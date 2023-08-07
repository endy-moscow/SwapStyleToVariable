// // Обернуть в асинхронную функцию для поддержки await
// (async () => {
//   try {
//     // Загрузка шрифта для текстового слоя
//     await figma.loadFontAsync({ family: "Arial", style: "Regular" });

//     // Получение списка всех локальных переменных
//     const localVariables = figma.variables.getLocalVariables();

//     // Создание строки, содержащей имена всех переменных, разделенных новой строкой
//     const names = localVariables.map(variable => variable.name).join('\n');

//     // Создание текстового слоя с именами переменных
//     const textNode = figma.createText();
//     textNode.fontName = { family: "Arial", style: "Regular" };
//     textNode.characters = names;

//     // Добавление текстового слоя на страницу
//     figma.currentPage.appendChild(textNode);
    
//     figma.closePlugin(`✅ Success!`);
//   } catch (error) {
//     figma.closePlugin(`❌ Error: ${error.message}`);
//   }
// })();