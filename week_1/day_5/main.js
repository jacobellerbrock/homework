class Task {
    constructor(task) {
        this.task = task;
    }
}

class UI {
    constructor() {
        this.tasks = [];
        this.input = document.querySelector('#input');
        this.table = document.querySelector('#table');
        document.getElementById('form').addEventListener('submit', (e) => this.onFormSubmit(e));
    }
    onFormSubmit(e) {
        e.preventDefault();
        if (!this.input.value.trim()) {
            console.log("Empty input");
            return;
        }

        const task = new Task(this.input.value);
        this.tasks.push(task);
        this.input.value = '';
        this.renderTable();
    }

    renderTable() {
        this.table.innerHTML = [];
        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];

            const tr = document.createElement('tr');
            const tdTask = document.createElement('td');
            const tdComplete = document.createElement('td');
            const tdActions = document.createElement('td');
            tdTask.innerHTML = task.task;
            const checkbox = document.createElement('input');
            checkbox.type="checkbox";
            tdComplete.appendChild(checkbox);
            const deleteButton = document.createElement('button');
            deleteButton.setAttribute('class', 'btn btn-small');
            deleteButton.innerHTML = "<img src=trash.svg\>"
            deleteButton.addEventListener('click', () => this.onDeleteButtonClicked(task));
            tdActions.appendChild(deleteButton);

            tr.appendChild(tdTask);
            tr.appendChild(tdComplete);
            tr.appendChild(tdActions);
            this.table.appendChild(tr);
        }
    }
    onDeleteButtonClicked(task) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
        this.renderTable();
    }
}

const ui = new UI();