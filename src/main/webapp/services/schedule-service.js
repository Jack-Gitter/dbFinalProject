const FIND_ALL_SCHEDULES = "http://localhost:8080/findAllSchedules"
const FIND_SCHEDULE_BY_ID = "http://localhost:8080/findScheduleById"
const CREATE_SCHEDULE_URL = "http://localhost:8080/addSchedule"
const DELETE_SCHEDULE_URL = "http://localhost:8080/deleteSchedule"
const UPDATE_SCHEDULE_URL = "http://localhost:8080/setSchedule"

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

const updateScheduleStartHour = (schedule) =>
    fetch(`${UPDATE_SCHEDULE_URL}/${schedule.scheduleId}/StartHour/${schedule.startHour}`)
    .then(response => response.json())

const updateScheduleEndHour = (schedule) =>
    fetch(`${UPDATE_SCHEDULE_URL}/${schedule.scheduleId}/EndHour/${schedule.endHour}`)
    .then(response => response.json())