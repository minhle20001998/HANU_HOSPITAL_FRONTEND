import React, { Component } from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import './Timeline.css'
class TimeLine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            records: this.props.records
        }
    }


    render() {
        const { records } = this.state;
        return <Timeline>
            {records && records.map(record => <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="secondary" variant="outlined" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <div className="timeline">
                        <p className="timeline-content date">{record.date}</p>
                        <p className="timeline-content doctor-name">Under development</p>
                        <p className="timeline-content diagnosis"><b>Diagnosis:</b> {record.description}</p>
                        <p className="timeline-content note"><b>Note:</b> Exercise regularly</p>
                        <p className="timeline-content prescribe">
                            <div className="flex-between">
                                <div style={{ fontWeight: 'bold' }} className="flex-center">Prescribe</div>
                                <IconButton aria-label="add" ><AddIcon id="add-btn" /></IconButton>
                            </div>
                            <table className="pres-table" style={{ width: "100%" }}>
                                <tr>
                                    <th>Name</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Dosage</th>
                                </tr>
                                <tr>
                                    <td>boganic</td>
                                    <td>05-05-2000</td>
                                    <td>06-06-2000</td>
                                    <td>5</td>
                                </tr>
                            </table>
                        </p>
                    </div>

                </TimelineContent>
            </TimelineItem>
            )}

        </Timeline>

    }
}

export default TimeLine;