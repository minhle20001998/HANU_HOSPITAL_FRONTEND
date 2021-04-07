import React, { Component } from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import './Timeline.css'
class TimeLine extends Component {
    render() {
        return <Timeline>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="secondary" variant="outlined" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <div className="timeline">
                        <p className="timeline-content date">02 Jun 2021</p>
                        <p className="timeline-content faculty">Polyclinic Department</p>
                        <p className="timeline-content doctor-name">Dr. Jimmy Ngủyên</p>
                        <p className="timeline-content diagnosis"><b>Diagnosis:</b> High blood pressure</p>
                        <p className="timeline-content note"><b>Note:</b> Exercise regularly</p>
                        <p className="timeline-content prescribe"><b>Prescribe</b> : Boganic, Vitamin C</p>
                    </div>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="secondary" variant="outlined" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <div className="timeline">
                        <p className="timeline-content date">02 Jun 2021</p>
                        <p className="timeline-content faculty">Polyclinic Department</p>
                        <p className="timeline-content doctor-name">Dr. Jimmy Ngủyên</p>
                        <p className="timeline-content diagnosis"><b>Diagnosis:</b> High blood pressure</p>
                        <p className="timeline-content note"><b>Note:</b> Exercise regularly</p>
                        <p className="timeline-content prescribe"><b>Prescribe</b> : Boganic, Vitamin C</p>
                    </div>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    }
}

export default TimeLine;