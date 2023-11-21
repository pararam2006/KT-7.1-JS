let users = [
    {id: 1, name: 'Alex', lastname: 'Wilyam', age: 20},
    {id: 2, name: 'Steven', lastname: 'King', age: 34} 
]
console.log('Начальный массив:')
for(let i = 0; i < users.length; i++) {
    console.log(`id: ${users[i].id}, name: ${users[i].name}, lastname: ${users[i].lastname}, age: ${users[i].age}`);
}
function addUser() {
    let question = prompt('Введите данные пользователя в формате "name, lastname, age":', 'John, Black, 22')
    let array = question.split(', ');
    let newUser = {
        id: users[users.length - 1].id + 1, name: array[0], lastname: array[1], age: array[2]
    }
    users.push(newUser);
    console.log(`Добавлен пользователь с id = ${users[users.length - 1].id}`)
    for(let i = 0; i < users.length; i++) {
        console.log(`id: ${users[i].id}, name: ${users[i].name}, lastname: ${users[i].lastname}, age: ${users[i].age}`);
    }
}

function updateUser() {
    while(true) {
        let start = prompt('Редактировать данные? (Y/N)')
        if(start == 'y' || start == 'Y') {
            let question = +prompt('Данные какого пользователя вы хотели бы изменить? (id)');
            let nextQuestion = prompt('Какие именно данные вы хотите изменить? (name, lastname, age)')
            if(nextQuestion == 'name') {
                let nameQuestion = prompt(`Введите новое значение для name пользователя с id = ${question}`, 'Soul')
                    users[question - 1].name = nameQuestion;
                    console.log(`Изменено name пользователя с id = ${question}`)
                    for(let i = 0; i < users.length; i++) {
                        console.log(`id: ${users[i].id}, name: ${users[i].name}, lastname: ${users[i].lastname}, age: ${users[i].age}`);
                    }
            } else if(nextQuestion == 'lastname') {
                let lastnameQuestion = prompt(`Введите новое значение для lastname пользователя с id = ${question}`, 'Bright')
                    users[question - 1].lastname = lastnameQuestion;
                    console.log(`Изменено lastname пользователя с id = ${question}`)
                    for(let i = 0; i < users.length; i++) {
                        console.log(`id: ${users[i].id}, name: ${users[i].name}, lastname: ${users[i].lastname}, age: ${users[i].age}`);
                    }
            } else if (nextQuestion == 'age') {
                let ageQuestion = prompt(`Введите новое значение для age пользователя с id = ${question}`, '30')
                users[question - 1].age = ageQuestion;
                console.log(`Изменен age пользователя с id = ${question}`)
                for(let i = 0; i < users.length; i++) {
                    console.log(`id: ${users[i].id}, name: ${users[i].name}, lastname: ${users[i].lastname}, age: ${users[i].age}`);
                }
            }
        } else if(start == 'n' || start == 'N') {
            break;
        }
    }
    // let question = +prompt('Данные какого пользователя вы хотели бы изменить? (id)');
    // let nextQuestion = prompt('Какие именно данные вы хотите изменить? (name, lastname, age)')

    // switch (nextQuestion) {
    //     case 'name': {
    //         let nameQuestion = prompt(`Введите новое значение для name пользователя с id = ${question}`, 'Soul')
    //         users[question - 1].name = nameQuestion;
    //         console.log(`Изменено name пользователя с id = ${question}`)
    //         for(let i = 0; i < users.length; i++) {
    //             console.log(`id: ${users[i].id}, name: ${users[i].name}, lastname: ${users[i].lastname}, age: ${users[i].age}`);
    //         }
    //     }
    //     case 'lastname': {
    //         let lastnameQuestion = prompt(`Введите новое значение для lastname пользователя с id = ${question}`, 'Bright')
    //         users[question - 1].lastname = lastnameQuestion;
    //         console.log(`Изменено lastname пользователя с id = ${question}`)
    //         for(let i = 0; i < users.length; i++) {
    //             console.log(`id: ${users[i].id}, name: ${users[i].name}, lastname: ${users[i].lastname}, age: ${users[i].age}`);
    //         }
    //     }
    //     case 'age': {
    //         let ageQuestion = prompt(`Введите новое значение для age пользователя с id = ${question}`, '30')
    //         users[question - 1].age = ageQuestion;
    //         console.log(`Изменен age пользователя с id = ${question}`)
    //         for(let i = 0; i < users.length; i++) {
    //             console.log(`id: ${users[i].id}, name: ${users[i].name}, lastname: ${users[i].lastname}, age: ${users[i].age}`);
    //         }
    //     }
    // }

    // if(nextQuestion == 'name') {
    //     let nameQuestion = prompt(`Введите новое значение для name пользователя с id = ${question}`, 'Soul')
    //         users[question - 1].name = nameQuestion;
    //         console.log(`Изменено name пользователя с id = ${question}`)
    //         for(let i = 0; i < users.length; i++) {
    //             console.log(`id: ${users[i].id}, name: ${users[i].name}, lastname: ${users[i].lastname}, age: ${users[i].age}`);
    //         }
    // } else if(nextQuestion == 'lastname') {
    //     let lastnameQuestion = prompt(`Введите новое значение для lastname пользователя с id = ${question}`, 'Bright')
    //         users[question - 1].lastname = lastnameQuestion;
    //         console.log(`Изменено lastname пользователя с id = ${question}`)
    //         for(let i = 0; i < users.length; i++) {
    //             console.log(`id: ${users[i].id}, name: ${users[i].name}, lastname: ${users[i].lastname}, age: ${users[i].age}`);
    //         }
    // } else if (nextQuestion == 'age') {
    //     let ageQuestion = prompt(`Введите новое значение для age пользователя с id = ${question}`, '30')
    //     users[question - 1].age = ageQuestion;
    //     console.log(`Изменен age пользователя с id = ${question}`)
    //     for(let i = 0; i < users.length; i++) {
    //         console.log(`id: ${users[i].id}, name: ${users[i].name}, lastname: ${users[i].lastname}, age: ${users[i].age}`);
    //     }
    // }
}

function deleteUser() {
    let question = +prompt('Какого пользователя вы хотели бы удалить? (id)');
    users.splice(question - 1, 1);
    let i = 1;
    for(let user of users) {
        user.id = i;
        i++
    }
    console.log(`Удален пользователь с id = ${question}`)
    for(let i = 0; i < users.length; i++) {
        console.log(`id: ${users[i].id}, name: ${users[i].name}, lastname: ${users[i].lastname}, age: ${users[i].age}`);
    }
}

while(true) {
        let question = prompt('Что вы хотите сделать? (addUser, updateUser, deleteUser)','');
    if(question == 'addUser' || question == 'add user') {
        addUser();
    } else if(question == 'deleteUser' || question == 'delete user') {
        deleteUser();
    } else if (question == 'updateUser' || question == 'update user') {
        updateUser();
    } else {
        break;
    }
}

