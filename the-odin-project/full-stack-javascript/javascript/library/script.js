// const welcomeMsg = `Heyo! Welcome to Bookmark: Your Personal Library.
// You can add books that you want to read, are currently reading or have finished reading! 
// A few books have already been added. Feel free to delete these sample entries. Happy Reading ;)
// `
// alert(welcomeMsg);

const mainAddNew = document.querySelector("#main-add-button");
const dialogBoxAdd = document.querySelector("#dialog-box-add");
const TBR = document.querySelector("#to-be-read");
const CR = document.querySelector("#currently-reading");
const FR = document.querySelector("#finished-reading");

let idValue = 0;

const library = [
    {
        id: 1, 
        title: "Persuasion", 
        name: "Jane Austen", 
        status: "finished-reading"
    }, 
    {
        id: 2, 
        title: "Rebecca", 
        name: "Daphne du Maurier", 
        status: "to-be-read"
    }, 
    {
        id: 3, 
        title: "Atomic Habits", 
        name: "James Clear", 
        status: "currently-reading"
    }, 
    {
        id: 4, 
        title: "Letters to Milena", 
        name: "Franz Kafka", 
        status: "to-be-read"
    }, 
    {
        id: 5, 
        title: "Angels and Demons", 
        name: "Dan Brown", 
        status: "currently-reading"
    }, 
    {
        id: 6, 
        title: "Freakonomics", 
        name: "Stephen J. Dubner, Steven Levitt", 
        status: "to-be-read"
    }, 
    {
        id: 7, 
        title: "The Invisible Life of Addie LaRue", 
        name: "V. E. Schwab", 
        status: "currently-reading"
    }, 
    {
        id: 8, 
        title: "Heartstopper", 
        name: "Alice Oseman", 
        status: "finished-reading"
    }, 
    {
        id: 9, 
        title: "The Seven Husbands of Evelyn Hugo", 
        name: "Taylor Jenkins Reid", 
        status: "finished-reading"
    }
];

mainAddNew.addEventListener("click", () => {
    dialogBoxAdd.classList.remove("closed");
    dialogBoxUpdate.classList.add("closed");

    const title = document.querySelector("#title");
    const name = document.querySelector("#name");
    const status = document.querySelectorAll('input[name="status"]');

    const addButton = document.querySelector("#add");
    addButton.addEventListener("click", () => {
        const titleValue = title.value;
        const nameValue = name.value;
        let statusValue;
        for (const radioButton of status) {
            if (radioButton.checked) {
                statusValue = radioButton.value;
                break;
            }
        }
        
        if (titleValue === "" || statusValue === undefined) {
            const errorValueTitle = document.querySelector("#error-title");
            const errorValueStatus = document.querySelector("#error-status");
            if (titleValue === "") {
                errorValueStatus.classList.add("closed");
                errorValueTitle.classList.remove("closed");
            } else {
                errorValueTitle.classList.add("closed");
                errorValueStatus.classList.remove("closed");
            }
        }
        else {
            const temp = {id: ++idValue, title: title.value, name: name.value, status: statusValue};
            if (statusValue === "to-be-read") {
                TBR.innerHTML += `
                <li><button class="mono book" id="book-${idValue}">${title.value}</button></li>
                `
                library.push(temp);
            } else if (statusValue === "currently-reading") {
                CR.innerHTML += `
                <li><button class="mono book" id="book-${idValue}">${title.value}</button></li>
                `
                library.push(temp);
            } else {
                FR.innerHTML += `
                <li><button class="mono book" id="book-${idValue}">${title.value}</button></li>
                `
                document.querySelector("ul")
                library.push(temp);
            }
            title.value = "";
            name.value = "";
            for (const radioButton of status) {
                radioButton.checked = false;
            }
            document.querySelector("#error-title").classList.add("closed");
            document.querySelector("#error-status").classList.add("closed");
           
        }
    });

    const resetButton = document.querySelector("#reset");
    resetButton.addEventListener("click", () => {
        title.value = "";
        name.value = "";
        for (const radioButton of status) {
            radioButton.checked = false;
        }
        document.querySelector("#error-title").classList.add("closed");
        document.querySelector("#error-status").classList.add("closed");
    });
    
})


