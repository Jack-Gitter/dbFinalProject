const FIND_ALL_MEMBERS  = "http://localhost:8080/findAllMembers"
const FIND_MEMBER_BY_ID = "http://localhost:8080/findMemberById"
const CREATE_MEMBER_URL = "http://localhost:8080/addMember"
const DELETE_MEMBER_URL = "http://localhost:8080/removeMember"
const UPDATE_MEMBER     = "http://localhost:8080/updateMember"
const ADD_BOOK     = "http://localhost:8080/addBook"
const RETURN_BOOK     = "http://localhost:8080/returnBook"



const findAllMembers = () =>
  fetch(`${FIND_ALL_MEMBERS}`)
    .then(response => response.json())

const findMemberById = (lcid) =>
  fetch(`${FIND_MEMBER_BY_ID}/${lcid}`)
    .then(response => response.json())

const createMember = (member) =>
  fetch(`${CREATE_MEMBER_URL}`)
    .then(response => response.json())


const addBook = (member) =>
    fetch(`${ADD_BOOK}/${member.bookId}/ToMember/${member.libraryCardId}`)
    .then(response => response.json())

const returnBook = (member) =>
    fetch(`${RETURN_BOOK}/${member.bookId}/FromMember/${member.libraryCardId}`)
    .then(response => response.json())

const deleteMember = (lcid) =>
  fetch(`${DELETE_MEMBER_URL}/${lcid}`)

const updateMemberName = (member) =>
  fetch(`${UPDATE_MEMBER}/${member.libraryCardId}/Name/${member.name}`)
    .then(response => response.json())

const updateMemberDay = (member) =>
    fetch(`${UPDATE_MEMBER}/${member.libraryCardId}/Day/${member.day}`)
    .then(response => response.json())

const updateMemberMonth = (member) =>
    fetch(`${UPDATE_MEMBER}/${member.libraryCardId}/Month/${member.month}`)
    .then(response => response.json())

const updateMemberYear = (member) =>
    fetch(`${UPDATE_MEMBER}/${member.libraryCardId}/Year/${member.year}`)
    .then(response => response.json())
