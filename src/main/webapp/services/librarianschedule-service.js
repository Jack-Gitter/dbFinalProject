
const ADD_SCHEDULE_URL = "http://localhost:8080/addSchedule"
const REMOVE_SCHEDULE_URL = "http://localhost:8080/removeSchedule"
const FIND_ALL_URL = "http://localhost:8080/findAllMappings"


const findAllMappings = () =>
    fetch(`${FIND_ALL_URL}`)
    .then(response => response.json())


const addSchedule = (librarian) =>
    fetch(`${ADD_SCHEDULE_URL}/${librarian.scheduleId}/ToLibrarian/${librarian.librarianId}`)
    .then(response => response.json())


const removeSchedule = (librarian) =>
    fetch(`${REMOVE_SCHEDULE_URL}/${librarian.scheduleId}/FromLibrarian/${librarian.librarianId}`)



