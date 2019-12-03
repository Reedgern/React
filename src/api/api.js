export async function addTask(projectId, name, description,priority) {
    const task = {projectId, name, description, priority};
    const response = await fetch('http://valerystatinov.me/tasks/', {
        method: 'POST',
        body: JSON.stringify(task)
    });
    if (response.status === 200) {
        return null;
    }
    return response.json();
}

export async function addProject(name) {
    const project = {name};
    const response = await fetch('http://valerystatinov.me/projects/', {
        method: 'POST',
        body: JSON.stringify(project)
    });
    if (response.status === 200) {
        return null;
    }
    return response.json();
}

export async function getProjects() {
    const response = await fetch('http://valerystatinov.me/projects/', {
        method: 'GET'
    });
    return response.json();
}

export async function getTasks(projectId) {
    const response = await fetch('http://valerystatinov.me/tasks/?projectId=' + projectId, {
        method: 'GET'
    });
    return response.json();
}