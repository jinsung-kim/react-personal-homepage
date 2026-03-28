import React, {useEffect} from 'react';
import posthog from 'posthog-js';
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import DataTable from "../components/DataTable";

const PROJECTS = [
    {
        redirectTo: 'https://github.com/jinsung-kim/trompowsky-engine',
        title: 'Building a (inefficient) chess engine from scratch',
        subtitle: 'Exploring mini max game theory, pruning techniques for efficiency, and good testing practices.'
    },
    {
        redirectTo: 'https://github.com/jinsung-kim/internet-experiments/blob/main/mta_tracking.ipynb',
        title: 'How do train time tables work in real time?',
        subtitle: 'An analysis of GTFS protocol to get the next Manhattan bound trains for the Morgan Stop. This eventually turned into an iOS widget on my phone.'
    },
    {
        redirectTo: 'https://github.com/jinsung-kim/internet-experiments/blob/main/garmin_analysis.ipynb',
        title: 'Garmin "Wrapped"',
        subtitle: 'Exporting my workout logs to track the last 6 months of workouts logged on my Garmin.'
    },
    {
        redirectTo: 'https://github.com/jinsung-kim/advent-of-code/tree/main/2025',
        title: 'Advent of Code 2025',
        subtitle: 'Chose Python as my weapon of choice for the latest year.'
    }
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
                    Rabbit Holes
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