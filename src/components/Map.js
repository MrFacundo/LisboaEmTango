import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import tw from "twin.macro";

const MapContainer = tw.div`
    w-[80%]
    height[25rem]
    rounded
    overflow-hidden
    `;

const LocationPin = ({ text }) => (
	<div className="pin">
		<FaMapMarkerAlt fontSize="2rem" />
		<p className="pin-text">{text}</p>
	</div>
);

const Map = ({ location, zoomLevel }) => (
	<MapContainer>
		<GoogleMapReact
			bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
			defaultCenter={location}
			defaultZoom={zoomLevel}
		>
			<LocationPin
				lat={location.lat}
				lng={location.lng}
				text={location.address}
			/>
		</GoogleMapReact>
	</MapContainer>
);

export default Map;
