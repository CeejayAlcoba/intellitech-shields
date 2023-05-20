import { useUser } from "../hooks/useUser";
import { useLog } from "../hooks/useLog";
import { Table } from "../../../utils/components/table/Table";
import { PieChart } from "../../../utils/components/charts/pieChart/PieChart";
import { BarChart } from "../../../utils/components/charts/barChart/BarChart";
import { GaugePlot } from "../../../utils/components/charts/progressPlot/gaugePlot/GuagePlot";
import { PageLayout } from "../../../utils/layouts/pageLayout/PageLayout";
import { GeographicHeatmap } from "../../../utils/components/charts/heatMap/HeatMap";

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
      <div class="container">
        {/* <div class="row">
          <div class="col-md-6 border">
            <div className="w-100">
              <img
                className="w-100"
                src="/images/example-photo.png"
                alt="Image"
              />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div>
                <Table data={data} columns={columns} />
              </div>
            </div>
            <div class="col-6">
              <div class="row">
                <div class="col">col</div>
                <div class="w-100"></div>
                <div class="col">col3</div>
              </div>
              <div class="row">
              <div class="col-sm-1 w-50 h-50">
                <PieChart />
              </div>
              <div class="w-100"></div>
              <div class="col-sm-1 w-50 h-50">
                <BarChart />
              </div>
            </div>
            </div>
          </div>
        </div> */}
        <div class="row">
          <div class="col-7">
            <div className="w-100">
              <img
                className="w-100"
                src="/images/example-photo.png"
                alt="Image"
              />
            </div>
          </div>
          <div class="col-4">
            <PieChart />
          </div>
          <div class="w-100"></div>
          <div class="col-7 mt-4">
            <Table data={data} columns={columns} title={"Miners info"} />
          </div>
          <div class="col-4">
            <BarChart />
          </div>
        </div>
      </div>
    </>
  );
}
