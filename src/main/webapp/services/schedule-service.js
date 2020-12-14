const FIND_ALL_SCHEDULES = "http://localhost:8080/findAlllibrarians"
const FIND_SCHEDULE_BY_ID = "http://localhost:8080/findlibrarianById"
const CREATE_SCHEDULE_URL = "http://localhost:8080/createlibrarian"
const DELETE_SCHEDULE_URL = "http://localhost:8080/deletelibrarian"

const findAllSchedules = () =>
    fetch(`${FIND_ALL_SCHEDULES}`)
        .then(response => response.json())

const findScheduleById = (id) =>
    fetch(`${FIND_SCHEDULE_BY_ID}/${id}`)
        .then(response => response.json())

const createSchedule = () =>
    fetch(`${CREATE_SCHEDULE_URL}`)
        .then(response => response.json())

const deleteSchedule = (id) =>
    fetch(`${DELETE_SCHEDULE_URL}/${id}`)