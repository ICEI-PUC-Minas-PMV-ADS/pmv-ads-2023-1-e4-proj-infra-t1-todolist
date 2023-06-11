import axios from "axios";

const baseURL = 'https://6e2b-2804-1194-50e-6100-1ed-e16d-4517-59a8.sa.ngrok.io/v1/todos'

async function getAll(token) {
    const options = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return new Promise((resolve, reject) => {
        axios.get(baseURL, options)
            .then((response) => {
                const dados = response.data
                resolve(response.data)
            })
            .catch((error) => {
                console.log(error)
                reject(error)
            })
    })
}
async function getTasksDone(token) {
    const url = `${baseURL}/done`
    const options = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return new Promise((resolve, reject) => {
        axios.get(url, options)
            .then((response) => {
                const dados = response.data
                resolve(response.data)
            })
            .catch((error) => {
                console.log(error)
                reject(error)
            })
    })
}
async function getTasksUndone(token) {
    const url = `${baseURL}/undone`
    const options = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return new Promise((resolve, reject) => {
        axios.get(url, options)
            .then((response) => {
                const dados = response.data
                resolve(response.data)
            })
            .catch((error) => {
                console.log(error)
                reject(error)
            })
    })
}
async function addTask(token, objectTarefa) {
    try {
        const url = `${baseURL}/create`
        const options = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        const data = JSON.stringify(objectTarefa);
        return new Promise((resolve, reject) => {
            axios.post(url, data, options)
                .then((response) => {
                    resolve();
                })
                .catch((error) => {
                    console.log(error);
                    reject();
                })
        })


    } catch (error) {
        console.log(error)
    }

}
async function editTask(token, objectTarefa) {
    try {
        const url = `${baseURL}/Update`
        const options = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        const data = JSON.stringify(objectTarefa);
        return new Promise((resolve, reject) => {
            axios.put(url, data, options)
                .then((response) => {
                    resolve();
                })
                .catch((error) => {
                    console.log(error);
                    reject();
                })
        })


    } catch (error) {
        console.log(error)
    }
}
async function deleteTask(token, user, id) {
    try {
        const url = `${baseURL}/Delete`;
        const options = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            data: {
                'id': id,
                'user': user
            }
        }

        return new Promise((resolve, reject) => {
            axios.delete(url, options)
                .then((response) => {
                    resolve();
                })
                .catch((error) => {
                    console.log(error)
                    reject(error);
                })
        })
    } catch (error) {
        console.log(error)
    }
}
async function markAsDone(token, user, id) {
    try {
        const url = `${baseURL}/MarkAsDone`;
        const options = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        const data = JSON.stringify({
            'id': id,
            'user': user
        });
        return new Promise((resolve, reject) => {
            axios.put(url, data, options)
                .then((response) => {
                    resolve();
                })
                .catch((error) => {
                    console.log(error)
                    reject(error);
                })
        })
    } catch (error) {
        console.log(error)
    }
}
async function markAsUndone(token, user, id) {
    try {
        const url = `${baseURL}/MarkAsUnDone`;
        const options = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        const data = JSON.stringify({
            'id': id,
            'user': user
        });
        return new Promise((resolve, reject) => {
            axios.put(url, data, options)
                .then((response) => {
                    resolve();
                })
                .catch((error) => {
                    console.log(error)
                    reject(error);
                })
        })
    } catch (error) {
        console.log(error)
    }
}


export { getAll, getTasksDone, getTasksUndone, addTask, deleteTask, editTask, markAsDone, markAsUndone }