import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import tw from "twin.macro";

// styles

const MapContainer = tw.div`
	m-auto
	lg:m-0
    md:w-[80%]
	height[20rem]
    md:height[25rem]
    rounded
    overflow-hidden
    `;

const LocationPin = ({ text }) => (
	<div className="text-primary">
		<FaMapMarkerAlt fontSize="2rem" />
		<p className="text-black">{text}</p>
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
