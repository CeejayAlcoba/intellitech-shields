import { useUser } from "../hooks/useUser";
import { useLog } from "../hooks/useLog";
import { Table } from "../../../utils/components/table/Table";
import { PieChart } from "../../../utils/components/charts/pieChart/PieChart";
import { BarChart } from "../../../utils/components/charts/barChart/BarChart";
import { GaugePlot } from "../../../utils/components/charts/progressPlot/gaugePlot/GuagePlot";
import { PageLayout } from "../../../utils/layouts/pageLayout/PageLayout";
import { GeographicHeatmap } from "../../../utils/components/charts/heatMap/HeatMap";
import { GraphChart } from "../../../utils/components/charts/graphChart/GraphChart";

export default function Dashboard() {
  const data = [
    { id: 1, minersName: "John Doe", helmetId: 1001 },
    { id: 2, minersName: "Jane Smith", helmetId: 1002 },
    { id: 3, minersName: "Bob Johnson", helmetId: 1003 },
  ];

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Miners Name", dataIndex: "minersName", key: "name" },
    { title: "Helmet Id", dataIndex: "helmetId", key: "age" },
  ];
  return (
    <>
      <div className="container">
        {/* <div className="row">
          <div className="col-md-6 border">
            <div className="w-100">
              <img
                className="w-100"
                src="/images/example-photo.png"
                alt="Image"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div>
                <Table data={data} columns={columns} />
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col">col</div>
                <div className="w-100"></div>
                <div className="col">col3</div>
              </div>
              <div className="row">
              <div className="col-sm-1 w-50 h-50">
                <PieChart />
              </div>
              <div className="w-100"></div>
              <div className="col-sm-1 w-50 h-50">
                <BarChart />
              </div>
            </div>
            </div>
          </div>
        </div> */}
        <div className="row">
          <div className="col-7">
            <div className="w-100">
              <img
                className="w-100 rounded"
                src="/images/example-photo.png"
                alt="Image"
              />
            </div>
          </div>
          <div className="col-4">
            <GraphChart />
          </div>
          <div className="w-100"></div>
          <div className="col mt-4">
            <Table data={data} columns={columns} title={"Miners info"} />
          </div>
          
        </div>
      </div>
    </>
  );
}