const dismissButtonAdd = document.querySelector("#dismiss-add");
dismissButtonAdd.addEventListener("click", () => {
    dialogBoxAdd.classList.add("closed");
});

const dialogBoxUpdate = document.querySelector("#dialog-box-update");
const columns = document.querySelectorAll(".column");
columns.forEach(column => {
    column.addEventListener("click", handleBookClick);
});

let clickedBookId;
let currentStatus;

function handleBookClick(event) {
    if (event.target.classList.contains("book") && event.target.tagName === 'BUTTON') {
        clickedBookId = parseInt(event.target.id.split('-')[1]);
        dialogBoxUpdate.classList.remove("closed");
        dialogBoxAdd.classList.add("closed");

        const title = document.querySelector("#title-update");
        const name = document.querySelector("#name-update");
        const status = document.querySelectorAll('input[name="status-update"]');

        library.forEach(book => {
            if (book.id === clickedBookId) {
                const bookDetails = book;
                title.value = bookDetails.title;
                name.value = bookDetails.name;
                status.forEach(option => {
                    if (option.value === bookDetails.status) {
                        option.checked = true;
                        return;
                    }
                })
                currentStatus = bookDetails.status
                return;
            }
        })
        // console.log(bookDetails);
        // console.log(currentStatus);

    }
}

const updateButton = document.querySelector("#update");
updateButton.addEventListener("click", () => {
    console.log(clickedBookId);
    const title = document.querySelector("#title-update");
    const name = document.querySelector("#name-update");
    const status = document.querySelectorAll('input[name="status-update"]');   

    console.log(title.value, name.value);
    const errorValueTitle = document.querySelector("#error-title");
    const errorValueStatus = document.querySelector("#error-status");

    if (title.value === "" || status.value === undefined) {
        if (title.value === "") {
            errorValueStatus.classList.add("closed");
            errorValueTitle.classList.remove("closed");
        } else {
            errorValueTitle.classList.add("closed");
            errorValueStatus.classList.remove("closed");
        }
        errorValueTitle.classList.add("closed");
        errorValueStatus.classList.add("closed");
    }
            
    //console.log(clickedBookId);
    library.forEach(book => {
        if (book.id === clickedBookId) {
            book.title = title.value;
            book.name = name.value;
            status.forEach(option => {
                if (option.checked === true) {
                    book.status = option.value;
                    newStatus = book.status;
                    return;
                }
            });
            document.querySelector(`#book-${clickedBookId}`).innerText = book.title;
            if (currentStatus !== newStatus) {
                const toRemove = document.getElementById(`book-${clickedBookId}`).parentElement;
                toRemove.parentNode.removeChild(toRemove);

                if (newStatus === "to-be-read") {
                    TBR.innerHTML += `
                    <li><button class="mono book" id="book-${clickedBookId}">${book.title}</button></li>
                    `;
                } else if (newStatus === "currently-reading") {
                    CR.innerHTML += `
                    <li><button class="mono book" id="book-${clickedBookId}">${book.title}</button></li>
                    `;
                } else {
                    FR.innerHTML += `
                    <li><button class="mono book" id="book-${clickedBookId}">${book.title}</button></li>
                    `;
                }
            }
        }
    });
});

const deleteButton = document.querySelector("#delete");
deleteButton.addEventListener("click", () => {    
    const deleteIndex = library.findIndex(book => book.id === clickedBookId);
    if (deleteIndex !== -1) {
        library.splice(deleteIndex, 1);
    }
    const toDelete = document.getElementById(`book-${clickedBookId}`).parentElement;
    toDelete.parentNode.removeChild(toDelete);

    document.querySelector("#title-update").value = "";
    document.querySelector("#name-update").value = "";
    const status = document.querySelectorAll('input[name="status-update"]'); 
    for (const radioButton of status) {
        radioButton.checked = false;
    }
    dialogBoxUpdate.classList.add("closed");
});

const dismissButtonUpdate = document.querySelector("#dismiss-update");
dismissButtonUpdate.addEventListener("click", () => {
    dialogBoxUpdate.classList.add("closed");
});