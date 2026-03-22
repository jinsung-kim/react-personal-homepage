import React, {useEffect} from 'react';
import posthog from 'posthog-js';
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import DataTable from "../components/DataTable";

const PROJECTS = [
    {
        redirectTo: 'https://github.com/jinsung-kim/trompowsky-engine',
        title: 'Building a chess engine from scratch (ineffectively)',
        subtitle: 'Exploring mini max game theory, pruning techniques for efficiency, and the importance of testing'
    },
    {
        redirectTo: 'https://github.com/jinsung-kim/internet-experiments/blob/main/mta_tracking.ipynb',
        title: 'How do train time tables work in real time?',
        subtitle: 'An analysis of GTFS protocol to get the next Manhattan bound trains for the Morgan Stop'
    },
    // TODO: Add Garmin analysis when it's done.
    // TODO: Add Spotify stuff when it comes in.
]

export default function Misc() {
    useEffect(() => {
        posthog.capture('MiscPageView');
    }, []);

    return (
        <Container>
            <Navbar currentIndex={2}/>
            <div>
                <div className='project-label'>
                    Projects
                </div>
                <DataTable data={PROJECTS} secondaryColor="#808080"/>
            </div>
            <style jsx="true">{`
                .project-label {
                    font-size: 16px;
                    font-family: 'Roboto', sans-serif;
                    margin-bottom: 6px;
                }
            `}</style>
        </Container>
    );
}