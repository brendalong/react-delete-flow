const dbRemote = "http://localhost:3000";

export default Object.create(null, {
    getAll: {
        value: function (dataTable) {
            return fetch(`${dbRemote}/${dataTable}`)
            .then(e => e.json())
        }
    },
    getOne: {
        value: function (whichOne) {
            return fetch(`${dbRemote}/employees?id=${whichOne}`)
            .then(e => e.json())
        }
    },
    deleteAnimal: {
        value: function (whichOne) {
            return fetch(`${dbRemote}/animals/${whichOne}`, 
            {
                method: "DELETE"
            }).then(e => e.json())
        }
    }
})