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
                    <p style={{ backgroundColor: "#ef2755" }}></p>
                    Lower: $4.896
                </div>
                <div>
                    <p></p>
                    Higher: $6.457
                </div>
            </div>
            <div className="theRate">
                <p></p>
                1 BTC = $5.483
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
                        bottom: -19,
                    }}
                >
                    <XAxis axisLine={false} dataKey="name" tick={false} />
                    <YAxis axisLine={false} tick={false} />
                    <Tooltip />
                    <Area type="monotone" dataKey="USD" stroke="#ffc743" fill="#FFF6ED" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Graph