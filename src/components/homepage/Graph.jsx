import graphData from "../../data/graphData";
import "./Graph.css"
import {
    XAxis,
    YAxis,
    Tooltip,
    AreaChart,
    Area,
    ResponsiveContainer,
} from 'recharts';

const Graph = () => {
    return (
        <div className="mainGraphDiv">
            <div className="graphLabel">
                <div>
                    <p style={{ backgroundColor: "red" }}></p>
                    Lower: $4.896
                </div>
                <div>
                    <p></p>
                    Higher: $6.457
                </div>
            </div>
            <ResponsiveContainer width="100%" height={130}>
                <AreaChart
                    width={500}
                    height={200}
                    data={graphData}
                    syncId="anyId"
                    margin={{
                        top: 20,
                        right: 25,
                        left: -60,
                        bottom: -15,
                    }}
                >
                    <XAxis axisLine={false} dataKey="name" tick={false} />
                    <YAxis axisLine={false} tick={false} />
                    <Tooltip />
                    <Area type="monotone" dataKey="USD" stroke="#F5B3C4" fill="#F5B3C4" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Graph