import React from "react";
import  Menu1  from "../components/Menu1";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { withRouter } from "react-router-dom";
import "../styles/Mapa1.css";

const Mapa1 = () => {
  return (
<div>
<Menu1/>
<div>     
<Map center={{ lat: "6.2470025", lng: "-75.537933" }} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='& amp; copiar <a href="http://osm.org/copyright"> OpenStreetMap </a> colaboradores'
      />
    </Map>
</div>
  
 </div>
  );
};
export default withRouter(Mapa1);