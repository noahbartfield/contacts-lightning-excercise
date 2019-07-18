// 1. In your HTML, define an `<article>` element with an id of `contactList`
// 2. Create a function called `createContact`.  The function should return a new object with three properties: `name`, `title`, `email`.
// 3. Design `createContact` to accept three arguments, which will be used to make the object.

const createContact = (name, title, email) => ({
        name, title, email
    })


// 1. Write another function named `displyContact`. Design it to accept a contact object as an argument.
// 2. Use `document.querySelector()` and `innerHTML += ...` to add a new `<section>` element as a child to your `<article>`.
// 3. The `<section>` should have a class of `contact`.
// 4. The contact should display the name of the contact in an `<h1>` element, and the title as an `<h2>` element, and the email in a `<div>` element




const allContacts = document.querySelector("#contactList")

const displyContact = (contactObject) => {
    const contactHTMLRep = `
    <section class="contact">
        <h1>${contactObject.name}</h1>
        <h2>${contactObject.title}</h2>
        <div>${contactObject.email}</div>
    </section>
    `

    allContacts.innerHTML += contactHTMLRep
}


const noah = createContact("Noah Bartfield", "Father of Elliot", "myemail@gmail.com")
const jake = createContact("Jake Bartfield", "Father of Asher", "his@email")
const andrea = createContact("Andrea Bartfield", "Nana of Elliot and Asher", "her@email")
const joel = createContact("Joel Bartfield", "Z of A and E", "email@email")
const elliot = createContact("Elliot Bartfield", "Son of Noah", "noemail@nothing")
const asher = createContact("Asher Bartfield", "Son of Jake", "noemaileither@gmail.com")

const contacts = [
    noah,
    jake,
    andrea,
    joel,
    elliot,
    asher
]

contacts.forEach(currentContact => {
    displyContact(currentContact)
});

// displyContact(noah)
// displyContact(jake)
// displyContact(andrea)
// displyContact(joel)
// displyContact(elliot)



// contacts.forEach(currentContact => {
//     let current = ""
//     current = displyContact(currentContact.name, currentContact.title, currentContact.email)
//     allContacts.innerHTML += current

// });

