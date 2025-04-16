import { onMount } from "solid-js";
import * as d3 from "d3";
import worldData from "../lib/world.json";

interface Props {
  isFullSize?: boolean;
}

const GlobeComponent = (props: Props) => {
  let mapContainer: HTMLDivElement | undefined;

  const visitedCountries = ["India"];

  onMount(() => {
    if (!mapContainer) return;

    const width = mapContainer.clientWidth;
    const height = mapContainer.clientHeight;
    const sensitivity = 75;

    let projection = d3
      .geoOrthographic()
      .scale(props.isFullSize ? 200 : 35)
      .center([0, 0])
      .rotate([0, -30])
      .translate([width / 2, height / 2]);

    const initialScale = projection.scale();
    let pathGenerator = d3.geoPath().projection(projection);

    let svg = d3
      .select(mapContainer)
      .append("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("preserveAspectRatio", "xMidYMid meet")
      .attr("viewBox", `0 0 ${width} ${height}`);

    svg
      .append("circle")
      .attr("fill", "#EEE")
      .attr("stroke", "#000")
      .attr("stroke-width", "0.2")
      .attr("cx", width / 2)
      .attr("cy", height / 2)
      .attr("r", initialScale);

    let map = svg.append("g");

    map
      .append("g")
      .attr("class", "countries")
      .selectAll("path")
      .data(worldData.features)
      .enter()
      .append("path")
      .attr("d", (d: any) => pathGenerator(d as any))
      .attr("fill", (d: { properties: { name: string } }) =>
        visitedCountries.includes(d.properties.name) ? "#E63946" : "white"
      )
      .style("stroke", "black")
      .style("stroke-width", 0.3)
      .style("opacity", 0.8);

    d3.timer(() => {
      const rotate = projection.rotate();
      const k = sensitivity / projection.scale();
      projection.rotate([rotate[0] - 1 * k, rotate[1]]);
      svg.selectAll("path").attr("d", (d: any) => pathGenerator(d as any));
    }, 200);
  });

  return (
    <div class={`w-full h-full flex items-center justify-center ${props.isFullSize ? 'min-h-[400px]' : ''}`}>
      <div class={props.isFullSize ? 'w-full h-full' : 'w-[80px] h-[80px]'} ref={mapContainer}></div>
    </div>
  );
};

export default GlobeComponent;
