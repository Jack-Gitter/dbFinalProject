class ScheduleList extends React.Component {

    state = {
        schedules: []
    }

    findAllSchedules = () =>
        findAllSChedules()
            .then(schedule => this.setState({schedule}))

    componentDidMount = () =>
        this.findAllSchedules()

    createSchedules = () =>
        createSchedule()
            .then(this.findAllSchedules)

    deleteSchedule = (id) =>
        deleteSchedule(id)
            .then(this.findAllSchedule)

    render() {
        return (
            <div className="containers">
                <h1>Schedule List</h1>
                <table>
                    {
                        this.state.schedules.map(schedule =>
                            <tr key={schedule.scheduleId}>
                                <td>
                                    {schedule.scheduleId}
                                </td>
                                <td>
                                    <button
                                        onClick={() => this.deleteSchedule(movie.scheduleId)}>
                                        Delete Schedule
                                    </button>
                                </td>

                            </tr>
                        )
                    }
                    <button onClick={this.createSchedule}>
                        Create Schedule
                    </button>
                </table>

            </div>
        )
    }
}

ReactDOM.render(
    <ScheduleList/>, document.getElementById("root")
)