const FIND_ALL_MEMBERS  = "http://localhost:8080/findAllSections"
const FIND_MEMBER_BY_ID = "http://localhost:8080/findSectionById"
const CREATE_MEMBER_URL = "http://localhost:8080/createSection"
const DELETE_MEMBER_URL = "http://localhost:8080/deleteSection"
const UPDATE_MEMBER     = "http://localhost:8080/updateSection"

const findAllMembers = () =>
  fetch(`${FIND_ALL_MEMBERS}`)
    .then(response => response.json())

const findMemberById = (lcid) =>
  fetch(`${FIND_MEMBER_BY_ID}/${lcid}`)
    .then(response => response.json())

const createMember = (member) =>
  fetch(`${CREATE_MEMBER_URL}`)
    .then(response => response.json())

const deleteMember = (lcid) =>
  fetch(`${DELETE_MEMBER_URL}/${lcid}`)

const updateMember = (member) =>
  fetch(`${UPDATE_MEMBER}/${member.lcid}/${member.name}`)
    .then(response => response.json())
