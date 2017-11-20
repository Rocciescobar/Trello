window.addEventListener('load', function() {  
  var addList = document.getElementById('id-add-list');
  var listContainer = document.getElementById('id-container-list');

  // Creando formulario: "Añadir una lista"
  addList.addEventListener('click', function() {
    var listBox = document.createElement('form');
    var inputOfList = document.createElement('input');
    var saveButton = document.createElement('button');

    saveButton.textContent = 'Guardar';

    inputOfList.setAttribute('type', 'text');
    inputOfList.setAttribute('placeholder', 'Añadir una lista...');

    listBox.classList.add('style-listBox');
    inputOfList.classList.add('input-features');
    saveButton.classList.add('style-saveButton');

    listBox.appendChild(inputOfList); 
    listBox.appendChild(saveButton);
    listContainer.appendChild(listBox);

    addList.style.display = 'none';
    listContainer.style.display = 'block';
    
    // Creando nuevo cuadro
    saveButton.addEventListener('click', function() {      
      var newBox = document.createElement('div');
      var listName = document.createElement('p');
      var addTask = document.createElement('p');

      listName.textContent = inputOfList.value;
      addTask.textContent = 'Añadir una tarea...';

      newBox.classList.add('div-features');
      listName.classList.add('p-firstchild');
      addTask.classList.add('p-secondchild');

      newBox.appendChild(listName);
      newBox.appendChild(addTask);
      listContainer.appendChild(newBox);

      listBox.style.display = 'none';
      newBox.style.display = 'block';     

      // Creando formulario: "Añadir una tarea"
      addTask.addEventListener('click', function() {
        var taskBox = document.createElement('form');
        var taskArea = document.createElement('textarea');
        var addButton = document.createElement('button');

        addButton.textContent = 'Añadir';

        taskBox.classList.add('style-taskBox');
        taskArea.classList.add('textarea-features');
        addButton.classList.add('style-addButton');

        taskBox.appendChild(taskArea);
        taskBox.appendChild(addButton);
        newBox.appendChild(taskBox);

        addTask.style.display = 'none';
        taskBox.style.display = 'block';

        // Creando la tarjeta de una tarea
        addButton.addEventListener('click', function() {
          var taskBoard = document.createElement('p');
          taskBoard.textContent = taskArea.value;          
          taskBoard.classList.add('style-taskBoard');
          newBox.insertBefore(taskBoard, taskBox);    
          taskArea.value = '';                
        });
      });
    });
  });
});