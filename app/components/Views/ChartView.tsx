"use client"
import { ApexOptions } from 'apexcharts';
import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic';


const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ChartView = () => {
    const [colors, setColors] = useState<string | undefined>();
    const [isClient, setIsClient] = useState(false);
    const [state, setState] = useState<{ 
        series: ApexAxisChartSeries | ApexNonAxisChartSeries | undefined, 
        options: ApexOptions 
    }>({
        series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
        }],
        options: {
            chart: {
                height: 350,
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'datetime',
                categories: [
                    "2018-09-19T00:00:00.000Z", 
                    "2018-09-19T01:30:00.000Z", 
                    "2018-09-19T02:30:00.000Z", 
                    "2018-09-19T03:30:00.000Z", 
                    "2018-09-19T04:30:00.000Z", 
                    "2018-09-19T05:30:00.000Z", 
                    "2018-09-19T06:30:00.000Z"
                ]
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        },
    });

    useEffect(() => {
        setIsClient(true);
        
        // Only run this on the client side
        if (typeof window !== 'undefined') {
            const elem = document.getElementById('parent');
            if (elem) {
                const rel = getComputedStyle(elem).color;
                setColors(rel);
            }
        }
    }, []);

    // Render nothing on server side
    if (!isClient) {
        return null;
    }

    return (
        <div id='parent' className='w-full h-full bg-secondary rounded-2xl p-5 overflow-hidden *:text-text-primary'>
            <ReactApexChart 
                options={state.options} 
                series={state.series} 
                type="area" 
                height={270} 
            />
        </div>
    )
}

export default ChartView