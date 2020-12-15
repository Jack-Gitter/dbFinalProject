
const ADD_SCHEDULE_URL = "http://localhost:8080/addSchedule"
const REMOVE_SCHEDULE_URL = "http://localhost:8080/addSchedule"
const FIND_ALL_URL = "http://localhost:8080/findAllMappings"


const findAllMappings = () =>
    fetch(`${FIND_ALL_URL}`)
    .then(response => response.json())


const addSchedule = (schedule, librarian) =>
    fetch(`${ADD_SCHEDULE_URL/schedule.schedule/ToLibrarian/librarian.librarianId}`)
    .then(response => response.json())


const removeSchedule = (schedule, librarian) =>
    fetch(`${REMOVE_SCHEDULE_URL/schedule.schedule/FromLibrarian/librarian.librarianId}`)
    .then(response => response.json())




